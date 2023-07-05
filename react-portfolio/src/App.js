import { Route, Routes } from 'react-router-dom'
import About from './components/About'
import Layout from './components/Layout'
import Projects from './components/Projects'
import './App.scss'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="about" element={<About />} />
          <Route path = "projects" element = {<Projects/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App

