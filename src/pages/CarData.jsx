import React from "react"
import { useParams } from "react-router-dom"
export default function CarData(){
    const params=useParams()
    const[car, setCar]=React.useState(null)
    React.useEffect(()=>{
        fetch( `/api/vans/${params.id}`)
        .then(res=>res.json())
        .then(data=>setCar(data.vans))
    }
    ,[params.id])

    return(
        <div>{
        car? <div className="car-data">
            <img className="det-Img" src={car.imageUrl}></img>
            <p className={car.type}>{car.type}</p>
            <h2 className="name-det">{car.name}</h2>
            <h3>${car.price}/day</h3>
            <p className="info-det">{car.description}
            <button className="rent">Rent This Car</button></p>
        </div>:<h1>Loading . . .</h1>}</div>
    )
}