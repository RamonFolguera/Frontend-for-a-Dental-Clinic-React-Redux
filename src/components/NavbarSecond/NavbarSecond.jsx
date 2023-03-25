import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { detailsData } from '../../layout/detailsSlice';
import { userData, userout } from '../../layout/userSlice';
import './NavbarSecond.css'

export const NavbarSecond = () => {

  const dispatch = useDispatch();
  const credentialsRdx = useSelector(userData);
  const userDetailedRdx = useSelector(detailsData);
   
const navigate = useNavigate();

  return (
    <Navbar  expand="lg" className="navbarDesign">
      <Container>
      <Nav>
        </Nav>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto ">
          {!credentialsRdx.credentials?.user?.roleId ? (
            <>
              <Nav.Link className="text-white" as={Link} to='/'>Home</Nav.Link>
              <Nav.Link className="text-white" as={Link} to='/register'>Register</Nav.Link>
              <Nav.Link className="text-white" as={Link} to='/login'>Login</Nav.Link>
            </>
            ) : credentialsRdx.credentials?.user?.roleId === 2 ?  (
            <>
              <Nav.Link className="text-white" as={Link} to='/patients-profile'>
              <div>{credentialsRdx.credentials?.user?.name}</div>
              </Nav.Link>
              <Nav.Link className="text-white" as={Link} to='/users-as-admin'>All users as admin</Nav.Link>  
              <Nav.Link 
                className="buttonLogoutDesign"
                onClick={() => logoutFunction()}>
                Logout
              </Nav.Link>
            </>
            ) :  credentialsRdx.credentials?.user?.roleId === 1 ? (
            <>
          <div>{credentialsRdx.credentials?.user?.name}</div>
            <Nav.Link className="text-white" as={Link} to='/profile'>Profile</Nav.Link>
            <Nav.Link className="text-white" as={Link} to='/update-user-as-client'>Update Profile</Nav.Link>
            <Nav.Link className="text-white" as={Link} to='/appointments-as-client'>Appointments</Nav.Link>
            <Nav.Link className="text-white" as={Link} to='/modify-appointment'>Modify Appointments</Nav.Link>
            <Nav.Link className="text-white" as={Link} to='/create-appointment'>Create Appointments</Nav.Link>
              
            <Nav.Link 
                className="buttonLogoutDesign"
                onClick={() => logoutFunction()}>
                Logout
              </Nav.Link>
            </>
            ) :  credentialsRdx.credentials?.user?.roleId === 3 ? (
            <>
            <Nav.Link className="text-white" as={Link} to='/my-appointments-as-doctor'>My appointments</Nav.Link>
            <Nav.Link className="text-white" as={Link} to='/appointments-as-dentist'>All appointments</Nav.Link>
            <Nav.Link 
                className="buttonLogoutDesign"
                onClick={() => logoutFunction()}>
                Logout
              </Nav.Link> 
            </>
            ) : (
            <>
            <Nav.Link 
                className="buttonLogoutDesign"
                onClick={() => logoutFunction()}>
                Logout
              </Nav.Link>  
            </>
            )} 
            
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

