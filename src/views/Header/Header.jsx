import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "boxicons";
import "./Header.css";

const Header = () => {
  return (
    <header id="navbar">
      <Navbar expand="lg" bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            MilkBar
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/pastries">
                Cakes
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">
                Contacts
              </Nav.Link>
            </Nav>
            <Button variant="light" className="btn me-3">
              <Link to="/login">Log in</Link>
            </Button>
            <Button variant="light" className="btn">
              <Link to="/signup">Sign up</Link>
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
