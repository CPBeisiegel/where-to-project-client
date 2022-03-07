import { Navbar, Container, Nav } from "react-bootstrap";

export function NavbarExterna() {
  return (
    <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: "#6667AB" }}>
      <Container>
        <Navbar.Brand href="#home">LOGO</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto navbar-brand ">
            <Nav.Link to="#home">Estadias</Nav.Link>
            <Nav.Link to="#link">Cadastrar</Nav.Link>
            <Nav.Link to="#link">Entrar</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
