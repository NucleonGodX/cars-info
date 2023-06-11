import React from "react";
import { Link } from "react-router-dom";
export default function Header(){
    return(
        <header className='headmust'>
        <Link to='/' className='car-head'>#DreamLife</Link>
        <hr/>
        <Link to="/about">About</Link>
        <hr/>
        <Link to="/cars">Cars</Link>
    
        </header>
    )
}