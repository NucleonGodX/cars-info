import React from "react";
import { NavLink } from "react-router-dom";
export default function Header(){
    return(
        <header className='headmust'>
        <NavLink to='/' className='car-head'>#DreamLife</NavLink>
        <hr/>
        <NavLink to="/about" className={({isActive})=>isActive?"active-style": null}>About</NavLink>
        <hr/>
        <NavLink to= "/host" className={({isActive})=>isActive?"active-style": null}>Host</NavLink>
        <hr/>
        <NavLink to="/cars" className={({isActive})=>isActive?"active-style": null}>Cars</NavLink>
    
        </header>
    )
}