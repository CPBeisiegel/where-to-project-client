import { FormField } from "../../components/Form";
import { ErrorAlert } from "../../components/ErrorAlert";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export function PostNewStay() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    stayTitle: "",
    stayCountry: "",
    stayCity: "",
    stayType: "",
    perNight: 0,
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

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      setLoading(true);
      setError(null);
      const response = await axios.post(
        "http://localhost:4000/api/stays/create-stay",
        form
      );
      console.log(response);
      setLoading(false);
      navigate("/estays"); /* ADICIONAR A PAGE DE CASAS */
    } catch (error) {
      setLoading(false);
      setError(error);
      if (error.response) {
        console.log(error);
        setError(error.response.data);
      } else {
        setError("Algo deu errado");
      }
    }
  }

  return (
    <>
      <h1>Cadastre uma estadia:</h1>
      <form onSubmit={handleSubmit}>
        <FormField /* stayTitle */
          label="Nome da Estadia"
          id="stayTitleCadastro"
          name="stayTitle"
          value={form.stayTitle}
          required={true}
          onChange={handleChange}
          readOnly={loading}
        />
        <FormField /> {/* stayCountry */}
        <FormField /> {/* stayCity */}
        <FormField /> {/* stayType ENUM */}
        <FormField /> {/* perNight */}
        <FormField /> {/* description */}
        <FormField /> {/* stayDetails */}
        <FormField /> {/* amenities GUESTS BEDROOM BATHROOM */}
        <FormField /> {/* stayImage */}
        <FormField /> {/* userId */}
        <button type="submit" disable={loading}>
          {loading ? (
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          ) : (
            "Cadastrar"
          )}
        </button>
        {error ? <ErrorAlert>{error}</ErrorAlert> : null}
      </form>
    </>
  );
}
