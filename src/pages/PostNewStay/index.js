import { Form, Container } from "react-bootstrap";
import { FormField } from "../../components/Form";
import { ErrorAlert } from "../../components/ErrorAlert";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import apis from "../../apis/api";
import { ButtonGlobal } from "../../components/Button";

export function PostNewStay() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    stayTitle: "",
    stayCountry: "",
    stayCity: "",
    stayType: "",
    perNight: null,
    description: "",
    stayDetails: "",
    amenities: "",
    stayImage: "",
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  async function handleUpload(file) {
    try {
      const uploadData = new FormData();
      uploadData.append("picture", file);

      const response = await apis.post("/picture-stay", uploadData);

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

      const stayImage = await handleUpload(form.stayImage);

      const response = await apis.put("stays/create-stay", ...form, stayImage);
      console.log(response);
      setLoading(false);
      navigate("/stays/list-stays"); /* ADICIONAR A PAGE DE CASAS */
    } catch (error) {
      setLoading(false);
      setError(error);
      if (error.response) {
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
      <h1>Cadastre uma estadia:</h1>
      <Form className="mb-3" onSubmit={handleSubmit}>
        <FormField /* stayTitle */
          label="Nome da Estadia"
          id="stayTitleCreate"
          name="stayTitle"
          value={form.stayTitle}
          required={true}
          onChange={handleChange}
          readOnly={loading}
        />
        <FormField
          label="País"
          id="stayCountryCreate"
          name="stayCountry"
          value={form.stayCountry}
          required={true}
          onChange={handleChange}
          readOnly={loading}
        />{" "}
        {/* stayCountry */}
        <FormField
          label="Cidade"
          id="stayCityCreate"
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
            id="stayTypeCreate"
            name="stayType"
            required={true}
            onChange={handleChange}
            readOnly={loading}
          />{" "}
          {/* stayType ENUM */}
          <Form.Check
            type="checkbox"
            label="Apartament"
            id="stayTypeCreate"
            name="stayType"
            required={true}
            onChange={handleChange}
            readOnly={loading}
          />{" "}
          {/* stayType ENUM */}
          <Form.Check
            type="checkbox"
            label="Motorhome"
            id="stayTypeCreate"
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
          id="perNightCreate"
          name="perNight"
          value={form.perNight}
          required={false}
          onChange={handleChange}
          readOnly={loading}
        />{" "}
        {/* perNight */}
        <FormField
          label="Descrição"
          id="descriptionCreate"
          name="description"
          value={form.description}
          required={true}
          onChange={handleChange}
          readOnly={loading}
        />{" "}
        {/* description */}
        <FormField
          label="Detalhes da Estadia"
          id="stayDetailsCreate"
          name="stayDetails"
          placeholder="quantos quartos?"
          value={form.stayDetails}
          required={false}
          onChange={handleChange}
          readOnly={loading}
        />{" "}
        {/* stayDetails */}
        <FormField
          label="Facilidades"
          id="amenitiesCreate"
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
              "Cadastrar"
            )}
          </ButtonGlobal>
          {error ? <ErrorAlert>{error}</ErrorAlert> : null}
        </div>
      </Form>
    </Container>
  );
}
