import { useState } from "react";

function useFormValues(initialValue) {
    const [valueInput, setValueInput] = useState(initialValue);

    const handleInput = (e) => {
        setValueInput({
            ...valueInput,
            [e.target.name]: e.target.value,
        });
    };

    return [valueInput, handleInput, setValueInput];
}

export default useFormValues;
