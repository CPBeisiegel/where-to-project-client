import { useContext, useState, useEffect } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { AuthContext } from "../../contexts/authContext";
import { ButtonGlobal } from "../Button/index";
import Logo from "../../assets/images/Viagem.png";
import "./Navbar.css";
export function NavbarExterna() {
  const { loggedInUser, handleLogOut } = useContext(AuthContext);
  const [loginState, setLoginState] = useState(loggedInUser);
  useEffect(() => {
    setLoginState(loggedInUser);
  }, [loggedInUser]);
  console.log(loggedInUser);
  console.log("Aqui", loginState);
  return (
    <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: "#6667AB" }}>
      <Container>
        <Navbar.Brand>
          <Nav.Link href="/">
            <img
              src={Logo}
              width="60"
              height="60"
              className="d-inline-block align-top"
              alt="WhereTo?"
            />
          </Nav.Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto navbar-brand ">
            <Nav.Link
              href={loginState ? "/user-home" : "login"}
              style={{ color: "white" }}
            >
              {loginState ? null : "Login"}
            </Nav.Link>
            <Nav.Link href={"/stays"} style={{ color: "white" }}>
              Estadias
            </Nav.Link>
          </Nav>

          {loginState ? (
            <NavDropdown
<<<<<<< HEAD
              style={{ textDecoration: "none", color: "white" }}
              title="Minha Página"
=======
              title="Minhas Paginas"
              id="nav-dropdown"
              href="#"
              className="nav"
>>>>>>> 0f9b332911500f56298779b9179a2f8cb76017d8
            >
              <NavDropdown.Item href={loginState ? "/user-home" : "login"}>
                {loginState ? " Perfil" : "Login"}
              </NavDropdown.Item>
              <NavDropdown.Item href={`/stays/create-stay`}>
                Cadastrar uma estadia
              </NavDropdown.Item>
              <NavDropdown.Item href={`/sobre`}>Sobre</NavDropdown.Item>
            </NavDropdown>
          ) : (
            <Nav.Link
              style={{ textDecoration: "none", color: "white" }}
              href="/signup"
            >
              Cadastrar
            </Nav.Link>
          )}
          {loginState ? (
            <ButtonGlobal
              type="button"
              className="btn btn-light"
              onClick={handleLogOut}
            >
              Sair
            </ButtonGlobal>
          ) : null}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
