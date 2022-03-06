import { FormFild } from "../../components/Form";
import { useState } from "react";
import axios from "axios";

export function cadastrarStay() {
  const [form, setForm] = useState({});
  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:4000/api/stays/create-stay",
        form
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <h1>Cadastre uma estadia:</h1>
      <form onSubmit={handleSubmit}>
        <FormFild onChange={handleChange} /> {/* stayTitle */}
        <FormFild /> {/* stayCountry */}
        <FormFild /> {/* stayCity */}
        <FormFild /> {/* stayType ENUM */}
        <FormFild /> {/* perNight */}
        <FormFild /> {/* description */}
        <FormFild /> {/* stayDetails */}
        <FormFild /> {/* amenities GUESTS BEDROOM BATHROOM */}
        <FormFild /> {/* stayImage */}
        <FormFild /> {/* userId */}
        <button type="submit">Cadastrar</button>
      </form>
    </>
  );
}
