import React, { useState } from "react";
import DescriptionTwoToneIcon from '@material-ui/icons/DescriptionTwoTone';
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

export default function DocumentListItem(props) {
  const classes = useStyles();
  const [editMode, setEditMode] = useState(false)
  const [title, setTitle] = useState(props.title) 
  const [category, setCategory] = useState(props.category)

  return (
    <>
      <Grid item md={12}>
        <ListItem alignItems="center">

          <ListItemIcon><DescriptionTwoToneIcon /></ListItemIcon>

          {!editMode && (
            <> 
              <ListItemText primary={title} secondary={category} />
              <Edit onClick={() => setEditMode(true)} />  
            </>
          )}
          {editMode && (
            <>
              <EditFile title={title} category={category} editTitle={setTitle} editCategory={setCategory} data={props.data} categories={props.categories} />
              <SaveButton onClick={()=>props.onEdit(props.id, title, category, setEditMode)} /> 
              <DeleteButton delete={props.delete} id={props.id} />
            </>
          )}
        </ListItem>
      </Grid>
    </>
  );
}
