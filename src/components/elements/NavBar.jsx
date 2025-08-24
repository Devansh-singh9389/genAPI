import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

function NavBar() {
  return (
    <Navbar expand="lg" bg="dark" variant="dark" sticky="top" className="shadow-sm">
      <Container>
        {/* Brand / Logo */}
        <Navbar.Brand href="/" className="fw-bold fs-4">
          ⚡ API Generator
        </Navbar.Brand>

        {/* Toggle for mobile */}
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          {/* Links */}
          <Nav className="me-auto">
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/price">Pricing</Nav.Link>
            <Nav.Link href="/detail">Detail</Nav.Link>
          </Nav>

          {/* Right side (Login Button) */}
          <Nav>
            <Button href="/login" variant="outline-light" className="px-3">
              Login
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
