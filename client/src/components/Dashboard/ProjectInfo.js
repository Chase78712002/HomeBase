// @material-ui imports
import { Typography, CardMedia, Avatar } from "@material-ui/core";

export default function ProjectInfo({ projectsInfo }) {
  return (
    <div>
      <Typography variant="h5" component="h2" color="secondary">
        {projectsInfo.name}
      </Typography>
      <br />
      <CardMedia
          style={{height: "140px"}}
          image={projectsInfo.image}
          title="House"
      />
      <br />
      <Typography color="textSecondary">
        <strong>Client:</strong><br />
        {projectsInfo.client.first_name} {projectsInfo.client.last_name}<br />
        {projectsInfo.address}
      </Typography>
      <br />
      <Avatar
        src={projectsInfo.avatarSrc}
        alt={`${projectsInfo.client.first_name} ${projectsInfo.client.last_name}`}
       />

    </div>
  );
}
