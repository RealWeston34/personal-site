import React from 'react';
import './index.css';
import ECE5 from '../../assets/images/logo1.png'
import sentSub from '../../assets/images/SentimentSub.pdf.png'
import chatCheck from '../../assets/images/chatcheck.png'
const Projects = () => {
  return (
    <div id="projects" className="projects-block">
    <section className="projects-container">
      <h2 class= "heading">Projects</h2>
      <ul>
        <li className="project">
          <img class="project-image" src={sentSub}  alt="Project 1" />
          <div className="project-info">
            <h2>SentimentSub.com</h2>
            <p>Combining predictions of audio and text sentiment models to generate color coded subtitles for user given MP4 files.</p>
            <a className="project-link" href="https://github.com/hongytan/SentimentSub" rel="noreferrer" target = "_blank">Project link</a>
          </div>
        </li>
        <li className="project">
          <img class="project-image" src={chatCheck}  alt="Project 2" />
          <div className="project-info">
            <h2>Chat Check</h2>
            <p>Evaluates your rizz on a scale of 1-10</p>
            <a className="project-link" href="https://devpost.com/software/chatcheck" rel="noreferrer" target = "_blank">Project link</a>
          </div>
        </li>
        <li className="project">
          <img class="project-image" src={ECE5}  alt="Project 1" />
          <div className="project-info">
            <p>Project 1 description</p>
            <a className="project-link" href="google.com">Project link</a>
          </div>
        </li>
        {/* Add more list items for additional projects */}
      </ul>
    </section>
    </div>
  );
};

export default Projects;
