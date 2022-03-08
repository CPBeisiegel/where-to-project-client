import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../apis/api";
import { Container } from "react-bootstrap";
import { FormField } from "../../components/Form";
import { ButtonGlobal } from "../../components/Button";
import { ErrorAlert } from "../../components/ErrorAlert";

function Signup(props) {
  const [state, setState] = useState({
    userName: "",
    password: "",
    email: "",
    userPhone: "",
  });
  const [errors, setErrors] = useState({
    userName: null,
    email: null,
    password: null,
    userPhone: null,
  });
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  function handleChange(event) {
    setState({
      ...state,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (!(state.password === state.confirmPassword)) {
      setError("Senha e confirmação não são iguais.");
      return;
    }

    try {
      await api.post("/users/signup", state);
      setErrors({ userName: "", password: "", email: "", userPhone: "" });
      navigate("/login");
    } catch (err) {
      if (err.response) {
        console.error(err.response);
        return setErrors({ ...err.response.data.errors });
      }

      console.error(err);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Container>
        <h1 style={{ textAlign: "center", marginTop: "30px" }}>Cadastre-se</h1>

        <div style={{ marginTop: "30px" }}>
          <FormField
            type="text"
            label="Nome Completo"
            id="signupFormName"
            name="userName"
            onChange={handleChange}
            value={state.userName}
            required={true}
            error={errors.userName}
            placeholder="Nome completo"
          />
        </div>

        <div style={{ marginTop: "30px" }}>
          <FormField
            type="email"
            label="E-mail"
            id="signupFormEmaill"
            name="email"
            onChange={handleChange}
            value={state.email}
            required={true}
            error={errors.email}
            placeholder="Digite seu e-mail"
          />
        </div>

        <div style={{ marginTop: "30px" }}>
          <FormField
            type="text"
            label="Telefone"
            id="signupFormPhone"
            name="userPhone"
            onChange={handleChange}
            value={state.userPhone}
            required={true}
            error={errors.userPhone}
            placeholder="Apenas números"
          />
        </div>

        {/*  <div>
          <label htmlFor="signupFormPassword">Password</label>
          <input
            type="password"
            name="password"
            id="signupFormPassword"
            value={state.password}
            error={errors.password}
            onChange={handleChange}
          />
        </div> */}

        <div style={{ marginTop: "15px" }}>
          <FormField
            type="password"
            label="Senha (Contendo ao menos 8 caracteres letra maiúscula, minúsculas, número e caracter especial) "
            id="signupFormPassword"
            required={true}
            name="password"
            value={state.password}
            onChange={handleChange}
            pattern="^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$"
            error={errors.password}
            placeholder="Digite sua senha"
          />
        </div>

        <div style={{ marginTop: "15px" }}>
          <FormField
            type="password"
            label="Confirme sua senha"
            required={true}
            name="confirmPassword"
            value={state.confirmPassword}
            onChange={handleChange}
            pattern="^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$"
            error={errors.password}
            placeholder="Digite sua senha novamente"
          />
        </div>

        <div>
          <div style={{ marginTop: "15px", marginBottom: "15px" }}>
            <ButtonGlobal type="submit">Cadastrar</ButtonGlobal>
          </div>
          <div style={{ marginTop: "15px", marginBottom: "15px" }}>
            {error ? <ErrorAlert>{error}</ErrorAlert> : null}
          </div>
        </div>
      </Container>
    </form>
  );
}

export default Signup;
