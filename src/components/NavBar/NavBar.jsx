import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'react-bootstrap-icons';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Link, useNavigate } from 'react-router-dom';

import './NavBar.css'

export const NavBar = () => {

  return (
    <Navbar bg="white" expand="lg" className="navbarDesign">
      <Container>
      <Nav>
        <Navbar.Brand as={Link} to='/'>
        <img
              alt="logo smiley teeth"
              src="../../../img/dental-clinic-logo.png"
              width="170"
              height="50"
              className="d-inline-block align-top"
            />
        </Navbar.Brand>
        
        </Nav>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
          <ul className="list-unstyled mb-0 d-flex justify-content-between  align-items-stretch flex-row">
                        <li>
                            <a className='text-primary fs-5 ms-2' ><Instagram /> </a>
                        </li>
                        <li>
                            <a className='text-primary fs-5 ms-2' ><Facebook /></a>
                        </li>
                        <li>
                            <a className='text-primary fs-5 ms-2' ><Twitter /></a>
                        </li>
                        <li>
                            <a className='text-primary fs-5 ms-2' ><Youtube /></a>
                        </li>
                        <li>
                            <a className='text-primary fs-5 ms-2' href="https://www.linkedin.com/in/ram%C3%B3n-folguera-0ab32776/" ><Linkedin /></a>
                        </li>
                    </ul>
            
          </Nav>
          
        </Navbar.Collapse>
        {/* <div

          className="buttonLogoutDesign"
          onClick={() => logoutFunction()}
        >
          Logout
          </div> */}
      </Container>
    </Navbar>
  );
}

