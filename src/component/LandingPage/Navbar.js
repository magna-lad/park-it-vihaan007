import { logDOM } from "@testing-library/react";
import React from "react";
import logo from "./logo_box.png"
export default function Navbar(){
    return (
        <div className="navbar-parent">
            <button className="logo">
                <img src={logo}/>
            </button>
            <div className="navbar-pre-registation">
                <button className="list-property">List Your Property</button>
                <button className="sign-up">Sign Up</button>
                <button className="sign-in">Sign In</button>
            </div>
        </div>
    );
}