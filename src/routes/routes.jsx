import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/home';
import Ep from '../pages/ep';
import Tour from '../pages/tour';
import Videos from '../pages/videos';
import About from '../pages/about';

function RoutesPath() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/ep" element={<Ep />} />
                <Route path="/tour" element={<Tour />} />
                <Route path="/videos" element={<Videos />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesPath;