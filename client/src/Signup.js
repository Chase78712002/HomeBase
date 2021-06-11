import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";

function Signup(props) {
  const [state, setState] = useState({
    username: "",
    email: "",
    password: "",
    password_confirmation: "",
    errors: "",
  });

  const handleChange = (event) => {
    setState(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { username, email, password, password_confirmation } = state;
    let user = {
      username: username,
      email: email,
      password: password,
      password_confirmation: password_confirmation,
    };

    axios
      .post("/login", { user }, { withCredentials: true })
      .then((response) => {
        if (response.data.logged_in) {
          props.handleLogin(response.data);
          <Redirect to="/" />;
        } else {
          setState({
            errors: response.data.errors,
          });
        }
      })
      .catch((error) => console.log("api errors:", error));
  };

  const handleErrors = () => {
    return (
      <div>
        <ul>
          {state.errors.map((error) => {
            return <li key={error}>{error}</li>;
          })}
        </ul>
      </div>
    );
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="username"
          type="text"
          name="username"
          value={state.username}
          onChange={handleChange}
        />
        <input
          placeholder="email"
          type="text"
          name="email"
          value={state.email}
          onChange={handleChange}
        />
        <input
          placeholder="password"
          type="password"
          name="password"
          value={state.password}
          onChange={handleChange}
        />
        <input
          placeholder="password confirmation"
          type="password"
          name="password_confirmation"
          value={state.password_confirmation}
          onChange={handleChange}
        />

        <button placeholder="submit" type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
}
export default Signup;
