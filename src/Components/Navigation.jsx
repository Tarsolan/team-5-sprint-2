import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

const Navigation = ({ loginCheck, name }) => {
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
              {/* Depending on if a user is logged in, the account button will take you to either the login page or the details page */}
              {loginCheck ? (
                <Nav.Link as={NavLink} to="/AccDetails">
                  <i className="fas fa-user-alt"></i> {name}'s Account
                </Nav.Link>
              ) : (
                <Nav.Link as={NavLink} to="/login">
                  <i className="fas fa-user-alt"></i> Account Management
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </nav>
  );
};

export default Navigation;
