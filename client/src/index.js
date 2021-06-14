import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      main: "#05668d" // dark blue
    },
    secondary: {
      main: "#679436" // green
    },
    error: {
      main: "#8d0522" // red
    },
    darkBackground: {
      main: "#252218" // black
    },
    lightBackground: {
      main: "#ebf2fa" // pale blue
    },
    background: {
      main: "#f5f5f5" // light grey
    },
    white: {
      main: "#fff" // white
    }
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,

  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
