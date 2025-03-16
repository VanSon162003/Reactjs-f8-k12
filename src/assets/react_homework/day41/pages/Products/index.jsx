import React, { useState } from "react";
import ProductList from "../../components/ProductList";
import Loading from "../../components/Loading";

const Products = () => {
    const [isLoading, setIsLoading] = useState(false);

    return (
        <div className="page-container">
            <h1 className="page-title">Danh Sách Sản Phẩm</h1>

            {/* Loading nhé */}
            {/* <Loading /> */}
            {isLoading && <Loading />}
            <ProductList setIsLoading={setIsLoading} />

            {/* Message hiển thị khi danh sách trống nhé AE */}
        </div>
    );
};

export default Products;
