import React from "react";
import { Link } from "react-router-dom";

export default function HostCars(){
    const[hostCars, setHostCars]=React.useState([])
    React.useEffect( ()=> {
        fetch("/api/host/vans")
        .then(res=>res.json())
        .then(data=>setHostCars(data.vans)) },
        [])
    const hostCarElements=[hostCars.map(hostCar=>
       <div className="host-container">
        <Link to={hostCar.id} className="host-car-link">
        <img className="host-image" src={hostCar.imageUrl}></img>
        <div className="car-text">
        <h3>{hostCar.name}</h3>
        <p>${hostCar.price}/day</p></div></Link>
       </div> )]

       return(
        <><h1 className="cars-heading">Your Listed Cars</h1>
        {hostCarElements}</>
       )
}