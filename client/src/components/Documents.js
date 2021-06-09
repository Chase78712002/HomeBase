import { Container } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { useEffect, useState } from "react";
import "./App.scss";
import AddNewDocument from "./Document/AddNewDocument";
import DocumentList from "./Document/DocumentList";
import SearchBar from "./Document/Searchbar";
import axios from 'axios';
const docData = [
  {
    id: 1,
    title: "Random small Contract",
    category_type: "Contract444",
    path: "user/dmar/documents",
    project_id: 1,
  },
  {
    id: 2,
    title: "whatever Floor Plan Option #2",
    category_type: "Floor Plan222",
    path: "user/dmar/documents/floorplans",
    project_id: 1,
  },
  {
    id: 3,
    title: 'BIG small Window Options',
    category_type: 'Supplementary123',
    path: 'user/dmar/documents/windows',
    project_id: 2
  }
];


const theme = createMuiTheme({
  overrides: {
    MuiContainer: {
      root: {
        display: "flex",
        "justify-content": "space-between",
        alignItems:"center"
      },
    },
  },
});

export default function Documents() {
  // const classes = useStyles
  const [state, setState] = useState([])

  useEffect(()=> {
    axios.get("/api/documents")
      .then(res => {
        // console.log('request success! here is the response: ',res.data)
        setState(res.data)
      })
  },[]);
  return (
    <section className="content">
      <h1>Documents</h1>

      <ThemeProvider theme={theme}>
        <Container maxWidth="lg" disableGutters={true}>
          <SearchBar />
          <AddNewDocument data={state} />
        </Container>
      </ThemeProvider>
      
      <DocumentList data={state} />
      
    </section>
  );
}
