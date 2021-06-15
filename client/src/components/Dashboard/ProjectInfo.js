// @material-ui imports
import { Typography } from "@material-ui/core";

export default function ProjectInfo({ projectsInfo }) {
  return (
    <div>
      <Typography variant="h5" component="h2" color="secondary">
        Project:
      </Typography>
      <Typography variant="body1" component="h3" color="primary">
        {projectsInfo.name}
      </Typography>
      <Typography variant="h5" component="h2" color="secondary">
        Client Name:{" "}
      </Typography>
      <Typography variant="body1" component="h3" color="primary">
        {`${projectsInfo.client.first_name} ${projectsInfo.client.last_name}`}
      </Typography>
      <Typography variant="body1" component="p"></Typography>
      <Typography variant="h5" component="h2" color="secondary">
        Address:
      </Typography>
      <Typography variant="body1" component="h3" color="primary">
        {projectsInfo.address}
      </Typography>
      <br />
      <br />
      <img src={`${projectsInfo.image}`} width="70%"></img>
    </div>
  );
}
