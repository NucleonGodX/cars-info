import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Cars from './pages/Cars/Cars';
import CarData from "./pages/Cars/CarData"
import './server'
import Layout from './components/Layout';
import Dashboard from './pages/Host/Dashboard';
import Income from './pages/Host/Income';
import Reviews from './pages/Host/Reviews';

function App(){
   return( <BrowserRouter>
   <Routes>
    <Route element={<Layout/>}>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/cars" element={<Cars/>}/>
    <Route path ="/host" element={<Dashboard/>}/>
    <Route path="/cars/:id" element ={<CarData/>}/>
    <Route path="/host" element={<Dashboard/>}>
    <Route path="/host/income" element={<Income/>}/>
    <Route path="/host/reviews" element={<Reviews/>}/>

    </Route>
    </Route>
    </Routes>
    </BrowserRouter>)
}
ReactDOM.createRoot(document.getElementById("root")).render(
<App/>
)

