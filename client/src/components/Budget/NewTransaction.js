import { useState } from "react";
import {
  makeStyles,
  Box,
  TextField,
  Button,
  InputLabel,
  FormControl,
  Select,
  MenuItem,
} from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    "& > *": {
      marginTop: 25,
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function NewTransaction({ categories, addTransaction, updateActual }) {
  const classes = useStyle();

  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");
  const [errorMsg, setErrorMsg] = useState({});

  const resetForm = () => {
    setDescription("");
    setAmount("");
    setCategory("");
    setDate("");
    setErrorMsg({});
  };

  const validate = () => {
    let isError = false;
    setErrorMsg({});

    if (!description) {
      isError = true;
      setErrorMsg(prev => ({
        ...prev,
        description: "Please enter a description"
      }));
    }

    if (!amount) {
      isError = true;
      setErrorMsg(prev => ({
        ...prev,
        amount: "Please enter an amount"
      }));
    }

    if (!category) {
      isError = true;
      setErrorMsg(prev => ({
        ...prev,
        category: "Please select a category"
      }));
    }

    if (!date) {
      isError = true;
      setErrorMsg(prev => ({
        ...prev,
        date: "Please select a date"
      }));
    }

    if (!isError) {
      newTransaction();
    }
  }

  const newTransaction = () => {
    const transaction = {
      description: description,
      amount: amount,
      date: date,
      budget_category_id: category,
    };

    addTransaction(transaction);
    updateActual(category, amount);

    resetForm();
  };

  return (
    <Box className={classes.container}>
      <form className={classes.container}>
        <FormControl className={classes.formControl}>
          <TextField
            id="date"
            required
            error={!!errorMsg.date}
            helperText={errorMsg.date}
            type="date"
            label="Date"
            value={date}
            InputLabelProps={{ shrink: true }}
            onChange={(e) => setDate(e.target.value)}
          />
        </FormControl>
        <FormControl className={classes.formControl}>
          <TextField
            required
            error={!!errorMsg.description}
            helperText={errorMsg.description}
            label="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </FormControl>
        <FormControl className={classes.formControl}>
          <TextField
            required
            error={!!errorMsg.amount}
            helperText={errorMsg.amount}
            type="number"
            label="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </FormControl>
        <FormControl className={classes.formControl} error={!!errorMsg.category}>
          <InputLabel id="budget_category">Category</InputLabel>
          <Select
            labelId="budget_category"
            id="budget_category"
            required
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {categories.map((category) => (
              <MenuItem key={category.id} value={category.id}>
                {category.description}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button
          onClick={validate}
          variant="contained"
          color="secondary"
          type="submit"
        >
          Add new transaction
        </Button>
      </form>
    </Box>
  );
}
