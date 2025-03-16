import { useEffect, useState } from "react";
import "./ProductList.css";
import { data } from "react-router-dom";

function ProductList({ setIsLoading, valueInput = null }) {
    const params = new URLSearchParams(location.search);
    const [products, setProducts] = useState([]);

    const [page, setPage] = useState(() => {
        return +params.get("page") || 1;
    });
    const [totalPage, setTotalPage] = useState(1);

    const [perPage, setPerPage] = useState(10);

    const [productListSearch, setProductListSearch] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        fetch(
            `https://api01.f8team.dev/api/products?page=${page}&per_page=${perPage}`
        )
            .then((res) => res.json())
            .then((data) => {
                setProducts(data.data);
                setProductListSearch(data.data);

                setTotalPage(Math.ceil(data.total / perPage));
                console.log(data);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, [page, perPage]);

    //search

    useEffect(() => {
        if (valueInput) {
            const timeId = setTimeout(() => {
                setIsLoading(true);
                fetch(
                    `https://api01.f8team.dev/api/products?q=${valueInput}&page=1&per_page=10`
                )
                    .then((res) => res.json())
                    .then((data) => {
                        setProductListSearch(data.data);
                    })
                    .finally(() => {
                        setIsLoading(false);
                    });
            }, 500);

            return () => {
                clearTimeout(timeId);
            };
        }
    }, [valueInput]);

    const handleCLickButton = (e) => {
        if (e.target.closest(".page-number")) {
            const value = +e.target.innerText;
            setPage(value);
            params.set("page", value);
            history.replaceState(null, null, `?${params}`);
        }

        if (e.target.closest(".prev")) {
            if (page > 1) {
                setPage(page - 1);

                params.set("page", page - 1);
                history.replaceState(null, null, `?${params}`);
            } else {
                setPage(totalPage);

                params.set("page", totalPage);
                history.replaceState(null, null, `?${params}`);
            }
        }

        if (e.target.closest(".next")) {
            if (page < totalPage) {
                setPage(page + 1);

                params.set("page", page + 1);
                history.replaceState(null, null, `?${params}`);
            } else {
                setPage(1);

                params.set("page", 1);
                history.replaceState(null, null, `?${params}`);
            }
        }
    };

    return (
        <>
            {!productListSearch.length ? (
                <p className="empty-message">Không có sản phẩm nào.</p>
            ) : (
                <div className="product-list-container">
                    <ul className="product-list">
                        {productListSearch.map((product) => (
                            <li key={product.id} className="product-item">
                                <img
                                    src={product.thumbnail}
                                    alt=""
                                    className="product-image"
                                />
                                <div className="product-info">
                                    <h3 className="product-title">
                                        {product.title}
                                    </h3>
                                    <p className="product-price">{`$${product.price}`}</p>
                                    <p className="product-stock">{`Còn ${product.stock} sản phẩm`}</p>
                                </div>
                            </li>
                        ))}
                    </ul>

                    <div className="pagination-container">
                        <div className="items-per-page">
                            <label htmlFor="itemsPerPage">Hiển thị:</label>
                            <select
                                id="itemsPerPage"
                                className="items-select"
                                onChange={(e) => {
                                    setPerPage(+e.target.value);
                                    params.set("page", 1);

                                    history.replaceState(
                                        null,
                                        null,
                                        `?${params}`
                                    );

                                    setPage(1);
                                }}
                            >
                                <option value="10">10</option>
                                <option value="20">20</option>
                            </select>
                        </div>

                        <div className="pagination" onClick={handleCLickButton}>
                            <button className="page-button prev">
                                ⬅ Trước
                            </button>

                            <div className="page-numbers">
                                {[...Array(totalPage)].map((item, i) => (
                                    <button
                                        key={i}
                                        className={`page-number ${
                                            page === i + 1 ? "active" : ""
                                        }`}
                                    >
                                        {i + 1}
                                    </button>
                                ))}
                            </div>

                            <button className="page-button next">Tiếp ➡</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default ProductList;
