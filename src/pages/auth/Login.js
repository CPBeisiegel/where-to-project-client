import React, { useState, useContext } from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import api from "../../apis/api";
import { FormField } from "../../components/Form";
import { ButtonGlobal } from "../../components/Button";

import { AuthContext } from "../../contexts/authContext";

function Login(props) {
  const authContext = useContext(AuthContext);

  const [state, setState] = useState({ password: "", email: "" });
  const [errors, setErrors] = useState({
    email: null,
    password: null,
  });
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  function handleChange(event) {
    setState({
      ...state,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      setLoading(true);
      const response = await api.post("/users/login", state);
      console.log(response);

      authContext.setLoggedInUser({ ...response.data });
      console.log(response.token);
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ ...response.data })
      );

      setErrors({ password: "", email: "" });
      navigate("/user-home");
    } catch (err) {
      setLoading(false);
      console.error(err.response);
      setErrors({ ...err.response.data.errors });
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Container>
        <h1 style={{ textAlign: "center", marginTop: "30px" }}>Login</h1>

        <div style={{ marginTop: "30px" }}>
          <FormField
            type="email"
            label="E-mail"
            id="signupFormEmaill"
            name="email"
            onChange={handleChange}
            value={state.email}
            required={true}
            readOnly={loading}
            error={errors.email}
            placeholder="Digite seu e-mail"
          />
          {/*  <label htmlFor="signupFormEmail">E-mail Address</label>
          <input
            type="email"
            name="email"
            id="signupFormEmail"
            value={state.email}
            error={errors.email}
            onChange={handleChange}
          /> */}
        </div>

        <div style={{ marginTop: "15px" }}>
          <FormField
            type="password"
            label="Senha"
            id="signupFormPassword"
            required={true}
            readOnly={loading}
            name="password"
            value={state.password}
            onChange={handleChange}
            pattern="^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$"
            error={errors.password}
            placeholder="Digite sua senha"
          />

          {/* <label htmlFor="signupFormPassword">Password</label>
          <input
            type="password"
            name="password"
            id="signupFormPassword"
            value={state.password}
            error={errors.password}
            onChange={handleChange}
          /> */}
        </div>

        <div style={{ marginTop: "15px" }}>
          <ButtonGlobal type="submit">Entrar</ButtonGlobal>
        </div>
      </Container>
    </form>
  );
}

export default Login;
