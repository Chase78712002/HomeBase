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
  const [state, setState] = useState({
    documents: [],
    categories: []
  })

  const deleteFile = (id) => {
    return axios.delete(`/api/documents/${id}`)
                .then(() => {
                  console.log(`state.doc : ${state.documents[0].title}`)
                  const newDoc = state.documents.filter(document => document.id !== id)
                  setState(prev => ({...prev, documents: newDoc}))
                })
                .catch(err => console.log(`Delete file error: ${err}`))
  }

  const saveFile = (fileName, category, path, category_id, project_id, handleClose) => {
    const file = {
      title: fileName,
      category_type: category,
      path: path,
      document_category_id: category_id,
      project_id: project_id
    }
    handleClose()
    return axios.post('/api/documents', file)
                .then(res => {
                  console.log('save post res: ',res.data)
                  const newDoc = [...state.documents, res.data]
                  setState(prev => ({
                    ...prev, documents: newDoc
                  }))

                })
                .catch(err => console.log(`Save file post Error: ${err}`))
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
                .catch(err => console.log(`Save file post Error: ${err}`))
  }

  useEffect(()=> {
    Promise.all([
      axios.get("/api/documents"),
      axios.get("/api/document_categories")
    ]).then(all => {
      console.log('request success! this is the document data: ',all[0].data)
      console.log('request success! this is the category data: ',all[1].data)
      setState(prev => ({
        ...prev,
        documents: all[0].data,
        categories: all[1].data
      }))  
    })
  },[]);
  return (
    <section className="content">
      <h1>Documents</h1>

      <ThemeProvider theme={theme}>
        <Container maxWidth="lg" disableGutters={true}>
          {/* <SearchBar /> */}
          <AddNewDocument categories={state.categories} onSave={saveFile} />
        </Container>
      </ThemeProvider>
      
      <DocumentList data={state.documents} categories={state.categories} onEdit={editFile} onDelete={deleteFile} />
      
    </section>
  );
}
