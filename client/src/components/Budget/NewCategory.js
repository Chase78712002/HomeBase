import { useState } from 'react';
import { makeStyles, Box, TextField, Button, FormControl } from '@material-ui/core';

const useStyle = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    '& > *': {
      marginTop: 25 
    }
  },
  button: {
    background: '#427aa1',
    color: '#fff'
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function NewCategory({ addCategory }) {
  const classes = useStyle();

  const [description, setDescription] = useState('');
  const [estimate, setEstimate] = useState();

  const newCategory = () => {
    const budget_category = {
      description: description, 
      estimate_amount: estimate,
      actual_amount: 0
    }

    addCategory(budget_category);
  }
  
  return (
    <Box className={classes.container}>
      <form className={classes.container}>
        <FormControl className={classes.formControl}>
          <TextField label="Catgory name" onChange={(e) => setDescription(e.target.value)} />
        </FormControl>
        <FormControl className={classes.formControl}>
          <TextField type="number" label="Budget estimate amount" onChange={(e) => setEstimate(e.target.value)}/>
        </FormControl>
        <Button className={classes.button} onClick={newCategory} variant="contained">Add new category</Button>
      </form>
    </Box>
  )
}
