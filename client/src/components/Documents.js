import { Divider } from "@material-ui/core";
import "./App.scss";
import DocumentListItem from "./Document/DocumentListItem";
import UploadButtons from "./Document/Upload";

export default function Documents() {
  return (
    <section className="content">
      <h1>Documents</h1>
      <UploadButtons />
      <Divider />
      <DocumentListItem number={1} />
      <DocumentListItem number={2}/>
      <DocumentListItem number={3} />
    </section>
  )
}