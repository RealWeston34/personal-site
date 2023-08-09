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
            I'm currently working in the Smart Signals and Systems lab at USCB researching unsupervised image classification algorithms. 
            I'm interested in learning more ways to apply computer vision and machine learning  in indsutry.
          </p>
          <p align="LEFT">
            Looking for a role as a software engineer or machine learning engineer for summer 2024.
          </p>
          <p>
            
          </p>
        </div>
      <Loader type="pacman" />
      </div>
  )
}

export default About