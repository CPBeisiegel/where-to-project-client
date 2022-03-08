import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import apis from "../../apis/api";
import { Container } from "react-bootstrap";
import { FormField } from "../../components/Form";
import { ButtonGlobal } from "../../components/Button";

export function PostNewComent() {
  const navigate = useNavigate();
  const { id } = useParams();
  //console.log("ID:", id);

  const [form, setForm] = useState({
    review: "",
  });

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
    //console.log(event.target.value);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const response = await apis.post(`/reviews/${id}/create-review`, form);
      console.log("ESSE É O RESPONSE:", response.data);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <Container>
        <h1 style={{ textAlign: "center", marginTop: "30px" }}>Comentar</h1>

        <form onSubmit={handleSubmit}>
          <FormField
            type="text"
            label="Deixe seu comentário"
            id="createReview"
            name="review"
            onChange={handleChange}
            value={form.review}
            required={true}
          />

          <div style={{ marginTop: "15px" }}>
            <ButtonGlobal type="submit">Publicar</ButtonGlobal>
          </div>
        </form>
      </Container>
    </div>
  );
}
