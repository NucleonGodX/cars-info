import React from "react";
import { useOutletContext } from "react-router-dom";

export default function HostCarPrice(){
    const {hostCar}=useOutletContext()

    return(<h2 className="info-container">${hostCar.price}/day</h2>)

}