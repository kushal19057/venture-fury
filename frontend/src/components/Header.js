import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";

function Header() {
    return (
        <div className="header">
            <div className="app-title">
                <NavLink className="" to="/">
                    ventureFury
                </NavLink>
            </div>
            <div className="search-bar">
                <input
                    placeholder="search product"
                    // value={text}
                    // onChange={handleSearchChange}
                ></input>
            </div>
            <div className="links">
                <NavLink classname="navlink" to="/vc">
                    VC
                </NavLink>
                <NavLink className="navlink" to="/community">
                    Community
                </NavLink>
                <NavLink className="navlink" to="/about">
                    about
                </NavLink>
                <NavLink className="navlink" to="/jobs">
                    Jobs
                </NavLink>
                <NavLink className="navlink" to="/login">
                    Login
                </NavLink>
                <NavLink className="navlink" to="/signup">
                    Signup
                </NavLink>
            </div>
            <div className="user-info">
                {/* <div>{user && `Hi, ${user.displayName}`}</div> */}
                <div className="image">{/* <img src={image} alt="profile" /> */}</div>
            </div>
        </div>
    );
}

export default Header;
