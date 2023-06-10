import React from "react";
export default function Header(){
    return(
        <header className='headmust'>
        <Link to='/' className='car-head'>#CarLife</Link>
        <hr/>
        <Link to="/about">About</Link>
        <hr/>
        <Link to="/cars">Cars</Link>
    
        </header>
    )
}