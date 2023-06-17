import React from "react";
import { useOutletContext } from "react-router-dom";

export default function HostCarPhotos(){
    const {hostCar}=useOutletContext()

    return(<img className="host-car-image" src={hostCar.imageUrl}/>)

}