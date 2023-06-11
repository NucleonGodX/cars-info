import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Cars from './pages/Cars';
import CarData from "./pages/CarData"
import './server'
import Layout from './components/Layout';

function App(){
   return( <BrowserRouter>
   <Routes>
    <Route element={<Layout/>}>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/cars" element={<Cars/>}/>
    <Route path="/cars/:id" element ={<CarData/>}/>
    </Route>
    </Routes>
    </BrowserRouter>)
}
ReactDOM.createRoot(document.getElementById("root")).render(
<App/>
)

