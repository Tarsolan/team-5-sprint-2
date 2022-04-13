import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import { useState } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import CreateAccount from "./Components/CreateAccount";

function App() {
  const [username, setUsername] = useState();

  return (
    <Router>
      <div>
        <Navbar bg="custom" expand="lg" sticky="top" variant="flower">
          <Container>
            <Navbar.Brand as={NavLink} to="/home">
              Store Name and Icon will go here
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
                <Nav.Link as={NavLink} to="/login">
                  Account
                </Nav.Link>
                <Nav.Link as={NavLink} to="/home">
                  Login
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Routes>
          <Route path="/home" element={<></>}></Route>
          <Route path="/login" element={<CreateAccount />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

// Old Nav
{
  /* <nav>
          <ul>
            <li id="storeName">Store Name</li>
            <li>Flowers</li>
            <li>Cart</li>
            <li>Login</li>
            <li>Account Management</li>
          </ul>
        </nav> */
}
