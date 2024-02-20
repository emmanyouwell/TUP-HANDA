import React, { useState } from 'react'
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from './Views/Home';
import Modules from './Views/Modules/Modules';
import GoogleFormComponent from './Quizzes/GoogleFormComponent';
import WaterModule from './Views/Modules/WaterModule';
import FireModule from './Views/Modules/FireModule';
function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/modules" element={<Modules />} /> 
        <Route path="/quiz" element={<GoogleFormComponent/>} />
        <Route path="/modules/typhoons" element={<WaterModule/>} />
        <Route path="/modules/fires" element={<FireModule/>} />
      </Routes>


    </BrowserRouter>
  )
}

export default App
