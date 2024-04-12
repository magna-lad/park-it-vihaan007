import { logDOM } from "@testing-library/react";
import React from "react";
import user from "./user_photo.jpeg";
import Vehicle from "./vehicle.js"


export default function ClientPage() {
    return(
        <div className="client-page-grandparent">

            <div className="client-page-user-info">

                <div className="photo-name">
                    <img src={user} />
                    <h1>Hello, <span>Sangam Koundal</span></h1>
                </div>

                <div className="personal-info">

                    <div><span>Name:</span><span> Sangam Koundal</span></div>

                    <div><span>Email:</span><span>abc@gmail.com</span></div>

                    <div><span>Phone no.:</span><span>9090909099</span></div>

                </div>

                <div className="vehicle-information-add">
                    <h4>Vehicles Owned</h4>
                    <Vehicle serial_no={1} name="Fortuner" number_plate="DL001" qr_code="fasorjgnoefnnefongoair1224123232" />
                    
                    <button id="add-vehicle">+Add</button>
                </div>
            </div>
        </div>
    )
}