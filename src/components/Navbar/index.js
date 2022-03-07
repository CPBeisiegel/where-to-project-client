import { Link, useNavigate } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { AuthContext } from "../../contexts/authContext";
import Logo from "../../assets/images/Viagem.png";

export function NavbarExterna() {
  return (
    <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: "#6667AB" }}>
      <Container>
        <Navbar.Brand>
          <img
            src={Logo}
            width="60"
            height="60"
            className="d-inline-block align-top"
            alt="WhereTo?"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto navbar-brand ">
            <Nav.Link to="#home">Home</Nav.Link>
            <Nav.Link to="#home">Estadias</Nav.Link>
            <Nav.Link to="#link">Cadastrar</Nav.Link>
            <Nav.Link to="#link">Entrar</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
