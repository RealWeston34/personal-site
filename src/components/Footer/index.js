import React from 'react'
import './index.css'
import logo from '../../assets/images/logo1.png'

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <p>© 2023 Scotty. All rights reserved.</p>
        <div className="footer-icons">
          <img src={logo} alt = "github" className="fab fa-facebook"/>
          <img src={logo} alt="linkedin" className="fab fa-twitter"/>
          <img src={logo} alt="email" className="fab fa-instagram"/>
        </div>
      </div>
    </footer>
  )
}

export default Footer