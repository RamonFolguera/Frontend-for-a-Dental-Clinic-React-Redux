import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { userData, userout } from '../../layout/userSlice';


export const NavBar = () => {



    const dispatch = useDispatch()
    const credentialsRdx = useSelector(userData)
    const logoutFunction = () => {

    dispatch(userout({credentials: {}, token: ""} ));
  // console.log(credentials)
  console.log(dispatch(userout({credentials: {}, token: ""} )))

  }

  return (
    <Navbar bg="white" expand="lg">
      <Container>
      <Nav>
        <Navbar.Brand as={Link} to='/'>
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
            <Nav.Link as={Link} to='/'>Home</Nav.Link>
            <Nav.Link as={Link} to='/register'>Register</Nav.Link>
            <Nav.Link as={Link} to='/login'>Login</Nav.Link>
            <Nav.Link as={Link} to='/profile'>Profile</Nav.Link>
            <Nav.Link as={Link} to='/users-as-admin'>All users as admin</Nav.Link>
            <NavDropdown title="Appointments" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to='/appointments-clients'>For clients</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/appointments-dentists'>
                For dentists
              </NavDropdown.Item>
            
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to='/appointments-admin'>
                Admin
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          
        </Navbar.Collapse>
        <div
         
          className="buttonLogoutDesign"
          onClick={() => logoutFunction()}
        >
          Logout
          </div>
      </Container>
    </Navbar>
  );
}

