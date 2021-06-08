import { React, useState } from "react";
import axios from "axios";

import "./App.scss";

export default function Signup() {
  const [userinfo, setUserinfo] = useState({
    email: "",
    password: "",
    password_confirmation: "",
    registrationErrors: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post(
        "/api/builders",
        {
          user: {
            email: userinfo.email,
            password: userinfo.password,
            password_confirmation: userinfo.password_confirmation,
          },
        },
        { withCredentials: true }
      )
      .then((response) => {
        console.log("registration res", response);
      })
      .catch((error) => {
        console.log("registration error", error);
      });
  };

  const handleChange = (event) => {
    event.preventDefault();
    setUserinfo(([event.target.name] = event.target.value));
  };

  return (
    <section className="content">
      <h1>Signup</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={userinfo.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={userinfo.password}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password_confirmation"
          placeholder="Password confirmation"
          value={userinfo.password_confirmation}
          onChange={handleChange}
          required
        />
        <button type="submit">Register</button>
      </form>
    </section>
  );
}
