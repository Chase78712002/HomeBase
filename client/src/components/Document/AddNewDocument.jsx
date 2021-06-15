import React, { useState } from "react";
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
import AddCircleOutlineTwoToneIcon from '@material-ui/icons/AddCircleOutlineTwoTone';
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

export default function AddNewDocument(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const [fileName, setFileName] = useState();
  const [category, setCategory] = useState();
  const [path, setPath] = useState();
  const [projectId, setProjectId] = useState(1);
  const [categoryID, setCategoryID] = useState();
  
  console.log(`error message in addnewDoc: ${JSON.stringify(props.errorMsg)}`)
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setFileName("")
    setCategory("")
    setPath("")
    setOpen(false);
  };

  const handlePath = (path) => {
    setPath(path);
  };

  

  

  return (
    <div>
      {/* <IconButton onClick={handleClickOpen} className={classes.icon}>
        <PostAddRoundedIcon fontSize="large" />
      </IconButton> */}
      <Button
        variant="contained"
        onClick={handleClickOpen}
      >
        <AddCircleOutlineTwoToneIcon />&nbsp;
        New document
      </Button>

      <Dialog
        disableBackdropClick
        disableEscapeKeyDown
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>Add a new document</DialogTitle>
        <DialogContent>
          <form className={classes.container}>
            <FormControl className={classes.formControl}>
              <InputLabel id="file-name" >Document title</InputLabel>
              <InputLabel id="file-name-error" error={true} >title is required</InputLabel>
              <Input value={fileName} onChange={event => setFileName(event.target.value)} />
            </FormControl>

            <FormControl className={classes.formControl}>
              <InputLabel id="select-categories">Category</InputLabel>
              <Select
                labelId="select-categories"
                id="demo-dialog-select"
                value={category}
                onChange={e => setCategory(e.target.value) }
                // input={<Input />}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {props.categories.map((category) => {
                  return (
                    <MenuItem 
                    key={category.id}
                    value={category.description}
                    onClick={() => setCategoryID(category.id)}
                    >
                      {category.description}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </form>
        </DialogContent>

        <UploadButtons sendToParent={handlePath} />

        <DialogActions>
          <Button onClick={handleClose} variant="contained">
            Cancel
          </Button>
          <Button onClick={() => props.onSave(fileName,category, path, categoryID ,projectId, handleClose)} variant="contained" color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
