import React from 'react';
import sentSub from '../../assets/images/SentimentSub.pdf.png'
import chatCheck from '../../assets/images/chatcheck.png'
import cat from '../../assets/images/CATScan.png'
import './index.css';

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
          <img class="project-image" src={cat}  alt="Project 3" />
          <div className="project-info">
            <h2>Algebraic Geometry</h2>
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
