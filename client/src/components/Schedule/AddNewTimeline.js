import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { IconButton } from "@material-ui/core";
import PostAddRoundedIcon from "@material-ui/icons/PostAddRounded";
import UploadButtons from "./Upload";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyItems: "space-between",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200,
  },
}));

export default function AddNewTimeline() {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const [description, setDescription] = useState();
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [projectId, setProjectId] = useState(1);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setDescription("");
    setStartDate("");
    setEndDate("");
    setOpen(false);
  };

  return (
    <div>
      <IconButton onClick={handleClickOpen} className={classes.icon}>
        <PostAddRoundedIcon fontSize="large" />
      </IconButton>

      <Dialog
        disableBackdropClick
        disableEscapeKeyDown
        open={open}
        onClose={handleClose}
      ></Dialog>
      <DialogTitle>Fill the form</DialogTitle>
      <DialogContent>
        <form className={classes.container}>
          <FormControl className={classes.formControl}>
            <InputLabel id="milestone-description">Description</InputLabel>
            <Input
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            />
          </FormControl>
        </form>
      </DialogContent>

      <UploadButtons />
    </div>
  );
}
