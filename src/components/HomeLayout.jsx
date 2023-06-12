import React from "react";
import Dashboard from "../pages/Host/Dashboard";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

export default function HomeLayout(){
    return(<><nav className='host-nav'>
    <Link className="for-links" to="/host">Host</Link>
   
    <Link className="for-links" to= "/host/income">Income</Link>
   
    <Link className="for-links" to="/host/reviews">Reviews</Link>
    </nav>
    <Outlet/></>
    
    )
}