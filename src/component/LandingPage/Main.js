import { logDOM } from "@testing-library/react";
import React from "react";
import bg from "./bg.png";
// import "./Main.css";

export default function Main(){
    return (
        <div className="main-working-space">
            
            <img className="bg-image" src={bg}/>

            <div className="search-section">
                <p >Find the perfect Parking Place</p>

                <div className="search-box">
                    
                    <div >
                        <input type="text" className="location-space" placeholder="Enter Location"  />
                    </div>

                    <button className="location-search">Search</button>

                </div>
            </div>
        </div>
    );
}