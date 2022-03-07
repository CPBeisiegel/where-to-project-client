import { Button } from "react-bootstrap";

export function ButtonGlobal(props) {
  return (
    <>
      <Button
        variant="primary"
        size="lg"
        type={props.type}
        className={props.className}
        disabled={props.disabled}
        onClick={props.onClick}
      >
        {props.children}
      </Button>{" "}
    </>
  );
}
