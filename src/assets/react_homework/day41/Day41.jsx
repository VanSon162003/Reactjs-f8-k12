import React from "react";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import NewProduct from "./pages/NewProduct";
import Products from "./pages/Products";
import Search from "./pages/Search";
import "./day41.css";
import Navga from "./components/Nav";

function day41() {
    return (
        <BrowserRouter>
            <Navga />
            <Routes>
                <Route path="/new-product" element={<NewProduct />} />
                <Route path="/products" element={<Products />} />
                <Route path="/search" element={<Search />} />
            </Routes>
        </BrowserRouter>
    );
}

export default day41;
