import { Toolbar } from "@material-ui/core";

import "./App.scss";

export default function Title({ title }) {
  return (
    <header>
      <Toolbar />

      <h1>{title}</h1>
      
    </header>
  )
}
