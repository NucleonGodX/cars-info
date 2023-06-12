import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header"
import Dashboard from "../pages/Host/Dashboard";
export default function Layout(){
    return(<>
    
    <Header/>
    <Outlet/></>)
}