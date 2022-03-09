import { Form, Container } from "react-bootstrap";
import { FormField } from "../../components/Form";
import { ErrorAlert } from "../../components/ErrorAlert";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import apis from "../../apis/api";
import { ButtonGlobal } from "../../components/Button";

export function PostNewStay() {
  const navigate = useNavigate();
  const [details, setDetails] = useState({
    guests: "",
    bedroom: "",
    bathroom: "",
  });
  const [form, setForm] = useState({
    stayTitle: "",
    stayCountry: "",
    stayCity: "",
    stayType: "",
    perNight: null,
    description: "",
    stayDetails: { ...details },
    amenities: "",
    stayImage: "",
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  function handleChange(event) {
    if (event.target.files) {
      setForm({ ...form, [event.target.name]: event.target.files[0] });
      return;
    }

    setForm({ ...form, [event.target.name]: event.target.value });
  }

  function handleStayDetails(event) {
    setDetails({ ...details, [event.target.name]: event.target.value });
    setForm({
      ...form,
      stayDetails: { ...details },
    });
    console.log(form);
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

      const stayImage = await handleUpload(form.stayImage);

      const response = await apis.post("stays/create-stay", {
        ...form,
        stayImage: stayImage,
      });
      console.log(response);
      setLoading(false);
      navigate("/stays"); /* ADICIONAR A PAGE DE CASAS */
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
            type="radio"
            label="House"
            id="stayTypeCreate"
            value="House"
            checked={form.stayType === "House"}
            name="stayType"
            required={true}
            onChange={handleChange}
            readOnly={loading}
          />{" "}
          {/* stayType ENUM */}
          <Form.Check
            type="radio"
            label="Apartament"
            id="stayTypeCreate"
            value="Apartament"
            checked={form.stayType === "Apartament"}
            name="stayType"
            required={true}
            onChange={handleChange}
            readOnly={loading}
          />{" "}
          {/* stayType ENUM */}
          <Form.Check
            type="radio"
            label="Motorhome"
            id="stayTypeCreate"
            value="Motorhome"
            checked={form.stayType === "Motorhome"}
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
        <p>Detalhes da Estadia:</p>
        <FormField
          label="Número de pessoas"
          type="number"
          id="stayDetailsCreate"
          name="guests"
          placeholder="quantos pessoas?"
          value={form.stayDetails.guests}
          required={false}
          onChange={handleStayDetails}
          readOnly={loading}
        />{" "}
        {/* stayDetails */}
        <FormField
          label="Quartos"
          type="number"
          id="stayDetailsCreate"
          name="bedroom"
          placeholder="quantos quartos?"
          value={form.stayDetails.bedroom}
          required={false}
          onChange={handleStayDetails}
          readOnly={loading}
        />{" "}
        {/* stayDetails */}
        <FormField
          label="Banheiros"
          type="number"
          id="stayDetailsCreate"
          name="bathroom"
          placeholder="quantos banheiros?"
          value={form.stayDetails.bathroom}
          required={false}
          onChange={handleStayDetails}
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
          id="stayImageCreate"
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
          <Link style={{ textDecoration: "none" }} to={`/user-home`}>
            <ButtonGlobal>Voltar</ButtonGlobal>
          </Link>
          {error ? <ErrorAlert>{error}</ErrorAlert> : null}
        </div>
      </Form>
    </Container>
  );
}
