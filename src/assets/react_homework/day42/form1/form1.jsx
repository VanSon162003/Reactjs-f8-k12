import React, { useEffect, useState } from "react";
import useFormValues from "../hook/useFormValues";
import useProduct from "../hook/useProduct";
import useCounter from "../hook/useCounter";

function Form1() {
    const [valueInput, handleInput] = useFormValues({
        firstName: "",
        lastName: "",
    });

    const [product, isLoading] = useProduct({
        page: 1,
        per_page: 10,
    });

    const [count, increase] = useCounter(10);

    return (
        <>
            <form action="">
                <input
                    type="text"
                    name="firstName"
                    value={valueInput.firstName}
                    onChange={handleInput}
                    placeholder="firstName..."
                />

                <br />

                <input
                    type="text"
                    name="lastName"
                    value={valueInput.lastName}
                    onChange={handleInput}
                    placeholder="lastName..."
                />
            </form>

            <button onClick={increase}>count {count}</button>
        </>
    );
}

export default Form1;
