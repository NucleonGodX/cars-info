import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Cars from './pages/Cars/Cars';
import CarData from "./pages/Cars/CarData"
import './server'
import Layout from './components/Layout';
import Dashboard from './pages/Host/Dashboard';
import Income from './pages/Host/Income';
import Reviews from './pages/Host/Reviews';
import HomeLayout from "../src/components/HomeLayout"
import HostCarDetails from './pages/Host/HostCarDetails';
import HostCars from './pages/Host/HostCars';


function App(){
   return( <BrowserRouter>
   <Routes>
    <Route element={<Layout/>}>
    <Route index element={<Home/>}/>
    <Route path="about" element={<About/>}/>
    <Route path="cars" element={<Cars/>}/>
    <Route path="cars/:id" element ={<CarData/>}/>
    <Route path="host" element={<HomeLayout/>}>
    <Route index element={<Dashboard/>}/>
    <Route path="income" element={<Income/>}/>
    <Route path="reviews" element={<Reviews/>}/>
    <Route path="cars" element={<HostCars/>}/>
    <Route path="cars/:id" element={<HostCarDetails/>}/>
    </Route>
    </Route>
    </Routes>
    </BrowserRouter>)
}
ReactDOM.createRoot(document.getElementById("root")).render(
<App/>
)

