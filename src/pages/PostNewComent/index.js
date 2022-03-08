import { useState, useParams } from "react";
import { useNavigate } from "react-router-dom";
import apis from "../../apis/api";
import { Container } from "react-bootstrap";
import { FormField } from "../../components/Form";
import { ButtonGlobal } from "../../components/Button";

export function PostNewComent() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [form, setForm] = useState({
    review: "",
  });

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
    console.log(form);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await apis.post(`/${id}/create-review`, ...form);
      console.log(response, id);
      navigate("/stays");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Container>
        <h1 style={{ textAlign: "center", marginTop: "30px" }}>Comentar</h1>

        <div style={{ marginTop: "30px" }}>
          <FormField
            type="text"
            label="Deixe seu comentário"
            id="createReview"
            name="review"
            onChange={handleChange}
            value={form.review}
            required={true}
          />
        </div>
        <div style={{ marginTop: "15px" }}>
          <ButtonGlobal type="submit">Publicar</ButtonGlobal>
        </div>
      </Container>
    </form>
  );
}
