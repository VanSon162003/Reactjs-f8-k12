import { useEffect, useState } from "react";

function useProduct(param = {}) {
    const [products, setProduct] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        fetch(
            `https://api01.f8team.dev/api/products?page=${param.page}&per_page=${param.per_page}`
        )
            .then((res) => res.json())
            .then((data) => setProduct(data))
            .finally(() => setIsLoading(false));
    }, []);

    return [products, isLoading];
}

export default useProduct;
