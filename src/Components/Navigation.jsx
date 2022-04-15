import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

const Navigation = ({ loginCheck, logOut, name }) => {
  return (
    <nav>
      <Navbar bg="custom" expand="xl" variant="flower">
        <Container>
          <Navbar.Brand>
            <Link to="/home">Store Name and Icon will go here</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" color="">
            <Nav className="me-auto">
              <NavDropdown
                title="Product Categories"
                id="basic-nav-dropdown"
                menuVariant="dark"
              >
                <NavDropdown.Item as={NavLink} to="/main">
                  All Flowers
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={NavLink} to="/home">
                  Roses
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/home">
                  Lilies
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/home">
                  Carnations
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/home">
                  Mixed
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={NavLink} to="/home">
                Shopping Cart
              </Nav.Link>
              {/* <span className="material-icons-outlined">person</span> */}
              {/* <NavDropdown
                title="Account Management"
                id="basic-nav-dropdown"
                menuVariant="dark"
              > */}
              {/* {loginCheck ? (
                  <></>
                ) : (
                  <NavDropdown.Item as={NavLink} to="/createAcc">
                    Create New Account
                  </NavDropdown.Item>
                )} */}

              {/* If no user is logged in, the nav bar will display the option to log in or create a user */}
              {loginCheck ? (
                <Nav.Link as={NavLink} to="/AccDetails">
                  View Account Details
                </Nav.Link>
              ) : (
                <Nav.Link as={NavLink} to="/login">
                  Login
                </Nav.Link>
              )}
              {/* If a user is currently logged in, the nav bar will display the option to log out */}
              {loginCheck ? (
                <Nav.Link as={NavLink} to="/login" onClick={logOut}>
                  Log Out
                </Nav.Link>
              ) : (
                <></>
              )}
              {/* </NavDropdown> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </nav>
  );
};

export default Navigation;
