import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import ProjectItem from "./ProjectItem";
import axios from 'axios';


export default function Home() {
  const [projectData, setProjectData] = useState([]);

  useEffect(() => {
    axios.get('/api/projects')
          .then(res => {
            setProjectData(prev => res.data)
          })
  },[])
  return (
    <Grid container direction="row" spacing={4}>
      {projectData.map((projectObj) => {
        return (
            <Grid item xs={12} sm={6} md={4} key={projectObj.id}>
              <ProjectItem {...projectObj}  />
            </Grid>
        );
      })}
    </Grid>
  );
}
