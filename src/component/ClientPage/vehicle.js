import { logDOM } from "@testing-library/react";
import React from "react";


export default function Vehicle({serial_no,name,number_plate,qr_code}){
    return (
        <div className="vehicle-information">
            <p>{serial_no}.</p>
            <p>{name}</p>
            <p>{number_plate}</p>
            <button>QR code</button>
        </div>
    );
}