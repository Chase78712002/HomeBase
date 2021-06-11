import React, { useState } from "react";
import axios from "axios";

function Signup() {
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
