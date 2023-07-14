import React from 'react';
import github from '../../assets/images/github-icon.png';
import linkedin from '../../assets/images/linkedin-icon.png';
import './index.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <p>© 2023 Scotty. All rights reserved.</p>
        <div className="footer-icons">
          <a href="https://github.com/RealWeston34" target="_blank" rel="noopener noreferrer">
            <img src={github} alt="github" className="fab fa-facebook" />
          </a>
          <a href="https://www.linkedin.com/in/scott-f-641135204/" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt="linkedin" className="fab fa-twitter" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
