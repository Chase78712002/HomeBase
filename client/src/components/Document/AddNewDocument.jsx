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
    justifyItems: "space-between"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200,
  },
}));

export default function AddNewDocument(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [category, setCategory] = useState("");
  const [path, setPath] = useState();
  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handlePath = (path) => {
    setPath(path);
  }

  useEffect(() => {
    if (path) {

      console.log(`this is in AddNewDocument: ${path}`);
    }
  },[path])

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
      >
        <DialogTitle>Fill the form</DialogTitle>
        <DialogContent>
          <form className={classes.container}>
            <FormControl className={classes.formControl}>
              <InputLabel id="file-name">File Name</InputLabel>
              <Input />
            </FormControl>

            <FormControl className={classes.formControl}>
              <InputLabel id="select-categories">Category</InputLabel>
              <Select
                labelId="select-categories"
                id="demo-dialog-select"
                value={category}
                onChange={handleChange}
                // input={<Input />}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {props.data.map((file) => {
                  return (
                    <MenuItem value={file.category_type}>
                      {file.category_type}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </form>
        </DialogContent>
          <UploadButtons sendToParent={handlePath}/>
         
          
        

        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
