import React, { useEffect, useState } from "react";
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles'
import ProjectItem from "./ProjectItem";
import axios from "axios";
import AddNewProject from "./AddNewProject";

const useStyles = makeStyles({
  root: {
    display: "flex",
    'flex-direction': "column",
    alignItems: "flex-end"
  }
})


export default function Home() {
  const classes = useStyles()
  const [projectData, setProjectData] = useState([]);

  useEffect(() => {
    axios.get("/api/projects").then((res) => {
      setProjectData((prev) => res.data);
    });
  }, []);
  return (
    <div className={classes.root}>
      <AddNewProject />
      <Grid container direction="row" spacing={4}>
        {projectData.map((projectObj) => {
          return (
            <Grid item xs={12} sm={4} key={projectObj.id}>
              <ProjectItem {...projectObj} />
            </Grid>
          );
        })}
      </Grid>
      
    </div>
  );
}
