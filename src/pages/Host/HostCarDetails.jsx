import React from "react"
import { useParams, Link, Outlet, NavLink } from "react-router-dom"
export default function HostCarDetails(){
    const params=useParams()
    const[hostCar, setHostCar]=React.useState(null)
    React.useEffect(()=>{
        fetch( `/api/host/vans/${params.id}`)
        .then(res=>res.json())
        .then(data=>setHostCar(data.vans))
    }
    ,[])
    if (hostCar === null) {
        return <h1>Loading...</h1>; // Render a loading indicator while fetching data
      }
    return(
        <section className="entire-car-container">
            <Link to=".." relative="path" className="back-btn">--Back to Cars</Link>
                <div className="host-car-detail">
                    <img className="host-car-img" src={hostCar.imageUrl} />
                    <div className="host-detail-text"> 
                    <p className={hostCar.type}>{hostCar.type}</p>
                   
                        <h3>{hostCar.name}</h3>
                        <h4>${hostCar.price}/day</h4>
                    </div>

                </div>
                <nav className='host-nav'>
    <NavLink className={({isActive})=>isActive?"detail-link-style-after": "detail-link-style-before"} to="/host/cars/:id" end>Details</NavLink>
   
    <NavLink className={({isActive})=>isActive?"detail-link-style-after": "detail-link-style-before"} to= "/host/cars/:id/pricing">Pricing</NavLink>
   
    <NavLink className={({isActive})=>isActive?"detail-link-style-after": "detail-link-style-before"} to="/host/cars/:id/photos">Photos</NavLink>
    </nav>
         <Outlet context={{hostCar}}/>  
        </section>
    )

}