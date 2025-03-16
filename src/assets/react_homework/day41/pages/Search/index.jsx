import React, { useEffect, useState } from "react";
import ProductList from "../../components/ProductList";
import Loading from "../../components/Loading";
import "./Search.css";
import { data } from "react-router-dom";

const Search = () => {
    const [isLoading, setIsLoading] = useState(false);

    const [valueInput, setValueInput] = useState("");

    // product,

    const handleChange = (e) => {
        setValueInput(e.target.value);
    };

    return (
        <div className="page-container">
            <h1 className="search-title">Tìm kiếm sản phẩm</h1>

            <div className="search-bar">
                <input
                    type="text"
                    className="search-input"
                    placeholder="Nhập tên sản phẩm..."
                    value={valueInput}
                    onChange={handleChange}
                />
                <button className="search-button">Tìm kiếm</button>
            </div>
            {isLoading && <Loading />}

            <ProductList setIsLoading={setIsLoading} valueInput={valueInput} />

            {/* Loading nhé */}
            {/* <Loading /> */}

            {/* Message hiển thị khi không tìm thấy nhé AE */}
            {/* <p className="empty-message">Không tìm thấy sản phẩm nào.</p> */}
        </div>
    );
};

export default Search;
