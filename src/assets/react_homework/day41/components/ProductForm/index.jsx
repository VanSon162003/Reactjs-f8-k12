import React, { useState } from "react";
import "./ProductForm.css";
import { useNavigate } from "react-router-dom";

const ProductForm = ({ submitTitle = "", setIsLoading }) => {
    const navigate = useNavigate();
    const [productData, setProductData] = useState({
        title: "",
        description: "",
        category: "",
        price: "",
        discountPercentage: "",
        rating: "",
        stock: "",
        tags: "",
        brand: "",
        sku: "",
        weight: "",
        minimumOrderQuantity: "",
        thumbnail: "",
    });

    const [err, setErr] = useState({});

    const postProduct = async () => {
        try {
            setIsLoading(true);
            const res = await fetch("https://api01.f8team.dev/api/products", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(productData),
            });

            if (!res.ok) {
                return await res.text();
            }
        } catch (error) {
            console.log(error);
        }
    };

    const handleChange = (e) => {
        setProductData((prev) => {
            return {
                ...prev,
                [e.target.name]:
                    e.target.name === "price" ||
                    e.target.name === "rating" ||
                    e.target.name === "stock" ||
                    e.target.name === "weight" ||
                    e.target.name === "minimumOrderQuantity" ||
                    e.target.name === "discountPercentage"
                        ? +e.target.value
                        : e.target.value,
            };
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const checkErr = await postProduct();

        if (checkErr) {
            console.log(JSON.parse(checkErr));

            setErr(JSON.parse(checkErr));
        } else {
            setErr({});
            navigate("/products");
        }

        setIsLoading(false);
    };

    return (
        <div className="product-form-container">
            <form className="product-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <input
                        type="text"
                        name="title"
                        className="form-input"
                        placeholder="Tên sản phẩm"
                        required
                        value={productData.title}
                        onChange={handleChange}
                    />
                    {err.title && <p className="error-message">{err.title}</p>}
                </div>

                <div className="form-group">
                    <textarea
                        name="description"
                        className="form-textarea"
                        placeholder="Mô tả sản phẩm"
                        required
                        value={productData.description}
                        onChange={handleChange}
                    />
                    {err.description && (
                        <p className="error-message">{err.description}</p>
                    )}
                </div>

                <div className="form-group">
                    <input
                        type="text"
                        name="category"
                        className="form-input"
                        placeholder="Danh mục"
                        required
                        value={productData.category}
                        onChange={handleChange}
                    />
                    {err.category && (
                        <p className="error-message">{err.category}</p>
                    )}
                </div>

                <div className="form-group">
                    <input
                        type="number"
                        name="price"
                        className="form-input"
                        placeholder="Giá ($)"
                        required
                        value={productData.price}
                        onChange={handleChange}
                    />
                    {err.price && <p className="error-message">{err.price}</p>}
                </div>

                <div className="form-group">
                    <input
                        type="number"
                        name="discountPercentage"
                        className="form-input"
                        placeholder="Giảm giá (%)"
                        required
                        value={productData.discountPercentage}
                        onChange={handleChange}
                    />
                    {err.discountPercentage && (
                        <p className="error-message">
                            {err.discountPercentage}
                        </p>
                    )}
                </div>

                <div className="form-group">
                    <input
                        type="number"
                        name="rating"
                        className="form-input"
                        placeholder="Đánh giá (0-5)"
                        required
                        value={productData.rating}
                        onChange={handleChange}
                    />
                    {err.rating && (
                        <p className="error-message">{err.rating}</p>
                    )}
                </div>

                <div className="form-group">
                    <input
                        type="number"
                        name="stock"
                        className="form-input"
                        placeholder="Tồn kho"
                        required
                        value={productData.stock}
                        onChange={handleChange}
                    />
                    {err.stock && <p className="error-message">{err.stock}</p>}
                </div>

                <div className="form-group">
                    <input
                        type="text"
                        name="tags"
                        className="form-input"
                        placeholder="Tags (cách nhau bằng dấu phẩy)"
                        required
                        value={productData.tags}
                        onChange={(e) => {
                            setProductData((prev) => {
                                return {
                                    ...prev,
                                    [e.target.name]: e.target.value.split(","),
                                };
                            });
                        }}
                    />
                    {err.tags && <p className="error-message">{err.tags}</p>}
                </div>

                <div className="form-group">
                    <input
                        type="text"
                        name="brand"
                        className="form-input"
                        placeholder="Thương hiệu"
                        required
                        value={productData.brand}
                        onChange={handleChange}
                    />
                    {err.brand && <p className="error-message">{err.brand}</p>}
                </div>

                <div className="form-group">
                    <input
                        type="text"
                        name="sku"
                        className="form-input"
                        placeholder="Mã SKU"
                        required
                        value={productData.sku}
                        onChange={handleChange}
                    />
                    {err.sku && <p className="error-message">{err.sku}</p>}
                </div>

                <div className="form-group">
                    <input
                        type="number"
                        name="weight"
                        className="form-input"
                        placeholder="Trọng lượng (kg)"
                        required
                        value={productData.weight}
                        onChange={handleChange}
                    />
                    {err.weight && (
                        <p className="error-message">{err.weight}</p>
                    )}
                </div>

                <div className="form-group">
                    <input
                        type="number"
                        name="minimumOrderQuantity"
                        className="form-input"
                        placeholder="Số lượng tối thiểu"
                        required
                        value={productData.minimumOrderQuantity}
                        onChange={handleChange}
                    />
                    {err.minimumOrderQuantity && (
                        <p className="error-message">
                            {err.minimumOrderQuantity}
                        </p>
                    )}
                </div>

                <div className="form-group">
                    <input
                        type="text"
                        name="thumbnail"
                        className="form-input"
                        placeholder="URL hình ảnh"
                        required
                        value={productData.thumbnail}
                        onChange={handleChange}
                    />
                    {err.thumbnail && (
                        <p className="error-message">{err.thumbnail}</p>
                    )}
                </div>

                <button type="submit" className="submit-button">
                    {submitTitle}
                </button>
            </form>
        </div>
    );
};

export default ProductForm;
