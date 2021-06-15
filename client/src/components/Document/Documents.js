import axios from 'axios';

// @material-ui imports
import { Container } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { useEffect, useState } from "react";

// app imports
import Title from "../Title";
import DocumentList from "./DocumentList";
import AddNewDocument from "./AddNewDocument";
import SearchBar from "./Searchbar";

import "../App.scss";

const theme = createMuiTheme({
  overrides: {
    MuiContainer: {
      root: {
        display: "flex",
        justifyContent: "space-between",
        alignItems:"center"
      },
    },
  },
});

export default function Documents() {
  // const classes = useStyles
  const [state, setState] = useState({
    documents: [],
    categories: [],
    errorMsg: []
  })
  const [searchTerm, setSearchTerm] = useState("");
  
  const deleteFile = (id) => {
    return axios.delete(`/api/documents/${id}`)
                .then(() => {
                  console.log(`state.doc : ${state.documents[0].title}`)
                  const newDoc = state.documents.filter(document => document.id !== id)
                  setState(prev => ({...prev, documents: newDoc}))
                })
                .catch(err => {
                  console.log(`Delete file error: ${err}`)
                })
  }

  const saveFile = (fileName, category, path, category_id, project_id, handleClose) => {
    const file = {
      title: fileName,
      category_type: category,
      path: path,
      document_category_id: category_id,
      project_id: project_id
    }
    
    return axios.post('/api/documents', file)
                .then(res => {
                  console.log('save post res: ',res.data)
                  const newDoc = [...state.documents, res.data]
                  setState(prev => ({
                    ...prev, documents: newDoc
                  }))
                  handleClose()
                })
                .catch(err => {
                  console.log(`Save file create Error: ${err.response.data.error}`)
                  setState(prev => ({
                    ...prev, errorMsg:err.response.data.error
                  }))
                })
  }

  const editFile = (id, fileName, category, setEditMode) => {
    const file = {
      title: fileName,
      category_type: category,
    }
    setEditMode();
    const document = state.documents.find(x => x.id === id)
    const updatedDoc = {...document, file}
    const updateDocuments = state.documents.map(document => document.id === id ? updatedDoc : document)
    return axios.patch(`/api/documents/${id}`, file)
                .then(res => {
                  console.log('edit post res: ',res.data)
                  
                  setState(prev => ({
                    ...prev, documents: updateDocuments
                  }))

                })
                .catch(err => console.log(`Save file Edit Error: ${err}`))
  }

  useEffect(()=> {
    Promise.all([
      axios.get("/api/documents"),
      axios.get("/api/document_categories")
    ]).then(all => {
      setState(prev => ({
        ...prev,
        documents: all[0].data,
        categories: all[1].data
      }))
    })
    .catch(err => console.log(`Axios get request error: ${err.message}`))
  },[]);

  const filteredDoc = state.documents.filter(docObj => {
    if (searchTerm === ""){
      return docObj 
    } else if (docObj.title.toLowerCase().includes(searchTerm.toLowerCase())) {
      return docObj
    }
    return 0;
  })
  return (
    <section className="content">
      <Title title={"Documents"} />

      <ThemeProvider theme={theme}>
        <Container disableGutters={true}>
          <SearchBar setSearchTerm={setSearchTerm} />
          <AddNewDocument categories={state.categories} onSave={saveFile} errorMsg={state.errorMsg}/>
        </Container>
      </ThemeProvider>
      <DocumentList data={filteredDoc} categories={state.categories} onEdit={editFile} onDelete={deleteFile} />
      
    </section>
  );
}
