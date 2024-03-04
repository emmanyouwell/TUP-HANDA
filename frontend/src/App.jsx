import React, { useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
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
import VideoList from './Views/Admin/VideoList';
import EditVideo from './Views/Modules/Admin/EditVideo';

import { AdminSidebar } from './Components/AdminSidebar';
import { useDispatch, useSelector } from 'react-redux'
import UserList from './Views/Admin/UserList';
import { getUser, getToken } from './utils/helper';
import Footer1 from './Components/Footer1';
import { useMediaQuery } from 'react-responsive';
function HeaderComponent() {
  const location = useLocation()
  const isAdminRoute = location.pathname.startsWith('/admin');
  return (
    <>
      {!isAdminRoute && <Navbar />}

    </>
  )
}
function MainContent() {
  const location = useLocation();
  const dispatch = useDispatch()


  // const {user} = useSelector(state => state.auth)
  const isAdminRoute = location.pathname.startsWith('/admin');
  const isAdminUser = getUser().role === 'admin';
  const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 1024px'})

  return (
    <>
    
    <div className={`flex ${isAdminUser && isAdminRoute && isDesktopOrLaptop ? 'flex-row' : 'flex-col'}`}>
      {isAdminUser && isAdminRoute && <AdminSidebar />}

      <ScrollToTop>
        <Routes>
          {/* Open routes */}
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/password/forgot" element={<ForgotPassword />} />
          <Route path="/password/reset/:token" element={<ResetPassword />} exact="true" />
        
          {/* Protected Routes */}
          <Route path="/modules" element={
            <ProtectedRoute>
              <Modules />
            </ProtectedRoute>
          } />
          <Route path="/modules/typhoons" element={
            <ProtectedRoute>
              <WaterModule />
            </ProtectedRoute>
          } />
          
          <Route path="/modules/fires" element={
            <ProtectedRoute>
              <FireModule />
            </ProtectedRoute>
          } />
          <Route path="/modules/earthquakes" element={
            <ProtectedRoute>
              <EarthModule />
            </ProtectedRoute>
          } />
          <Route path="/hotlines" element={
            <ProtectedRoute>
              <Hotline />
            </ProtectedRoute>
          } />
           <Route path="/modules/videos" element={
            <ProtectedRoute>
              <VideoModules />
            </ProtectedRoute>
          } />
            <Route path="/profile" element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          } />
          <Route path="/profile/update" element={
            <ProtectedRoute>
              <UpdateProfile />
            </ProtectedRoute>
          } exact="true" />
         
          <Route path="/quiz" element={<GoogleFormComponent />} />
          {/* Admin routes */}
          <Route path="/admin/modules" element={
            <ProtectedRoute isAdmin={true}>
              <ModuleList />
            </ProtectedRoute>
          } />
          <Route path="/admin/dashboard" element={
            <ProtectedRoute isAdmin={true}>
              <Dashboard />
            </ProtectedRoute>
          } />
          <Route path="/admin/modules/new" element={
            <ProtectedRoute isAdmin={true}>
              <CreateModule />
            </ProtectedRoute>
          } />
          <Route path="/admin/modules/:id" element={
            <ProtectedRoute>
              <EditModule />
            </ProtectedRoute>
          } />
          <Route path="/admin/videos/new" element={
            <ProtectedRoute isAdmin={true}>
              <CreateVideo />
            </ProtectedRoute>
          } />
          <Route path="/admin/videos" element={
            <ProtectedRoute isAdmin={true}>
              <VideoList />
            </ProtectedRoute>
          } />
          <Route path="/admin/videos/:id" element={
            <ProtectedRoute isAdmin={true}>
              <EditVideo />
            </ProtectedRoute>
          } />

          <Route path="/admin/users" element={
            <ProtectedRoute>
              <UserList />
            </ProtectedRoute>
          } />




        </Routes>
        <ToastContainer position="bottom-right" />
      </ScrollToTop>
      
    </div>
    {!isAdminRoute && <Footer1/>}
    </>
  );
}
function App() {

  return (
    <BrowserRouter>
      <HeaderComponent />

      <MainContent />
  
    
    </BrowserRouter>
  )


}

export default App
