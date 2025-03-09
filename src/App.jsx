import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

function App() {
    const [limit, setLimit] = useState(25);

    const [posts, setPosts] = useState([]);

    const [totalPage, setTotalPage] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);

    const [filteredPosts, setFilteredPosts] = useState([]);

    const [isOffline, setIsOffLine] = useState(false);
    const [isShow, setIsShow] = useState(false);

    useEffect(() => {
        let skip = (currentPage - 1) * limit;
        fetch(`https://dummyjson.com/posts?limit=${limit}&skip=${skip}`)
            .then((res) => res.json())
            .then((data) => {
                setPosts(data.posts);
                setFilteredPosts(data.posts);

                setTotalPage(Math.ceil(data.total / limit));
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, [currentPage, limit]);

    let turnOff = isLoading ? "" : "turn-off";
    let offline = isOffline ? "off" : "";
    let show = isShow ? "show" : "";

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

    function handleSearch(e) {
        const value = e.target.value.trim();

        if (!value) {
            setFilteredPosts(posts);
            setIsOffLine(false);
            setIsShow(false);
        }

        if (value.length > 3) {
            const searchFilter = posts.filter((post) =>
                post.title.toLowerCase().includes(value.toLowerCase())
            );

            if (searchFilter.length === 0) {
                setIsShow(true);
            } else {
                setIsShow(false);
            }

            setFilteredPosts(searchFilter);
            setIsOffLine(true);
        }
    }

    return (
        <div className="app">
            <h1>Danh sách bài viết</h1>

            {/* Search Input */}
            <div className="search-container">
                <input
                    type="text"
                    className="search-input"
                    placeholder="Tìm kiếm bài viết..."
                    onInput={handleSearch}
                />
            </div>

            {/* Loading Overlay */}
            <div className={`loading-overlay ${turnOff}`}>
                <div className="loading-spinner"></div>
                <p>Đang tải dữ liệu...</p>
            </div>

            {/* No Results Message  */}
            <p className={`no-results  ${show}`}>
                Không tìm thấy bài viết nào.
            </p>

            {/* List of Posts */}
            <ul className="post-list">
                {filteredPosts.map((post) => (
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
                ))}
            </ul>

            {/* Pagination */}
            <div className={`pagination-container ${offline}`}>
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
                        const active = i + 1 === currentPage ? "active" : "";
                        return (
                            <button className={`page-btn ${active}`} key={i}>
                                {i + 1}
                            </button>
                        );
                    })}
                    <button className="page-btn next">Sau »</button>
                </div>
            </div>
        </div>
    );
}

export default App;
