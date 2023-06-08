import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';

function App(){
   return( <BrowserRouter>
   <header>
    <Link to='/'>Cars</Link>
    <Link to='/home'>Home</Link>
    <br/>
    <Link to="/about">About</Link>
    </header>
    <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/home" element={<Home/>}/>
    </Routes>
    </BrowserRouter>)
}
ReactDOM.createRoot(document.getElementById("root")).render(
<App/>
)

