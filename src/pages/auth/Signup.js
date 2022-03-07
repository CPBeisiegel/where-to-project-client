import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../apis/api";

function Signup(props) {
  const [state, setState] = useState({ userName: "", password: "", email: "" });
  const [errors, setErrors] = useState({
    userName: null,
    email: null,
    password: null,
  });

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
      await api.post("/users/signup", state);
      setErrors({ userName: "", password: "", email: "" });
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
      <h1>Signup!</h1>

      <div>
        <label htmlFor="signupFormName">Name</label>
        <input
          type="text"
          name="userName"
          id="signupFormName"
          value={state.userName}
          error={errors.userName}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="signupFormEmail">E-mail Address</label>
        <input
          type="email"
          name="email"
          id="signupFormEmail"
          value={state.email}
          error={errors.email}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="signupFormPassword">Password</label>
        <input
          type="password"
          name="password"
          id="signupFormPassword"
          value={state.password}
          error={errors.password}
          onChange={handleChange}
        />
      </div>

      <div>
        <button type="submit">Signup!</button>

        <Link to="/login">Already have an account? Click here to login.</Link>
      </div>
    </form>
  );
}

export default Signup;
