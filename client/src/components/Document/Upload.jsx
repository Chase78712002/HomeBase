import React, { useEffect, useState } from 'react';
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
  button: {
    display: "flex",
    justifyContent: 'space-around',
    alignItems: 'center'
  }
}));

export default function UploadButtons(props) {
  const classes = useStyles();
  const [path, setPath] = useState()

  const file_details = (event) => {
    // this console.log the file details.
    // console.log(event.target.files[0].name)
    setPath(event.target.files[0].name)
    props.sendToParent()
  }

  useEffect(()=> {

    if (path) {
      props.sendToParent(path)
    }
    
  },[path])

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
      <label className={classes.button} htmlFor="contained-button-file">
        <span>{path}</span>
        <Button 
        variant="contained" 
        color="primary" 
        component="span" 
        size="small"
        startIcon={<CloudUploadIcon />}
        >
          Upload
        </Button>
        
      </label>
      
    </div>
  );
}
