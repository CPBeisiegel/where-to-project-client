export function ErrorAlert(props) {
  return (
    <div className="alert alert-danger" role="alert">
      {typeof props.children === "object" ? props.children.msg : props.children}
    </div>
  );
}
