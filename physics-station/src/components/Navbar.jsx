import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

function CustomNavbar() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar
      bg="white"
      variant="dark"
      expand="lg"
      expanded={expanded}
      sticky="top"
      className="shadow-sm py-3"
    >
      <Container fluid>
        <Navbar.Brand 
        as={NavLink} 
        to="/" 
        className="fw-bold fs-4 text-warning">
          Physics Station
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(!expanded)}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto gap-4">
            <Nav.Link
              as={NavLink}
              to="/"
              onClick={() => setExpanded(false)}
              className="nav-item-link"
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/courses"
              onClick={() => setExpanded(false)}
              className="nav-item-link"
            >
              Courses
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/resources"
              onClick={() => setExpanded(false)}
              className="nav-item-link"
            >
              Resources
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/admission"
              onClick={() => setExpanded(false)}
              className="nav-item-link"
            >
              Admission
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/about"
              onClick={() => setExpanded(false)}
              className="nav-item-link"
            >
              About Us
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/contact"
              onClick={() => setExpanded(false)}
              className="nav-item-link"
            >
              Contact Us
            </Nav.Link>
            <Nav.Link
              variant="primary"
              as={NavLink}
              to="/login"
              onClick={() => setExpanded(false)}
              className="login-btn nav-item-link"
            >
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
