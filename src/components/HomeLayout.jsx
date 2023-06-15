import React from "react";
import Dashboard from "../pages/Host/Dashboard";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function HomeLayout(){
    return(<><nav className='host-nav'>
    <NavLink className={({isActive})=>isActive?"after-links": "for-links"} to="/host" end>Dashboard</NavLink>
   
    <NavLink className={({isActive})=>isActive?"after-links": "for-links"} to= "/host/income">Income</NavLink>
   
    <NavLink className={({isActive})=>isActive?"after-links": "for-links"} to="/host/cars">Cars</NavLink>
    <NavLink className={({isActive})=>isActive?"after-links": "for-links"} to="/host/reviews">Reviews</NavLink>

    </nav>
    <Outlet/></>
    
    )
}