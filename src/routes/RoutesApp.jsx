import React from "react";
import Lodging from "../pages/Lodging/Lodging";
import About from "../pages/About";
import Error from "../pages/Error/Error";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";


const RoutesApp = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/lodging/:id" element={<Lodging />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Error />} />
        </Routes>
    );
};

export default RoutesApp;