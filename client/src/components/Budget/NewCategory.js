import { useState } from 'react';
import { makeStyles, Box, Button, FormControl, TextField } from '@material-ui/core';

const useStyle = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    '& > *': {
      marginTop: 25 
    }
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function NewCategory({ addCategory }) {
  const classes = useStyle();

  const [description, setDescription] = useState('');
  const [estimate, setEstimate] = useState('');
  const [errorMsg, setErrorMsg] = useState({});

  const resetForm = () => {
    setDescription("");
    setEstimate("");
    setErrorMsg({});
  };

  const validate = () => {
    let isError = false;
    setErrorMsg({});

    if (!description) {
      isError = true;
      setErrorMsg(prev => ({
        ...prev,
        description: "Please enter a category name"
      }));
    }

    if (!estimate) {
      isError = true;
      setErrorMsg(prev => ({
        ...prev,
        estimate: "Please enter an amount"
      }));
    }

    if (!isError) {
      newCategory();
    }
  }

  const newCategory = () => {
    const budget_category = {
      project_id: 1,
      description: description, 
      estimate_amount: estimate,
      actual_amount: 0
    }

    addCategory(budget_category);

    resetForm();
  }
  
  return (
    <Box className={classes.container}>
      <form className={classes.container}>
        <FormControl className={classes.formControl}>
          <TextField
          required
          error={!!errorMsg.description}
          helperText={errorMsg.description}
          label="Category name"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        </FormControl>
        <FormControl className={classes.formControl}>
          <TextField
            required
            error={!!errorMsg.estimate}
            helperText={errorMsg.estimate}
            type="number"
            label="Budget estimate amount"
            value={estimate}
            onChange={(e) => setEstimate(e.target.value)}
          />
        </FormControl>
        
        <Button
          onClick={validate}
          variant="contained"
          color="secondary"
          // type="submit"
        >
          Add new category
        </Button>
      </form>
    </Box>
  );
}
