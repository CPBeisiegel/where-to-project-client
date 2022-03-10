import { Form, Button } from "react-bootstrap";

export default function Search(props) {
  return (
    <Form className="d-flex">
      <Form.Control
        type="search"
        name="searchParams"
        placeholder="Search"
        className="me-2"
        onKeyUp={(event) => {
          props.filterAPI(event.target.value);
        }}
      />
      <Button variant="outline-dark">Search</Button>
    </Form>
  );
}
