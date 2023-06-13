import React from "react";
import { Link } from "react-router-dom";
export default function Home(){
    return(<>
        <div className="home-major">
        <h1 className="home-heading">YOU GOT DREAMS, WE ARE HERE TO FULFILL</h1>
        <h3 className="home-info">We are here to fulfill your dreams of having a luxury experience with the luxury cars of your choice, So what are you waiting for rent the car of your dreams or host the car for other people!</h3>
        <Link to="/cars"> <button className="rent">Click to Rent Cars</button></Link></div>
    </>
    )
}