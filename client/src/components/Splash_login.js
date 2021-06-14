import React from "react";
import "./Splash_login.scss";
import Tilt from 'react-tilt'
export default function SplashLogin(props) {
  return (
    
      <Tilt>
    <div className="wrapper">
      <h1>Login Form</h1>
      <form action="">
        <input type="text" name="username" placeholder="Enter Username" />
        <input type="password" name="password" placeholder="Enter Password" />
        <input type="submit" value="Login" />
        <a href="#">Forget Password ?</a>
      </form>
    </div>
    </Tilt>
  );
}
