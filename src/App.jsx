import { useState } from 'react'
import Home from './components/sections/Home'
import Navbar from './components/Navbar'
import Contact from './components/sections/Contact'
import About from './components/sections/About'
import Education from './components/sections/Education'
import Projects from './components/sections/Projects'

function App() {
  

  return (
    <>
    <Navbar/>
    <Home/>
    <About/>
    <Education/>
    <Projects/>
    <Contact/>
    </>
  )
}

export default App
