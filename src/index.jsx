import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Cars from './pages/Cars';
import './server'
function App(){
   return( <BrowserRouter>
   <header>
    <Link to='/' className='car-head'>#CarLife</Link>
    <br/>
    <Link to="/about">About</Link>
    <br/>
    <Link to="/cars">Cars</Link>

    </header>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/cars" element={<Cars/>}/>

    </Routes>
    </BrowserRouter>)
}
ReactDOM.createRoot(document.getElementById("root")).render(
<App/>
)

