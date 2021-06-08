import React, { useState } from "react";
import FolderIcon from "@material-ui/icons/Folder";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import DeleteButton from "./Delete";
import Edit from "./Edit";
import SaveButton from "./Save";
import { Link } from "react-router-dom";
import { Input } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}));

export default function DocumentListItem(prop) {
  const classes = useStyles();
  const [editMode, setEditMode] = useState(false)
  const [fileName, setFileName] = useState(prop.fileName) 

  return (
    <>
      <Grid item md={12}>
        <ListItem alignItems="center">

          <ListItemIcon><FolderIcon /></ListItemIcon>

          {!editMode && (
            <> 
              <ListItemText primary={fileName} />
              <Edit onClick={() => setEditMode(true)} />  
            </>
          )}
          {editMode && (
            <>
              <Input value={fileName} onChange={event => setFileName(event.target.value)} className={classes.root} />
              <SaveButton onClick={() => setEditMode(false)} /> 
              <DeleteButton />
            </>
          )}
        </ListItem>
      </Grid>
    </>
  );
}
