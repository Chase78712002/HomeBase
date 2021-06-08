import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';



const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: 'none',
  },
}));

export default function UploadButtons() {
  const classes = useStyles();


  const file_details = (event) => {
    // this console.log the file details.
    console.log(event.target.files);

  }

  return (
    <div className={classes.root}>
      <input
        accept="image/*, video/*, .pdf"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
        onChange={e => file_details(e)}
      />
      <label htmlFor="contained-button-file">
        <Button 
        variant="contained" 
        color="primary" 
        component="span" 
        size="large"
        startIcon={<CloudUploadIcon />}
        >
          Upload
        </Button>
      </label>
      
    </div>
  );
}
