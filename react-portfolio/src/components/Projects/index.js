import React from 'react';
import './index.css';
import ECE5 from '../../assets/images/logo1.png'
const Projects = () => {
  return (
    <section className="projects-container">
      <h2 class= "heading">Projects</h2>
      <ul>
        <li className="project">
          <img class="project-image" src={ECE5}  alt="Project 1" />
          <div className="project-info">
            <p>Project 1 description</p>
            <a className="project-link" href="#">Project link</a>
          </div>
        </li>
        <li className="project">
          <img class="project-image" src={ECE5}  alt="Project 1" />
          <div className="project-info">
            <p>Project 1 description</p>
            <a className="project-link" href="#">Project link</a>
          </div>
        </li>
        <li className="project">
          <img class="project-image" src={ECE5}  alt="Project 1" />
          <div className="project-info">
            <p>Project 1 description</p>
            <a className="project-link" href="#">Project link</a>
          </div>
        </li>
        {/* Add more list items for additional projects */}
      </ul>
    </section>
  );
};

export default Projects;
