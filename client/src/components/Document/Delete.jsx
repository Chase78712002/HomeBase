import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import DeleteTwoToneIcon from '@material-ui/icons/DeleteTwoTone';

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default function DeleteButton(props) {
  const classes = useStyles();
  return (
    <IconButton onClick={() => props.delete(props.id)}>
      <DeleteTwoToneIcon color="error" />
    </IconButton>
  );
}
