import { Container, Card, CardGroup, Button } from "react-bootstrap";

export function Sobre() {
  return (
    <div>
      <Container className="text-center d-flex flex-column justify-content-center align-items-center mb-4 mt-4">
        <Container
          className="text-center d-flex flex-column justify-content-center align-items-center mb-4 mt-4"
          style={{ color: "#27293d " }}
        >
          <h3>Desenvolvedoras</h3>
        </Container>

        <CardGroup>
          <Card
            border="light"
            bg="light"
            style={{ width: "18rem", alignItems: "center" }}
          >
            <Card.Img
              src="https://avatars.githubusercontent.com/u/49723634?v=4"
              alt="Camila Beisiegel"
              className="rounded-circle mx-1 p-3 picUserPof d-flex justify-content-center"
              style={{
                height: "190px",
                width: "190px",
                objectFit: "cover",
              }}
            />
            <Card.Body>
              <Card.Title className="text-center d-flex justify-content-center">
                Camila Beisiegel
              </Card.Title>

              <Button size="medium" variant="light">
                <a
                  href="https://github.com/CPBeisiegel"
                  style={{
                    textDecoration: "none",
                    fontSize: "30px",
                    color: "black",
                  }}
                >
                  <i className="fa-brands fa-github"></i>
                </a>
              </Button>
              <Button size="medium" variant="light">
                <a
                  href="https://www.linkedin.com/in/camilabeisiegel/"
                  style={{
                    textDecoration: "none",
                    fontSize: "30px",
                    color: "black",
                  }}
                >
                  <i class="fa-brands fa-linkedin"></i>
                </a>
              </Button>
            </Card.Body>
          </Card>

          <Card
            border="light"
            bg="light"
            style={{ width: "18rem", alignItems: "center" }}
          >
            <Card.Img
              src="https://avatars.githubusercontent.com/u/88454672?v=4"
              alt="Danielle Nascimento"
              className="rounded-circle mx-1 p-3 picUserPof"
              style={{
                height: "190px",
                width: "190px",
                objectFit: "cover",
              }}
            />
            <Card.Body>
              <Card.Title className="text-center d-flex justify-content-center">
                Danielle Nascimento
              </Card.Title>

              <Button size="medium" variant="light">
                <a
                  href="https://github.com/daniellenasc"
                  style={{
                    textDecoration: "none",
                    fontSize: "30px",
                    color: "black",
                  }}
                >
                  {" "}
                  <i className="fa-brands fa-github"></i>{" "}
                </a>
              </Button>
              <Button size="medium" variant="light">
                <a
                  href="https://www.linkedin.com/in/d-nascimento/"
                  style={{
                    textDecoration: "none",
                    fontSize: "30px",
                    color: "black",
                  }}
                >
                  {" "}
                  <i class="fa-brands fa-linkedin"></i>
                </a>
              </Button>
            </Card.Body>
          </Card>
        </CardGroup>
      </Container>
    </div>
  );
}
