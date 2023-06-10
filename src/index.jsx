import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Cars from './pages/Cars';
import CarData from "./pages/CarData"
import './server'
function App(){
   return( <BrowserRouter>
   <header className='headmust'>
    <Link to='/' className='car-head'>#CarLife</Link>
    <hr/>
    <Link to="/about">About</Link>
    <hr/>
    <Link to="/cars">Cars</Link>

    </header>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/cars" element={<Cars/>}/>
    <Route path="/cars/:id" element ={<CarData/>}/>

    </Routes>
    </BrowserRouter>)
}
ReactDOM.createRoot(document.getElementById("root")).render(
<App/>
)

