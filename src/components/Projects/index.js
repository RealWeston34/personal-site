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
              <p>Uses ensemble of speech emotion recognition and text sentiment analysis to generate color coded subtitles for user given MP4 files. 
                Model implemented using Scikit-learn. Wesbite created with Django and hosted on Google Cloud </p>
              <a className="project-link" href="https://github.com/hongytan/SentimentSub" rel="noreferrer" target = "_blank">Project link</a>
            </div>
          </li>
          <li className="project">
            <img class="project-image" src={chatCheck} onClick={() => {setIsOpen(true); setPhotoIndex(1)}} alt="Project 2" />
            <div className="project-info">
              <h2>Chat Check</h2>
              <p>Chrome Extension that evaluates the quality of user's text messages.
                  Calls the OpenAI API to give a numerical rating from 1-10 and provide feedback 
                  to the user on how to write a better text message. Chrome extension written in React and hosted on OpenSea.
              </p>
              <a className="project-link" href="https://devpost.com/software/chatcheck" rel="noreferrer" target = "_blank">Project link</a>
            </div>
          </li>
          <li className="project">
            <img class="project-image" src={cat} onClick={() => {setIsOpen(true); setPhotoIndex(2)}} alt="Project 3" />
            <div className="project-info">
              <h2>3D reconstruction pipeline</h2>
              <p>Constructing a 3D image from 2D images using algebraic geometry techniques. 
                Analyzing the features extracted from SIFT through geometric verification. 
                Reconstruction is achieved through triangulation.
              </p>
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


