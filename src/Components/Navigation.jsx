import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import logo from "../ListingPics/FlowerLogo.png";
import { FiLogIn } from "react-icons/fi";

const Navigation = ({ loginCheck, name, cart }) => {
  if (cart === undefined) {
    cart = [];
  }

  return (
    <nav>
      <Navbar bg="custom" expand="xl" variant="flower">
        <Container>
          <Navbar.Brand>
            <Link
              to="/main"
              style={{
                fontFamily: "Lobster Two, cursive",
                fontStyle: "normal",
                letterSpacing: "0.16em",
              }}
            >
              <img src={logo} width="64px" height="64px" alt="Store-Logo" />
              Growing Pains
            </Link>
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
                <NavDropdown.Item as={NavLink} to="/roses">
                  Roses
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/lilies">
                  Lilies
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/carnations">
                  Carnations
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/mixed">
                  Mixed
                </NavDropdown.Item>
              </NavDropdown>
              {loginCheck ? (
                <Nav.Link as={NavLink} to="/cart">
                  <i className="fas fa-shopping-cart"></i> Shopping Cart{" "}
                  {cart.length > 0 && (
                    <sup className="cart-counter">{cart.length}</sup>
                  )}
                </Nav.Link>
              ) : (
                <Nav.Link as={NavLink} to="/cart">
                  <i className="fas fa-shopping-cart"></i> Shopping Cart{" "}
                  {cart.length > 0 && (
                    <sup className="cart-counter">{cart.length}</sup>
                  )}
                </Nav.Link>
              )}
              {/* Depending on if a user is logged in, the account button will take you to either the login page or the details page */}
              {loginCheck ? (
                <Nav.Link as={NavLink} to="/AccDetails">
                  <i className="fas fa-user-alt"></i> {name}'s Account
                </Nav.Link>
              ) : (
                <Nav.Link as={NavLink} to="/login">
                  <FiLogIn /> Login
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
