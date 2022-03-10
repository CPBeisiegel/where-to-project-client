import { Form, FormControl, Button } from "react-bootstrap";

export default function SearchBar(props) {
  return (
    <>
      <Form className="d-flex">
        <FormControl
          type="search"
          name="searchParams"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          onKeyUp={(event) => {
            props.filterAPI(event.target.value);
          }}
        />
        <Button variant="outline-dark">Search</Button>
      </Form>
    </>
  );
}
