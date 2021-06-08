import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  icon: {
    color:'#3e51b5'
  }
}));

export default function DeleteButton() {
  const classes = useStyles();

  return (
    <IconButton className={classes.icon}>
      <EditIcon />
    </IconButton>
  );
}