import React, { useState } from 'react'
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from './Views/Home';
import Modules from './Views/Modules/Modules';
import GoogleFormComponent from './Quizzes/GoogleFormComponent';
import WaterModule from './Views/Modules/WaterModule';
import FireModule from './Views/Modules/FireModule';
import EarthModule from './Views/Modules/EarthModule';
import Hotline from './Views/Hotline';
function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/modules" element={<Modules />} /> 
        <Route path="/quiz" element={<GoogleFormComponent/>} />
        <Route path="/modules/typhoons" element={<WaterModule/>} />
        <Route path="/modules/fires" element={<FireModule/>} />
        <Route path="/modules/earthquakes" element={<EarthModule/>}/>
        <Route path="/hotlines" element={<Hotline/>} />
      </Routes>


    </BrowserRouter>
  )
}

export default App
