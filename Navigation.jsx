import { Navbar, Nav, Container } from "react-bootstrap"
import { Link } from "react-router-dom"

export default function Navigation() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="shadow mb-4">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src="/images/logo.png" alt="Company logo" height={32} className="me-2" />
          TechNova Kft.
        </Navbar.Brand>
        <Nav className="ms-auto">
          <Nav.Link as={Link} to="/">Főoldal</Nav.Link>
          <Nav.Link as={Link} to="/about">Rólunk</Nav.Link>
          <Nav.Link as={Link} to="/products">Termékeink</Nav.Link>
          <Nav.Link as={Link} to="/sales">Akciók</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}
