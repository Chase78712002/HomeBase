import { Container, makeStyles } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import "./App.scss";
import DocumentList from "./Document/DocumentList";
import DocumentListItem from "./Document/DocumentListItem";
import SearchBar from "./Document/Searchbar";
import UploadButtons from "./Document/Upload";

const docData = [
  {
    id: 1,
    title: "Big Contract",
    category_type: "Contract",
    path: "user/dmar/documents",
    project_id: 1,
  },
  {
    id: 2,
    title: "Floor Plan Option #2",
    category_type: "Floor Plan",
    path: "user/dmar/documents/floorplans",
    project_id: 1,
  },
  {
    id: 3,
    title: 'Window Options',
    category_type: 'Supplementary',
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
      },
    },
  },
});

export default function Documents() {
  // const classes = useStyles

  return (
    <section className="content">
      <h1>Documents</h1>

      <ThemeProvider theme={theme}>
        <Container maxWidth="lg" disableGutters="true">
          <SearchBar />
          <UploadButtons />
        </Container>
      </ThemeProvider>

      <DocumentList data={docData} />
      
    </section>
  );
}
