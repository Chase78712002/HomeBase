import { useEffect, useState } from "react";
import axios from "axios";

import {
  makeStyles,
  Typography,
  Box,
  Divider,
  Card,
  CardHeader,
  CardContent,
} from "@material-ui/core";

import BudgetTable from "./Budget/BudgetTable";
import TransactionsList from "./Budget/TransactionsList";
import NewCategory from "./Budget/NewCategory";
import NewTransaction from "./Budget/NewTransaction";

import "./App.scss";

const useStyle = makeStyles({
  container: {
    display: "flex",
    "& > *": {
      padding: 10,
      flex: 1,
    },
  },
  header: {
    color: "#05668d",
    fontSize: 30,
    margin: "10px 0",
  },
  heading: {
    marginTop: 25,
    color: "#679436",
  },
  grid: {
    "& > *": {
      margin: "10px",
    },
  },
  divider: {
    margin: "20px 0",
  },
  root: {
    flexGrow: 1,
  },
  card: {
    margin: 0,
  },
});

// const categoryData = [
//   {
//     id: 1,
//     description: 'Construction costs',
//     estimate_amount: 350000,
//     actual_amount: 6250
//   },
//   {
//     id: 2,
//     description: 'Change orders',
//     estimate_amount: 100000,
//     actual_amount: 500
//   },
//   {
//     id: 3,
//     description: 'Appliances',
//     estimate_amount: 3000,
//     actual_amount: 1500
//   },
//   {
//     id: 4,
//     description: 'Misc',
//     estimate_amount: 10000,
//     actual_amount: 0
//   }
// ];

// const transactionData = [
//   {
//     id: 1,
//     description: 'Excavation and backfill',
//     amount: 6250,
//     date: '2021-04-25',
//     budget_category_id: 1
//   },
//   {
//     id: 2,
//     description: 'Stainless steel faucet',
//     amount: 500,
//     date: '2021-05-15',
//     budget_category_id: 2
//   },
//   {
//     id: 3,
//     description: 'Bar fridge',
//     amount: 1500,
//     date: '2021-06-04',
//     budget_category_id: 3
//   }
// ]

export default function Budget() {
  const classes = useStyle();

  const [state, setState] = useState({
    categories: [],
    transactions: [],
  });

  // fetch data from database
  useEffect(() => {
    Promise.all([
      axios.get("/api/budget_categories"),
      axios.get("/api/transaction_bills"),
    ])
      .then((all) => {
        setState((prev) => ({
          ...prev,
          categories: all[0].data,
          transactions: all[1].data,
        }));
      })
      .catch((error) => console.log(error));
  }, []);

  // add a new budget category
  const addCategory = (category) => {
    return axios
      .post("/api/budget_categories", category)
      .then((response) => {
        const newCategories = [...state.categories, response.data];

        setState((prev) => ({
          ...prev,
          categories: newCategories,
        }));
      })
      .catch((error) => console.log(error));
  };

  // add a new transaction
  const addTransaction = (transaction) => {
    return axios
      .post("/api/transaction_bills", transaction)
      .then((response) => {
        const newTransactions = [...state.transactions, response.data];
        setState((prev) => ({
          ...prev,
          transactions: newTransactions,
        }));
      })
      .catch((error) => console.log(error));
  };

  // update actual_amount of a specific budget_category
  const updateActual = (id, amount) => {
    const category = state.categories.find((x) => x.id === id);
    const newActual = Number(category.actual_amount) + Number(amount);

    const updatedCategory = {
      ...category,
      actual_amount: newActual,
    };

    const updateCategories = state.categories.map((category) =>
      category.id === id ? updatedCategory : category
    );

    return axios
      .patch(`/api/budget_categories/${id}`, { actual_amount: newActual })
      .then(() => {
        setState((prev) => ({
          ...prev,
          categories: updateCategories,
        }));
      })
      .catch((error) => console.log(error));
  };

  return (
    <section className="content">
      <Typography className={classes.header}>Budget</Typography>

      <BudgetTable categories={state.categories} />

      <Typography className={classes.heading} variant="h5">
        Transaction history
      </Typography>
      <TransactionsList transactions={state.transactions} />

      <Divider />

      <Box className={classes.container}>
        <Card className={classes.root}>
          <CardHeader
            className={classes.heading}
            title="Add new budget category"
          />
          <CardContent className="card">
            <NewCategory addCategory={addCategory} />
          </CardContent>
        </Card>
        <Card>
          <CardHeader className={classes.heading} title="Add new transaction" />
          <CardContent>
            <NewTransaction
              categories={state.categories}
              addTransaction={addTransaction}
              updateActual={updateActual}
            />
          </CardContent>
        </Card>
      </Box>
    </section>
  );
}
