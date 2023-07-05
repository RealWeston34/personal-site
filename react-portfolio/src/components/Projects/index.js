import Loader from 'react-loaders'
import ECE5 from '../../assets/images/logo1.png'
import './index.scss'

const Projects = () => {

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            Projects
          </h1>
          <p>
            These are my projects
          </p>
          <p align="LEFT">
           I hope you like them
          </p>
          <p>
            
          </p>
        </div>

        <div className = "stage-image">
            <div className = "image">
            <img src = {ECE5} alt = "ECE5"></img>
            </div>
        


        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Projects