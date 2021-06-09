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
  button: {
    background: "#427aa1",
    color: "#fff",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function NewTransaction({ categories, addTransaction }) {
  const classes = useStyle();

  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");

  const resetForm = () => {
    setDescription("");
    setAmount("");
    setCategory("");
    setDate("");
  };

  const newTransaction = () => {
    const transaction = {
      description: description,
      amount: amount,
      date: date,
      budget_category_id: category,
    };

    addTransaction(transaction);

    resetForm();
  };

  return (
    <Box className={classes.container}>
      <form className={classes.container}>
        <FormControl className={classes.formControl}>
          <TextField
            id="date"
            label="Date"
            type="date"
            value={date}
            InputLabelProps={{ shrink: true }}
            onChange={(e) => setDate(e.target.value)}
          />
        </FormControl>
        <FormControl className={classes.formControl}>
          <TextField
            label="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </FormControl>
        <FormControl className={classes.formControl}>
          <TextField
            label="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel id="budget_category">Category</InputLabel>
          <Select
            labelId="budget_category"
            id="budget_category"
            value={category.description}
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
          className={classes.button}
          onClick={newTransaction}
          variant="contained"
        >
          Add new transaction
        </Button>
      </form>
    </Box>
  );
}
