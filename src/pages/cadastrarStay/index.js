import { FormFild } from "../../components/Form";
import { useState } from "react";
import axios from "axios";

export function cadastrarStay() {
  const [form, setForm] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      setLoading(true);
      const response = await axios.post(
        "http://localhost:4000/api/stays/create-stay",
        form
      );
      console.log(response);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }

  return (
    <>
      <h1>Cadastre uma estadia:</h1>
      <form onSubmit={handleSubmit}>
        <FormFild onChange={handleChange} readOnly={loading} />{" "}
        {/* stayTitle */}
        <FormFild /> {/* stayCountry */}
        <FormFild /> {/* stayCity */}
        <FormFild /> {/* stayType ENUM */}
        <FormFild /> {/* perNight */}
        <FormFild /> {/* description */}
        <FormFild /> {/* stayDetails */}
        <FormFild /> {/* amenities GUESTS BEDROOM BATHROOM */}
        <FormFild /> {/* stayImage */}
        <FormFild /> {/* userId */}
        <button type="submit" disable={loading}>
          {loading ? (
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          ) : (
            "Cadastrar"
          )}
        </button>
      </form>
    </>
  );
}
