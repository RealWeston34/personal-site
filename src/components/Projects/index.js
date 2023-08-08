import React, { useState, useEffect } from 'react';
import sentSub from '../../assets/images/SentimentSub.pdf.png'
import chatCheck from '../../assets/images/chatcheck.png'
import cat from '../../assets/images/CATScan.png'
import './index.css';

const Projects = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const images = [sentSub, chatCheck, cat];

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  return (
    <div id="projects" className="projects-block">
      <section className="projects-container">
        <h2 class= "heading">Projects</h2>
        <ul>
          <li className="project">
            <img class="project-image" src={sentSub} onClick={() => {setIsOpen(true); setPhotoIndex(0)}} alt="Project 1" />
            <div className="project-info">
              <h2>SentimentSub.com</h2>
              <p>Combining predictions of audio and text sentiment models to generate color coded subtitles for user given MP4 files.</p>
              <a className="project-link" href="https://github.com/hongytan/SentimentSub" rel="noreferrer" target = "_blank">Project link</a>
            </div>
          </li>
          <li className="project">
            <img class="project-image" src={chatCheck} onClick={() => {setIsOpen(true); setPhotoIndex(1)}} alt="Project 2" />
            <div className="project-info">
              <h2>Chat Check</h2>
              <p>Evaluates your rizz on a scale of 1-10</p>
              <a className="project-link" href="https://devpost.com/software/chatcheck" rel="noreferrer" target = "_blank">Project link</a>
            </div>
          </li>
          <li className="project">
            <img class="project-image" src={cat} onClick={() => {setIsOpen(true); setPhotoIndex(2)}} alt="Project 3" />
            <div className="project-info">
              <h2>Algebraic Geometry</h2>
              <p>Project 1 description</p>
              <a className="project-link" href="google.com">Project link</a>
            </div>
          </li>
          {/* Add more list items for additional projects */}
        </ul>
      </section>

      {isOpen && (
        <>
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 9999,
          }} onClick={() => setIsOpen(false)}>
            <img src={images[photoIndex]} style={{maxWidth: '100%', maxHeight: '100%'}} alt="" />
          </div>
        </>
      )}
    </div>
  );
};

export default Projects;


