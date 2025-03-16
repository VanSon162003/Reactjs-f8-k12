import { useState, useEffect } from "react";
import useFetch from "../../hook/useFetch";

function Exercise6() {
    const { data, loading, error } = useFetch(
        "https://jsonplaceholder.typicode.com/posts"
    );
    if (loading) return <p>Đang tải...</p>;
    if (error) return <p>Lỗi: {error}</p>;

    return (
        <ul>
            {data.map((post) => (
                <li key={post.id}>{post.title}</li>
            ))}
        </ul>
    );
}

export default Exercise6;
