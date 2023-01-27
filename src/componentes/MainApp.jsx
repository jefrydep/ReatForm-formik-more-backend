 import React from 'react'
import { Link, Navigate, Route, Routes } from 'react-router-dom'
import AboutPage from './AboutPage'
import HomePage from './HomePage'
import LogingPage from './LogingPage'
import NavBar from './NavBar'
import { UserProvider } from './UserProvider'
 
 
 
 const MainApp = () => (
  <UserProvider>

 <NavBar/>
     <hr />
     <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/login' element={<LogingPage/>} />
      <Route path='/about' element={<AboutPage/>} />

      <Route path='/*' element={<Navigate to="/about"/>} />

     
     </Routes>
  </UserProvider>
 
 )
 
 export default MainApp