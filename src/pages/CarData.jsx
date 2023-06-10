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
        </div>:<h1>Loading . . .</h1>}</div>
    )
}