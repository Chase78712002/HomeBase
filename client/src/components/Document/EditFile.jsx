import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';
import useContext from 'react';



const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
    
  },
  root: {
    display: "flex",
  }
}));



export default function EditFile(props) {
  const classes = useStyles();
  const {title, category, editTitle, editCategory, data} = props
  
   
  return (
    <div className={classes.root}>
      <FormControl className={classes.margin}>
        <InputLabel htmlFor="demo-customized-textbox">File Name</InputLabel>
        <BootstrapInput value={title} onChange={event => editTitle(event.target.value)} id="demo-customized-textbox"  />
      </FormControl>
      
      <FormControl className={classes.margin}>
        <InputLabel id="file_category">Category</InputLabel>
        <NativeSelect
          id="demo-customized-select-native"
          value={category}
          onChange={event => editCategory(event.target.value)}
          input={<BootstrapInput  />}
        >
          {data.map(file => {
            console.log(file)
            return (
              <option value={file.category_type}>{file.category_type}</option>
            )
          })}
          
        </NativeSelect>
      </FormControl>
    </div>
  );
}