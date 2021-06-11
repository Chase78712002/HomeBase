import React, { useEffect, useState } from "react";
import { Grid, makeStyles } from "@material-ui/core";
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
            <Grid item xs={12} sm={6} md={4} key={projectObj.id}>
              <ProjectItem {...projectObj} />
            </Grid>
          );
        })}
      </Grid>
      
    </div>
  );
}
