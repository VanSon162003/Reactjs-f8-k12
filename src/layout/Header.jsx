import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/day40">day 40</NavLink>
                </li>
                <li>
                    <NavLink to="/day41">day 41</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Header;
