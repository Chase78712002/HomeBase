// @material-ui imports
import { Typography } from "@material-ui/core";

export default function ProjectInfo({ projects }) {
  return (
    <div>
    <Typography variant="h5" component="h2" color="secondary">
      Client name
    </Typography>
    <Typography variant="body2" component="p">
      Address of new home
      <br /><br />
      Image? Avatars of builders and clients associated with this project?
    </Typography>
  </div>
  );
}
