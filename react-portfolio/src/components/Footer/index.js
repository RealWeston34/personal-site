import React from 'react'
import './index.css'
import logo from '../../assets/images/logo1.png'

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <p>© 2023 Scotty. All rights reserved.</p>
        <div className="footer-icons">
          <img src={logo} className="fab fa-facebook"/>
          <img src={logo} className="fab fa-twitter"/>
          <img src={logo} className="fab fa-instagram"/>
        </div>
      </div>
    </footer>
  )
}

export default Footer