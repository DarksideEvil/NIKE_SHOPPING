import React from "react";
import Navbar from "../component/navbar";
import { Routes, Route } from "react-router-dom";
import Home from '../view/home/index'
import Cart from '../view/cart/index'
import Admin from "../view/admin/index";

function AppRoutes(){
    return(
        <>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/admin" element={<Admin />} />
            </Routes>
        </>
    )
}
export default AppRoutes