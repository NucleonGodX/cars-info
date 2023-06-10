import React from "react"
import {Link} from "react-router-dom"
export default function Cars(){
    const[cars, setCars]=React.useState([])
    React.useEffect( ()=> {
        fetch("/api/vans")
        .then(res=>res.json())
        .then(data=>setCars(data.vans)) },
        [])
    const carElements=cars.map(car=><div className="cars-info"> 
        <Link to={`/cars/${car.id}`} style={{ textDecoration: 'none', color: 'black', fontSize: '16px' }}>
  <img className="cars" src={car.imageUrl} />

        <div className="info">        
        <h2>{car.name}</h2>
        <h3>${car.price}/day</h3>
        <p className={car.type}>{car.type}</p></div>
       </Link>
     </div>)
    
    return(<>
    <h1 className="heading">Explore Our Car Options</h1>
    {carElements}</>)
}