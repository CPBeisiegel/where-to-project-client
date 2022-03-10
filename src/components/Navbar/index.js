import { useContext, useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { AuthContext } from "../../contexts/authContext";
import { ButtonGlobal } from "../Button/index";
import Logo from "../../assets/images/Viagem.png";

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
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href={loginState ? "/user-home" : "login"}>
              {loginState ? "Minha Página" : "Login"}
            </Nav.Link>

            {loginState ? (
              <ButtonGlobal
                type="button"
                className="btn btn-light"
                onClick={handleLogOut}
              >
                Sair
              </ButtonGlobal>
            ) : (
              <Nav.Link href="/signup">Cadastrar</Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
