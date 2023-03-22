import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { detailsData } from '../../layout/detailsSlice';
import { userData, userout } from '../../layout/userSlice';


export const NavBar = () => {

  const dispatch = useDispatch();
  const credentialsRdx = useSelector(userData);
  // const userDetailedRdx = useSelector(detailsData);

  
 



  const logoutFunction = () => {

    dispatch(userout({credentials: {}}));


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
          {!credentialsRdx.credentials?.user?.roleId ? (
            <>
              <Nav.Link as={Link} to='/'>Home</Nav.Link>
              <Nav.Link as={Link} to='/register'>Register</Nav.Link>
              <Nav.Link as={Link} to='/login'>Login</Nav.Link>
            </>
            ) : credentialsRdx.credentials?.user?.roleId === 2 ?  (
            <>
              <Nav.Link as={Link} to='/patients-profile'>
              <div>{credentialsRdx.credentials?.user?.name}</div>
              </Nav.Link>
              <Nav.Link as={Link} to='/users-as-admin'>All users as admin</Nav.Link>  
              <Nav.Link 
                className="buttonLogoutDesign"
                onClick={() => logoutFunction()}>
                Logout
              </Nav.Link>
            </>
            ) :  credentialsRdx.credentials?.user?.roleId === 1 ? (
            <>
            <Nav.Link as={Link} to='/appointments-as-client'>Appointments</Nav.Link>
            <Nav.Link as={Link} to='/modify-appointment'>Modify Appointments</Nav.Link>
            <Nav.Link as={Link} to='/create-appointment'>Create Appointments</Nav.Link>
              
            <Nav.Link 
                className="buttonLogoutDesign"
                onClick={() => logoutFunction()}>
                Logout
              </Nav.Link>
            </>
            ) :  credentialsRdx.credentials?.user?.roleId === 3 ? (
            <>
            <Nav.Link as={Link} to='/appointments-as-dentist'></Nav.Link>
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

