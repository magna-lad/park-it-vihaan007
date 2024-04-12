import { logDOM } from "@testing-library/react";
import React from "react";
import "./SignMaster.css" ;
import cross from "./radix-icons--cross-2.png";
import logo from "./logo_box.png";

export default function SignIn() {
    return(
        <div className="sign-up-grandparent">
            <div className="sign-up-parent">
                <div className="sign-up-heading">
                    <img className="logo" src={logo} />
                    <img className="cross" src={cross} />
                    
                </div>
                <form className="sign-up-info">
                    <h2>Sign-in</h2>

                    <div className="sign-up-infodeck">
                        <input type="text" className="name" placeholder="Enter Name"  />

                        {/* <input type="text" className="email" placeholder="Example: abc@gmail.com"  /> */}

                        <input type="password" className="password" placeholder="Enter Password"/>
                        
                        <span><a href="#">Signin</a></span>
                        <button className="info-submit">
                            Submit
                        </button>
                    </div>
                    
                    
                </form>
            </div>
        </div>
    );
}