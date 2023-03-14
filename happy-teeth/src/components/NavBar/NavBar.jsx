import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Navigator } from '../Navigator/Navigator';

export const NavBar = () => {
  return (
    <Navbar bg="white" expand="lg">
      <Container>
      <Nav>
        <Navbar.Brand href="#home">
        <img
              alt="logo smiley teeth"
              src="../../../img/happy-teeth.png"
              width="100"
              height="100"
              className="d-inline-block align-top"
            />

        </Navbar.Brand>
        </Nav>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        
        
          <Nav className="ms-auto">
            {/* <Navigator route={'Register'} layout={'/register'}/>
            <Navigator route={'Register'} layout={'/register'}/>
            <Navigator route={'Register'} layout={'/register'}/>
            <Navigator route={'Register'} layout={'/register'}/> */}
            <Nav.Link as={Navigator} route={'Home'} layout={'/home'}>Home</Nav.Link>
            <Nav.Link href="#link">Register</Nav.Link>
            <Nav.Link href="#link">Login</Nav.Link>
            <Nav.Link href="#link">Profile</Nav.Link>
            <NavDropdown title="Appointments" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">For clients</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                For dentists
              </NavDropdown.Item>
            
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Admin
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

