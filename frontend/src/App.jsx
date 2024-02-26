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
import ForgotPassword from './Views/Users/ForgotPassword';
import ResetPassword from './Views/Users/ResetPassword';
import Profile from './Views/Users/Profile';
import UpdateProfile from './Views/Users/UpdateProfile';
import VideoModules from './Views/Modules/VideoModules';
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
          <Route path="/password/forgot" element={<ForgotPassword/>} />
          <Route path="/password/reset/:token" element={<ResetPassword/>} exact="true"/>
          <Route path="/profile" element={<Profile />}/>
          <Route path="/profile/update" element={<UpdateProfile />} exact="true"/>
          <Route path="/modules/videos" element={<VideoModules  />} />
        </Routes>
        <ToastContainer position="bottom-right"/>
      </ScrollToTop>
      
    </BrowserRouter>
  )
}

export default App
