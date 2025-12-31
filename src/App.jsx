import Home from './components/pages/Home'
import Navbar from './components/elements/Navbar'
import Contact from './components/pages/Contact'
import About from './components/pages/About'
import Education from './components/pages/Education'
import Projects from './components/pages/Projects'
import BackTop from './components/elements/BackTop'

function App() {
  

  return (
    <>
    <BackTop/>
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
