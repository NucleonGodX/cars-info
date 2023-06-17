import React from "react";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import HostCarDetails from "../pages/Host/HostCarDetails";
export default function CarDetails(){
    return(<>
    <HostCarDetails/>
    <nav className='host-nav'>
    <NavLink className={({isActive})=>isActive?"detail-link-style-after": "detail-link-style-before"} to="/host/cars/:id" end>Details</NavLink>
   
    <NavLink className={({isActive})=>isActive?"detail-link-style-after": "detail-link-style-before"} to= "/host/cars/:id/pricing">Pricing</NavLink>
   
    <NavLink className={({isActive})=>isActive?"detail-link-style-after": "detail-link-style-before"} to="/host/cars/:id/photos">Photos</NavLink>
    </nav>
    <Outlet/></>
    
    )
}