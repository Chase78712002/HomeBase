import React, { useState } from "react";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";

function Login(props) {
  const [state, setState] = useState({
    username: "",
    email: "",
    password: "",
    errors: "",
  });

  const handleChange = (event) => {
    setState(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { username, email, password } = state;
    let user = {
      username: username,
      email: email,
      password: password,
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
      <h1>Log In</h1>
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
        <button placeholder="submit" type="submit">
          Log In
        </button>
        <div>
          or <Link to="/signup">sign up</Link>
        </div>
      </form>
    </div>
  );
}
export default Login;
