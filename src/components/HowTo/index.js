import { Card, CardGroup, Container } from "react-bootstrap";

export function HowTo() {
  return (
    <div>
      <Container className="mt-5 mb-5">
        <h1 style={{ color: "#6667AB" }}>
          Tem uma <b>casa</b>, <b>apartamento</b> ou <b>estadia itinerante</b>?
          Alugue-o! Descubra as vantagens do aluguel entre particulares com o{" "}
          <b>WHERE TO</b> em 4 passos:
        </h1>
      </Container>

      <Container className="mt-5 mb-5">
        <CardGroup>
          <Card bg="light" border="light" style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://dii3ne04p2g9s.cloudfront.net/img/homepage/ownerblock-image1.4338a2dae418.svg"
            />
            <Card.Body>
              <Card.Text style={{ color: "#6667AB" }}>
                1. Crie o seu anúncio <b>grátis</b> em 2 minutos.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card bg="light" border="light" style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://dii3ne04p2g9s.cloudfront.net/img/homepage/ownerblock-image2.bceb7891e85c.svg"
            />
            <Card.Body>
              <Card.Text style={{ color: "#6667AB" }}>
                2. Administre os seus pedidos de aluguel de acordo com as suas
                condições.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card bg="light" border="light" style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://dii3ne04p2g9s.cloudfront.net/img/homepage/ownerblock-image3.e5449988511a.svg"
            />
            <Card.Body>
              <Card.Text style={{ color: "#6667AB" }}>
                3. Conheça o locatário para a entrega das chaves.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card bg="light" border="light" style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://dii3ne04p2g9s.cloudfront.net/img/homepage/ownerblock-image4.1cc0859796c4.svg"
            />
            <Card.Body>
              <Card.Text style={{ color: "#6667AB" }}>
                4. Receba a sua <b>remuneração</b> e prossiga com o aluguel.
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
      </Container>
    </div>
  );
}

/* 
<Container>
        <Figure>
          <Figure.Image
            alt="Computer"
            src="https://dii3ne04p2g9s.cloudfront.net/img/homepage/ownerblock-image1.4338a2dae418.svg"
          />
          <Figure.Caption style={{ color: "#6667AB" }}>
            1. Crie o seu anúncio <b>grátis</b> em 2 minutos
          </Figure.Caption>
        </Figure>

        <Figure>
          <Figure.Image
            alt="Contrato"
            src="https://dii3ne04p2g9s.cloudfront.net/img/homepage/ownerblock-image2.bceb7891e85c.svg"
          />
          <Figure.Caption style={{ color: "#6667AB" }}>
            2. Administre os seus pedidos de aluguel de acordo com as suas
            condições
          </Figure.Caption>
        </Figure>

        <Figure>
          <Figure.Image
            alt="Chaves"
            src="https://dii3ne04p2g9s.cloudfront.net/img/homepage/ownerblock-image3.e5449988511a.svg"
          />
          <Figure.Caption style={{ color: "#6667AB" }}>
            3. Conheça o locatário para a entrega das chaves
          </Figure.Caption>
        </Figure>

        <Figure>
          <Figure.Image
            alt="Carteira"
            src="https://dii3ne04p2g9s.cloudfront.net/img/homepage/ownerblock-image4.1cc0859796c4.svg"
          />
          <Figure.Caption style={{ color: "#6667AB" }}>
            4. Receba a sua <b>remuneração</b> e prossiga com o aluguel
          </Figure.Caption>
        </Figure>
      </Container> */
