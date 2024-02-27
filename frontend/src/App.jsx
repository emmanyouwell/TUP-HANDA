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
import ProtectedRoute from './Route/ProtectedRoute';
import ModuleList from './Views/Admin/ModuleList';
import Dashboard from './Views/Admin/Dashboard';
import CreateModule from './Views/Modules/Admin/CreateModule';
import EditModule from './Views/Modules/Admin/EditModule';
import Navbar from './Components/Navbar';
import CreateVideo from './Views/Modules/Admin/CreateVideo';
function App() {


  return (
    <BrowserRouter>
      <Navbar/>
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

          {/* Admin routes */}
          <Route path="/admin/modules" element={
            <ProtectedRoute isAdmin={true}>
              <ModuleList />
            </ProtectedRoute>
          }/>
          <Route path="/admin/dashboard" element={
            <ProtectedRoute isAdmin={true}>
              <Dashboard />
            </ProtectedRoute>
          }/>
          <Route path="/admin/modules/new" element={
            <ProtectedRoute isAdmin={true}>
              <CreateModule/>
            </ProtectedRoute>
          } />
          <Route path="/admin/modules/:id" element={
            <ProtectedRoute>
              <EditModule/>
            </ProtectedRoute>
          }/>
          <Route path="/admin/videos/new" element={
            <ProtectedRoute isAdmin={true}>
              <CreateVideo/>  
            </ProtectedRoute>
          }/>
          

        </Routes>
        <ToastContainer position="bottom-right"/>
      </ScrollToTop>
      
    </BrowserRouter>
  )
}

export default App
