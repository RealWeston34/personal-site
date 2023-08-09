import 'bootstrap/dist/css/bootstrap.css'
import { Nav, Navbar } from 'react-bootstrap'
import { Link } from "react-scroll";
// import headshot from '../../assets/images/Beach-Photo.png'
import './index.css'

const Head = () => {
    
  return (
    <div className="head">
      <Navbar bg="dark" variant="dark" sticky="top" expand="lg" collapseOnSelect>
        

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
                to="container-contact-page"
                spy={true}
                smooth={true}
                offset={0}
                duration={50}
            >Contact</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>

        
      </Navbar>
    </div>
  )
}

export default Head;