import Loader from 'react-loaders'
import './index.css'

const About = () => {

  return (
      <div id="about" className="container-about-page">
        <div className="text-zone">
          <h1 align="CENTER">
            About me
          </h1>
          <p>
            Hello! I am a computer engineering student at UCSB looking for part time work during the schoolyear and full time work during the summer
          </p>
          <p align="LEFT">
            I'm quiet confident, naturally curious, and perpetually working on
            improving my chops one design problem at a time.
          </p>
          <p>
            
          </p>
        </div>
      <Loader type="pacman" />
      </div>
  )
}

export default About