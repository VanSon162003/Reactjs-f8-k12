import React, { useEffect, useState } from "react";

function day40() {
    const param = new URLSearchParams(location.search);

    const [limit, setLimit] = useState(25);

    const [posts, setPosts] = useState([]);

    const [totalPage, setTotalPage] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(() => {
        return +param.get("page") || 1;
    });

    const [filteredPosts, setFilteredPosts] = useState([]);

    const [searchInput, setSearchInput] = useState(() => param.get("q") || "");

    const isSearch = searchInput.trim().length >= 3;

    useEffect(() => {
        param.set("page", currentPage);
        history.replaceState(null, null, `?${param}`);
    }, [currentPage, param]);

    useEffect(() => {
        let skip = (currentPage - 1) * limit;
        fetch(`https://dummyjson.com/posts?limit=${limit}&skip=${skip}`)
            .then((res) => res.json())
            .then((data) => {
                setPosts(data.posts);
                setTotalPage(Math.ceil(data.total / limit));
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, [currentPage, limit]);

    useEffect(() => {
        if (isSearch) {
            const timeID = setTimeout(() => {
                fetch(`https://dummyjson.com/posts/search?q=${searchInput}`)
                    .then((res) => res.json())
                    .then((data) => {
                        param.set("q", searchInput);

                        history.replaceState(null, null, `?${param}`);

                        setFilteredPosts(data.posts);
                    });
            }, 500);

            return () => {
                clearTimeout(timeID);
            };
        } else {
            param.delete("q");
            history.replaceState(null, null, `?${param}`);
        }
    }, [isSearch, searchInput, param]);

    let turnOff = isLoading ? "" : "turn-off";

    function handleButton(e) {
        if (e.target.closest(".page-btn:not(.page-btn.prev, .page-btn.next)")) {
            const numberPage = +e.target.innerText;

            setCurrentPage(numberPage);
        }

        if (e.target.closest(".page-btn.prev")) {
            if (currentPage > 1) {
                setCurrentPage(currentPage - 1);
            } else {
                setCurrentPage(totalPage);
            }
        }

        if (e.target.closest(".page-btn.next")) {
            if (currentPage < totalPage) {
                setCurrentPage(currentPage + 1);
            } else {
                setCurrentPage(1);
            }
        }
    }

    function handleChange(e) {
        setSearchInput(e.target.value);
    }

    const getPosts = () => {
        return isSearch ? filteredPosts : posts;
    };

    return (
        <div className="app">
            <h1>Danh sách bài viết</h1>

            {/* Search Input */}
            <div className="search-container">
                <input
                    type="text"
                    className="search-input"
                    placeholder="Tìm kiếm bài viết..."
                    value={searchInput}
                    onChange={handleChange}
                />
            </div>

            {/* Loading Overlay */}
            <div className={`loading-overlay ${turnOff}`}>
                <div className="loading-spinner"></div>
                <p>Đang tải dữ liệu...</p>
            </div>

            {/* No Results Message  */}
            <p className={`no-results `}>Không tìm thấy bài viết nào.</p>

            {/* List of Posts */}
            <ul className="post-list">
                {getPosts().length ? (
                    getPosts().map((post) => (
                        <li className="post-item" key={post.id}>
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>

                            <div className="post-meta">
                                <span className="views">
                                    👀 {post.views} lượt xem
                                </span>
                                <span className="likes">
                                    👍 {post.reactions.likes}
                                </span>
                                <span className="dislikes">
                                    👎 {post.reactions.dislikes}
                                </span>
                            </div>

                            <div className="tags">
                                {post.tags.map((tag, i) => (
                                    <span key={i} className="tag">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </li>
                    ))
                ) : isSearch ? (
                    <p>không tìm thấy</p>
                ) : (
                    isLoading || <p>không có</p>
                )}
            </ul>

            {/* Pagination */}
            {!isSearch && (
                <div className={`pagination-container`}>
                    <div className="records-per-page">
                        <label htmlFor="records">Hiển thị:</label>
                        <select
                            id="records"
                            className="records-select"
                            onChange={(e) => {
                                const limitValue = +e.target.value;

                                setLimit(limitValue);
                                setCurrentPage(1);
                            }}
                        >
                            <option value="25">25</option>
                            <option value="50">50</option>
                            <option value="100">100</option>
                            <option value="200">200</option>
                        </select>
                    </div>
                    <div className="pagination" onClick={handleButton}>
                        <button className="page-btn prev">« Trước</button>
                        {[...Array(totalPage)].map((item, i) => {
                            const active =
                                i + 1 === currentPage ? "active" : "";
                            return (
                                <button
                                    className={`page-btn ${active}`}
                                    key={i}
                                >
                                    {i + 1}
                                </button>
                            );
                        })}
                        <button className="page-btn next">Sau »</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default day40;
