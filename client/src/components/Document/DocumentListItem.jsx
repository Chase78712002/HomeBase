import React from "react";
import FolderIcon from "@material-ui/icons/Folder";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import DeleteButton from "./Delete";
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

  return (
    <>
      <Grid item md={12}>
        <ListItem alignItems="flex-start">

          <ListItemIcon><FolderIcon /></ListItemIcon>

          <ListItemText primary={`File # ${prop.number}`} />
          
          <DeleteButton />
        </ListItem>
      </Grid>
    </>
  );
}
