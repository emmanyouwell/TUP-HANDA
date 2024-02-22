import React, { useState } from 'react'
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from './Views/Home';
import Modules from './Views/Modules/Modules';
import GoogleFormComponent from './Quizzes/GoogleFormComponent';
import WaterModule from './Views/Modules/WaterModule';
import FireModule from './Views/Modules/FireModule';
import EarthModule from './Views/Modules/EarthModule';
import Hotline from './Views/Hotline';
import Register from './Views/Users/Register';
import ScrollToTop from './utils/ScrollToTop';
import { ToastContainer } from 'react-toastify';
import Login from './Views/Users/Login';
function App() {


  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/modules" element={<Modules />} />
          <Route path="/quiz" element={<GoogleFormComponent />} />
          <Route path="/modules/typhoons" element={<WaterModule />} />
          <Route path="/modules/fires" element={<FireModule />} />
          <Route path="/modules/earthquakes" element={<EarthModule />} />
          <Route path="/hotlines" element={<Hotline />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <ToastContainer position="bottom-right"/>
      </ScrollToTop>
      
    </BrowserRouter>
  )
}

export default App
