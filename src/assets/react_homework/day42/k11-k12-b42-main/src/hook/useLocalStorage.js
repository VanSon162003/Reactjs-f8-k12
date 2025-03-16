import { useEffect, useState } from "react";

function useLocalStorage(key, value) {
    const [name, setName] = useState(() => {
        return JSON.parse(localStorage.getItem(key)) ?? value;
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(name));
    }, [key, name]);

    return [name, setName];
}

export default useLocalStorage;
