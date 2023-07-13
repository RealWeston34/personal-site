import Loader from 'react-loaders'
import './index.css'

const About = () => {

  return (
      <div id="about" className="container-about-page">
        <div className="text-zone">
          <h2 align="CENTER">
            About me
          </h2>
          <p>
            Please give me a job lol.
          </p>
          <p align="LEFT">
            I specialize in computer vision
          </p>
          <p>
            
          </p>
        </div>
      <Loader type="pacman" />
      </div>
  )
}

export default About