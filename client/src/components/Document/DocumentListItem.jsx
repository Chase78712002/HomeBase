import React, { useState } from "react";
import FolderIcon from "@material-ui/icons/Folder";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import DeleteButton from "./Delete";
import Edit from "./Edit";
import EditFile from "./EditFile"
import SaveButton from "./Save";
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
  const [title, setTitle] = useState(prop.title) 
  const [category, setCategory] = useState(prop.category)


  return (
    <>
      <Grid item md={12}>
        <ListItem alignItems="center">

          <ListItemIcon><FolderIcon /></ListItemIcon>

          {!editMode && (
            <> 
              <ListItemText primary={title} secondary={category} />
              <Edit onClick={() => setEditMode(true)} />  
            </>
          )}
          {editMode && (
            <>
              <EditFile title={title} category={category} editTitle={setTitle} editCategory={setCategory} data={prop.data} />
              <SaveButton onClick={() => setEditMode(false)} /> 
              <DeleteButton />
            </>
          )}
        </ListItem>
      </Grid>
    </>
  );
}
