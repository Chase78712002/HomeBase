import React from "react";
import "./Splash_login.scss";
import Tilt from "react-tilt";
import { Link, Route } from "react-router-dom";
import App from "./App";

export default function SplashLogin(props) {
  return (
    <Tilt
      className="wrapper"
      options={{
        max: 15,
        reset: true,
        scale: 1.1,
        glare: true,
        maxGlare: 0.5,
        transition: true,
      }}
    >
      <img src="/Images/Logo/HB_Long.png" alt="logo" />
      <form action="">
        <input
          type="text"
          name="username"
          placeholder="Enter Email"
          value="bob@lighthousebuilders.ca"
        />
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value="123456789"
        />
        <Link to="/projects">
          <input type="submit" value="LOGIN" />
        </Link>
        <div className="subtext">
          <a href="#">Forgot password ?</a>
          <a href="#">Create an account</a>
        </div>
      </form>
    </Tilt>
  );
}
