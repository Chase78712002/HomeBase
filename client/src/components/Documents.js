import { Container, makeStyles } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import "./App.scss";
import DocumentListItem from "./Document/DocumentListItem";
import SearchBar from "./Document/Searchbar";
import UploadButtons from "./Document/Upload";

const theme = createMuiTheme({
  overrides: {
    MuiContainer: {
      root: {
        display: 'flex',
        'justify-content': 'space-between'
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
        <Container maxWidth="lg" disableGutters='true'>
          <SearchBar />
          <UploadButtons />
        </Container>
      </ThemeProvider>

      <DocumentListItem fileName="File #1" />
      <DocumentListItem fileName="File #2"/>
      <DocumentListItem fileName="File #3" />
    </section>
  )
}