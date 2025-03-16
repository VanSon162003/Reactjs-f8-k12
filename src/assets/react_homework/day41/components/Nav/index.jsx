import React from "react";
import { Link } from "react-router-dom";

function Navga() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/new-product">thêm product</Link>
                </li>
                <li>
                    <Link to="/products">product</Link>
                </li>

                <li>
                    <Link to="/search">tìm product</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navga;
