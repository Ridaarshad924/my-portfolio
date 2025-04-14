import React from 'react'
import Header from './Components/Reuseable/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Pages/Home'
import About from './Components/Pages/About'
import Contact from './Components/Pages/Contact'
import Project from './Components/Pages/Project'
import Footer from './Components/Reuseable/Footer'

function App() {

  return (
    <>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/project' element={<Project/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
