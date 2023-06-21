import React from "react"
import {Link, useSearchParams} from "react-router-dom"
export default function Cars(){
    const[searchParams, setSearchParams]=useSearchParams()
    const[cars, setCars]=React.useState([])
    const typeFilter=searchParams.get("type")
    React.useEffect( ()=> {
        fetch("/api/vans")
        .then(res=>res.json())
        .then(data=>setCars(data.vans)) },
        [])
        const displayedCars=typeFilter
        ?cars.filter(car=>car.type===typeFilter)
        :cars

    const carElements=displayedCars.map(car=><div className="cars-info"> 
        <Link to={`/cars/${car.id}`} className="box-element" style={{ textDecoration: 'none', color: 'black', fontSize: '16px' }}>
  <img className="cars" src={car.imageUrl} />

        <div className="info">        
        <h2 className="name">{car.name}</h2>
        <h3>${car.price}/day</h3>
        <p className={car.type}>{car.type}</p>
        </div>
       </Link>
     </div>)
    
    return(<>

    <h1 className="heading">Explore Our Car Options</h1>    
    <div className="params-container"><Link className="single-param" to="?type=Ultimate-Luxury">Ultimate Luxury</Link>
    <Link className="single-param" to="?type=Comfort">Comfort</Link>
    <Link className="single-param" to="?type=Sports">Sports</Link>
    <Link className="clear-param" to="">Clear All</Link></div>

    {carElements}</>)
}