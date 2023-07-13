import React from 'react'
import github from '../../assets/images/github-icon.png'
import linkedin from '../../assets/images/linkedin-icon.png'
import email from '../../assets/images/email-icon.png'
import './index.css'

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <p>© 2023 Scotty. All rights reserved.</p>
        <div className="footer-icons">
          <img src={github} alt = "github" className="fab fa-facebook"/>
          <img src={linkedin} alt="linkedin" className="fab fa-twitter"/>
          <img src={email} alt="email" className="fab fa-instagram"/>
        </div>
      </div>
    </footer>
  )
}

export default Footer