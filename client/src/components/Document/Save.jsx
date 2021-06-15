import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import SaveTwoToneIcon from '@material-ui/icons/SaveTwoTone';
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default function SaveButton(prop) {
  const classes = useStyles();

  return (
    <IconButton onClick={prop.onClick}>
      <SaveTwoToneIcon color="secondary"/>
    </IconButton>
  );
}