import { useState } from "react";

function useCounter(initial = 0) {
    const [count, setCount] = useState(initial);

    const increase = () => {
        setCount(count + 1);
    };

    return [count, increase];
}

export default useCounter;
