// import Head from './components/Head'
import './App.scss'

import Education from './components/Education'
import Projects from './components/Projects'
import Intro from './components/Intro'
import About from './components/About'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (

    <div>
      <Intro />
      <About/>
      <Experience/>
      <Education/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App

