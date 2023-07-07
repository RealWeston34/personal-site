
import logo from '../../assets/images/logo1.png'
import 'bootstrap/dist/css/bootstrap.css'
import { Nav, Navbar } from 'react-bootstrap'
import {useRef} from 'react'
import './index.css'


const ref = useRef(null);
const handleCLick = () => {
    ref.current?.scrollIntoView({behavior: 'smooth'})
};

const Head = () => {
    return (
        <div className = "head">
            <Navbar bg = "dark" variant = "dark" sticky = "top" expand = "lg" collapseOnSelect>
                <Navbar.Brand>
                    <img src = {logo} alt = "placeholder" width = "40px" height = "40px"/>
                </Navbar.Brand>

                <Navbar.Toggle/>

                <Navbar.Collapse>
                <Nav>
                        <button onClick={handleCLick}>About</button>
                        <Nav.Link href = "Experience">Experience</Nav.Link>
                        <Nav.Link href = "Education">Education</Nav.Link>
                        <Nav.Link href = "Skills">Skills</Nav.Link>
                        <Nav.Link href = "Contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>

            </Navbar>
            <div className = "content"id = "home">
                This is content
            </div>

            <div className = "content"id = "projects">
                These are my projects
            </div>
        </div>
    )
};

export default Head;