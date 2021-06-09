import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  icon: {
    color:'red'
  }
}));

export default function DeleteButton(props) {
  const classes = useStyles();

  return (
    <IconButton onClick={props.delete}className={classes.icon}>
      <DeleteOutlineIcon />
    </IconButton>
  );
}
