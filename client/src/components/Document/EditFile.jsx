import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';
import { MenuItem, Select } from '@material-ui/core';



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
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200,
  },
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
      
      <FormControl className={classes.formControl}>
        <InputLabel id="file_category">Category</InputLabel>
        <Select
                labelId="select-categories"
                id="demo-dialog-select"
                value={category}
                onChange={e => editCategory(e.target.value) }
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
                    // onClick={() => setCategoryID(category.id)}
                    >
                      {category.description}
                    </MenuItem>
                  );
                })}
              </Select>
      </FormControl>
    </div>
  );
}