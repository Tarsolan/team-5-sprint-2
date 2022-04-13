import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <Navbar bg="custom" expand="lg" variant="flower">
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
                <NavDropdown.Item as={NavLink} to="/home">
                  All Products
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={NavLink} to="/home">
                  Flowers
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/home">
                  Gardening Accessories
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/home">
                  Plantwear
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={NavLink} to="/home">
                Shopping Cart
              </Nav.Link>
              <NavDropdown
                title="Account Management"
                id="basic-nav-dropdown"
                menuVariant="dark"
              >
                <NavDropdown.Item as={NavLink} to="/createAcc">
                  Create New Account
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/AccDetails">
                  View Account Details
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/login">
                  Login
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </nav>
  );
};

export default Navigation;
