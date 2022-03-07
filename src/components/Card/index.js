import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export function Cards(props) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.stayImage} />
      <Card.Body>
        <Card.Title>{props.stayTitle}</Card.Title>
        <Card.Text>{props.stayCountry}</Card.Text>
        <Card.Text>{props.stayCity}</Card.Text>
        <Card.Text>{props.stayCity}</Card.Text>
        <Card.Text>{props.stayType}</Card.Text>

        <Link to={`/stays/user-stay/${props.id}`}>
          <Button variant="primary">Mais informações </Button>
        </Link>
      </Card.Body>
    </Card>
  );
}
