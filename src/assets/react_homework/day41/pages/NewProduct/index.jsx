import React, { useState } from "react";
import ProductForm from "../../components/ProductForm";
import Loading from "../../components/Loading";

const NewProduct = () => {
    const [isLoading, setIsLoading] = useState(false);

    return (
        <div className="page-container">
            <h1 className="page-title">Tạo Sản Phẩm Mới</h1>

            {/* Loading nhé */}
            {/* <Loading /> */}

            {isLoading && <Loading />}

            <ProductForm
                submitTitle="Tạo sản phẩm"
                setIsLoading={setIsLoading}
            />
        </div>
    );
};

export default NewProduct;
