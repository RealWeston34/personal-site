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
              Machine Learning Intern at Advanced Life Technologies LLC and Undergraduate Researcher in the Smart Signals and Systems lab at USCB.
          </p>

          <p>
              At Advanced Life Technologies (ALT), my primary role involves using
              machine learning to enhance the functionality and personalization of a wide spectrum 
              of 3D printed prosthetic devices. My software solutions not only optimize these prosthetics 
              but also aim to provide a tailored and user-centric experience.
          </p>

          <p>
              In my research endeavors, I've delved into the exciting realm of self-supervised image classification algorithms, 
              with a particular focus on the development of the DisCLR framework. Building upon the contrastive learning paradigm, 
              DisCLR seeks to disentangle embeddings, ultimately leading to more robust and accurate representations. 
              This work is currently on its path to publication.
          </p>

          <p>
              I'm eager to explore how computer vision and machine learning can be further applied in various industrial settings.
          </p>
          <p align="LEFT">
            Currently looking for a software engineering or machine learning internship for Summer 2024.
          </p>
          <p>
            
          </p>
        </div>
      <Loader type="pacman" />
      </div>
  )
}

export default About