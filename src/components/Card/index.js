import { Card, Button, ListGroup, ListGroupItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import apis from "../../apis/api";

export function Cards(props) {
  async function handleDelete() {
    try {
      await apis.delete(`/user-stay/delete/${props.id}`);
      props.setRerender(true);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Card className="card" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.stayImage} />
      <Card.Body>
        <Card.Title>{props.stayTitle}</Card.Title>
        {/*  <Card.Text>{props.stayCountry}</Card.Text>
        <Card.Text>{props.stayCity}</Card.Text>
        <Card.Text>{props.stayType}</Card.Text> */}
        <ListGroup className="list-group-flush">
          <ListGroupItem>{props.stayCountry}</ListGroupItem>
          <ListGroupItem>{props.stayCity}</ListGroupItem>
          <ListGroupItem>{props.stayType}</ListGroupItem>
        </ListGroup>
        <Link to={`/stays/user-stay/${props.id}`}>
          <Button variant="primary">Mais informações </Button>
        </Link>
        <Link to={`/stays/user-stay/update/${props.id}`}>
          <Button variant="primary">Editar </Button>
        </Link>
        <Link style={{ textDecoration: "none" }} to={`/stays`}>
          <Button type="button" onClick={handleDelete}>
            Deletar
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
}
