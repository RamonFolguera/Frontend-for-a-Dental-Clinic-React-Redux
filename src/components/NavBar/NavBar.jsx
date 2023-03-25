import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'react-bootstrap-icons';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { detailsData } from '../../layout/detailsSlice';
import { userData, userout } from '../../layout/userSlice';
import './NavBar.css'

export const NavBar = () => {

  const dispatch = useDispatch();
  const credentialsRdx = useSelector(userData);
  const userDetailedRdx = useSelector(detailsData);
   
const navigate = useNavigate();

  const logoutFunction = () => {

    dispatch(userout({credentials: {}}));
    setTimeout(() => {
      navigate("/");
    }, 500);
  }

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
                            <a className='text-primary fs-5 ms-2' href="https://www.instagram.com/gruposaona/"><Instagram /> </a>
                        </li>
                        <li>
                            <a className='text-primary fs-5 ms-2' href="https://www.facebook.com/gruposaona"><Facebook /></a>
                        </li>
                        <li>
                            <a className='text-primary fs-5 ms-2' href="https://twitter.com/gruposaona"><Twitter /></a>
                        </li>
                        <li>
                            <a className='text-primary fs-5 ms-2' href="https://www.youtube.com/channel/UCGLdWRKW_jU9vZS8wz8Ti6g/featured"><Youtube /></a>
                        </li>
                        <li>
                            <a className='text-primary fs-5 ms-2' href="https://www.linkedin.com/company/grupo-saona"><Linkedin /></a>
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

