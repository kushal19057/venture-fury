import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
// import Overview from "./Overview";
// import Stats from "./Stats";
// import Calender from "./Calender";
// import Chats from "./Chats";
import Product from "./Product";
import Header from "./Header";

function Container() {
    return (
        <div className="container">
            {/* <Sidebar /> */}
            <div className="containerdiv">
                <Header />
                <Product />
            </div>
        </div>
    );
}

export default Container;
