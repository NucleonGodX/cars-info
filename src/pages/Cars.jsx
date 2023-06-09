import React from "react"
export default function Cars(){
    const[cars, setCars]=React.useState([])
    React.useEffect( ()=> {
        fetch("/api/vans")
        .then(res=>res.json())
        .then(data=>setCars(data.vans)) },
        [])
    const carElements=cars.map(car=><div>
        <h2>{car.name}</h2>
        <h3>{car.price}$</h3>
       <img src={car.imageUrl}></img>
       <p>{car.description}</p> </div>)

    return(<>
    {carElements}</>)
}