import "./App.scss";
import UploadButtons from "./Document/Upload";

export default function Documents() {
  return (
    <section className="content">
      <h1>Documents</h1>
      <p>This is where the table of documents will go.</p>
      <UploadButtons />
    </section>
  )
}