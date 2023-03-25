import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { userData, userout } from "../../layout/userSlice";
import "./NavbarSecond.css";

export const NavbarSecond = () => {
  const dispatch = useDispatch();
  const credentialsRdx = useSelector(userData);

  const logoutFunction = () => {
    dispatch(userout({ credentials: {} }));
    setTimeout(() => {
      navigate("/");
    }, 500);
  };

  const navigate = useNavigate();

  return (
    <Navbar expand="lg" className="navbarDesignSecond">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
      
            {!credentialsRdx.credentials?.user?.roleId ? (
              <>
              <Nav className="ml-auto ">
                <Nav.Link className="navLinkDesign text-white" as={Link} to="/">
                  <p className="navLinkDesign">Home</p>
                </Nav.Link>
                <Nav.Link className="navLinkDesign text-white" as={Link} to="/register">
                  <p className="navLinkDesign">Register</p>
                </Nav.Link>
                </Nav>
                <Nav className="ms-auto ">
                <Nav.Link className="buttonLogoutDesign" as={Link} to="/login">
                  <p className="buttonLogoutTextDesign">Login</p>
                </Nav.Link>
                </Nav>
              </>
            ) : credentialsRdx.credentials?.user?.roleId === 2 ? (
              <>
                <Nav className="ml-auto ">
                  <Nav.Link
                    as={Link}
                    to="/profile"
                  >
                  <p className="navLinkDesign">{credentialsRdx.credentials?.user?.name}</p>
                  </Nav.Link>
                  <Nav.Link
                    className="navLinkDesign"
                    as={Link}
                    to="/profile"
                  >
                    
                    <p className="navLinkDesign">Admin account</p>
                  </Nav.Link>
                  <Nav.Link
                    className="navLinkDesign"
                    as={Link}
                    to="/users-as-admin"
                  >
                   <p className="navLinkDesign"> Users</p>
                  </Nav.Link>
                </Nav>
                <Nav className="ms-auto ">
                  <Nav.Link
                    className="buttonLogoutDesign"
                    onClick={() => logoutFunction()}
                  >
                   <p className="buttonLogoutTextDesign"> Logout</p>
                  </Nav.Link>
                </Nav>
              </>
            ) : credentialsRdx.credentials?.user?.roleId === 1 ? (
              <>
              <Nav.Link
                    as={Link}
                    to="/profile"
                  >
                <p className="navLinkDesign">{credentialsRdx.credentials?.user?.name}</p>
                </Nav.Link>
                
                <Nav.Link className="navLinkDesign" as={Link} to="/profile">
                <p className="navLinkDesign"> Profile</p>
                </Nav.Link>
           
                <Nav.Link
                  className="navLinkDesign"
                  as={Link}
                  to="/appointments-as-client"
                >
                 <p className="navLinkDesign"> Appointments</p>
                </Nav.Link>
           
                <Nav className="ms-auto ">
                <Nav.Link
                  className="buttonLogoutDesign me-4"
                  as={Link}
                  to="/create-appointment"
                >
                 <p className="buttonLogoutTextDesign">Book Appointment</p>
                </Nav.Link>

               
                  <Nav.Link
                    className="buttonLogoutDesign"
                    onClick={() => logoutFunction()}
                  >
                   <p className="buttonLogoutTextDesign"> Logout</p>
                  </Nav.Link>
                </Nav>
              </>
            ) : credentialsRdx.credentials?.user?.roleId === 3 ? (
              <>
                <Nav.Link
                  className="navLinkDesign"
                  as={Link}
                  to="/my-appointments-as-doctor"
                >
                 <p className="navLinkDesign"> My appointments</p>
                </Nav.Link>
                <Nav.Link
                  className="navLinkDesign"
                  as={Link}
                  to="/appointments-as-dentist"
                >
                  <p className="navLinkDesign">All appointments</p>
                </Nav.Link>
                <Nav className="ms-auto ">
                  <Nav.Link
                    className="buttonLogoutDesign"
                    onClick={() => logoutFunction()}
                  >
                   <p className="buttonLogoutTextDesign"> Logout</p>
                  </Nav.Link>
                </Nav>
              </>
            ) : (
              <>
                <Nav.Link
                  className="buttonLogoutDesign"
                  onClick={() => logoutFunction()}
                >
                 <p className="buttonLogoutTextDesign"> Logout</p>
                </Nav.Link>
              </>
            )}
        
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
};
