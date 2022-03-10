import { Card, Button, ListGroup, ListGroupItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Card.css";

export function Cards(props) {
  return (
    <Card className="card" style={{ width: "18rem", marginTop: "25px" }}>
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
          <Button variant="outline-light" className="btn-card">
            Ver detalhes{" "}
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
}
