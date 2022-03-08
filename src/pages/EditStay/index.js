import { Form, Container } from "react-bootstrap";
import { FormField } from "../../components/Form";
import { ButtonGlobal } from "../../components/Button";
import { ErrorAlert } from "../../components/ErrorAlert";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import apis from "../../apis/api";

export function EditStay() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [form, setForm] = useState({
    stayTitle: "",
    stayCountry: "",
    stayCity: "",
    stayType: "",
    perNight: null,
    description: "",
    stayDetails: { guests: "" },
    amenities: "",
    stayImage: "",
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchStays() {
      try {
        const response = await apis.get(`/stays/user-stay/${id}`);
        console.log("Aqui", response.data);
        setForm({ ...response.data[0] });
      } catch (error) {
        console.log(error);
      }
    }
    fetchStays();
  }, [id]);

  function handleChange(event) {
    if (event.target.files) {
      setForm({ ...form, [event.target.name]: event.target.files[0] });
      return;
    }

    setForm({ ...form, [event.target.name]: event.target.value });
  }

  async function handleUpload(file) {
    try {
      const uploadData = new FormData();
      uploadData.append("picture", file);

      const response = await apis.post("/stays/pictures", uploadData);

      console.log(response.data.url);

      return response.data.url;
    } catch (error) {
      console.error(error);
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      setLoading(true);
      setError(null);
      console.log(form);
      const stayImage = await handleUpload(form.stayImage);

      const result = await apis.patch(`/stays/user-stay/update/${id}`, {
        ...form,
        stayImage: stayImage,
      });
      console.log(result);
      setLoading(false);
      navigate("/stays/list-stays"); /* ADICIONAR A PAGE DE CASAS */
    } catch (error) {
      setLoading(false);
      setError(error);

      if (error.result) {
        console.log(error);
        setError(error.response.data);
      } else {
        console.log(error.message);
        setError("Algo deu errado");
      }
    }
  }

  return (
    <Container>
      <h1>Editar uma Estadia:</h1>
      <Form className="mb-3" onSubmit={handleSubmit}>
        <FormField /* stayTitle */
          label="Nome da Estadia"
          id="stayTitleEdit"
          name="stayTitle"
          value={form.stayTitle}
          required={true}
          onChange={handleChange}
          readOnly={loading}
        />
        <FormField
          label="País"
          id="stayCountryEdit"
          name="stayCountry"
          value={form.stayCountry}
          required={true}
          onChange={handleChange}
          readOnly={loading}
        />{" "}
        {/* stayCountry */}
        <FormField
          label="Cidade"
          id="stayCityEdit"
          name="stayCity"
          value={form.stayCity}
          required={true}
          onChange={handleChange}
          readOnly={loading}
        />{" "}
        {/* stayCity */}
        <p>Tipo de Estadia:</p>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="House"
            id="stayTypeEdit"
            name="stayType"
            required={true}
            onChange={handleChange}
            readOnly={loading}
          />{" "}
          {/* stayType ENUM */}
          <Form.Check
            type="checkbox"
            label="Apartament"
            id="stayTypeEdit"
            name="stayType"
            required={true}
            onChange={handleChange}
            readOnly={loading}
          />{" "}
          {/* stayType ENUM */}
          <Form.Check
            type="checkbox"
            label="Motorhome"
            id="stayTypeEdit"
            name="stayType"
            required={true}
            onChange={handleChange}
            readOnly={loading}
          />{" "}
          {/* stayType ENUM */}
        </Form.Group>
        <FormField
          type="number"
          label="Preço por noite"
          id="perNightEdit"
          name="perNight"
          value={form.perNight}
          required={false}
          onChange={handleChange}
          readOnly={loading}
        />{" "}
        {/* perNight */}
        <FormField
          label="Descrição"
          id="descriptionEdit"
          name="description"
          value={form.description}
          required={true}
          onChange={handleChange}
          readOnly={loading}
        />{" "}
        {/* description */}
        <FormField
          label="Detalhes da Estadia"
          id="stayDetailsEdit"
          name="stayDetails"
          placeholder="quantos quartos?"
          value={form.stayDetails.guests}
          required={false}
          onChange={handleChange}
          readOnly={loading}
        />{" "}
        {/* stayDetails */}
        <FormField
          label="Facilidades"
          id="amenitiesEdit"
          name="amenities"
          value={form.amenities}
          required={false}
          onChange={handleChange}
          readOnly={loading}
        />{" "}
        {/* amenities GUESTS BEDROOM BATHROOM */}
        <FormField
          type="file"
          label="Foto"
          id="stayImagePicture"
          name="stayImage"
          onChange={handleChange}
          required={true}
          readOnly={loading}
        />{" "}
        {/* stayImage */}
        <div style={{ marginTop: "15px" }}>
          <ButtonGlobal type="submit" disable={loading}>
            {loading ? (
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            ) : (
              "Editar"
            )}
          </ButtonGlobal>
          <Link style={{ textDecoration: "none" }} to={`/stays`}>
            <ButtonGlobal>Voltar</ButtonGlobal>
          </Link>

          {error ? <ErrorAlert>{error}</ErrorAlert> : null}
        </div>
      </Form>
    </Container>
  );
}
