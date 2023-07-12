import logo from '../../assets/images/logo1.png'
import 'bootstrap/dist/css/bootstrap.css'
import { Nav, Navbar } from 'react-bootstrap'
import { Link } from "react-scroll";
import github from '../../assets/images/github-icon.png'
import linkedin from '../../assets/images/linkedin-icon.png'
import email from '../../assets/images/email-icon.png'

import './index.css'

const Head = () => {
    
  return (
    <div className="head">
      <Navbar bg="dark" variant="dark" sticky="top" expand="lg" collapseOnSelect>
        <Navbar.Brand>
          <img src={logo} alt="placeholder" width="40px" height="40px" />
        </Navbar.Brand>

        <Navbar.Toggle />

        <Navbar.Collapse>
          <Nav>
          <Nav.Link>
            <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={0}
                duration={50}
            >About</Link>
            </Nav.Link>
            <Nav.Link>
            <Link
                activeClass="active"
                to="education"
                spy={true}
                smooth={true}
                offset={0}
                duration={50}
            >Education</Link>
            </Nav.Link>
            <Nav.Link>
            <Link
                activeClass="active"
                to="experience"
                spy={true}
                smooth={true}
                offset={0}
                duration={50}
            >Experience</Link>
            </Nav.Link>
            <Nav.Link>
            <Link
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={0}
                duration={50}
            >Projects</Link>
            </Nav.Link>
            <Nav.Link>
            <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={0}
                duration={50}
            >Contact</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Brand>
          <img src={github} alt="placeholder" width="40px" height="40px" />
        </Navbar.Brand>
        <Navbar.Brand>
          <img src={linkedin} alt="placeholder" width="40px" height="40px" />
        </Navbar.Brand>
        <Navbar.Brand>
          <img src={email} alt="placeholder" width="40px" height="40px" />
        </Navbar.Brand>
      </Navbar>
    </div>
  )
}

export default Head;