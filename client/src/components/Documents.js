import { Container } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { useEffect, useState } from "react";
import "./App.scss";
import AddNewDocument from "./Document/AddNewDocument";
import DocumentList from "./Document/DocumentList";
import SearchBar from "./Document/Searchbar";
import axios from 'axios';


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
  const [documents, setDocuments] = useState([])

  const deleteFile = (id) => {
    return axios.delete(`/api/documents/${id}`)
                .then(() => {
                  setDocuments(documents.filter(document => document.id !== id))
                })
  }


  useEffect(()=> {
    axios.get("/api/documents")
      .then(res => {
        // console.log('request success! here is the response: ',res.data)
        setDocuments(res.data)
      })
  },[]);
  return (
    <section className="content">
      <h1>Documents</h1>

      <ThemeProvider theme={theme}>
        <Container maxWidth="lg" disableGutters={true}>
          <SearchBar />
          <AddNewDocument data={documents} />
        </Container>
      </ThemeProvider>
      
      <DocumentList data={documents} delete={deleteFile} />
      
    </section>
  );
}
