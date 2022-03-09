import { Form, FormControl, Button } from "react-bootstrap";

export function SearchBar(props) {
  return (
    <>
      <Form className="d-flex">
        <FormControl
          type="search"
          name="searchParams"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          // Criando uma callback anonima para invocar a função passada por props com o value do input como parametro
          onKeyUp={(event) => {
            props.filterAPI(event.target.value);
          }}
        />
        <Button variant="outline-dark">Search</Button>
      </Form>
    </>
  );
}
