import { useEffect, useState } from "react";
import axios from "axios";

// @material-ui imports
import {
  makeStyles, Typography, Grid, Card, Divider } from "@material-ui/core";

  // app imports
import BudgetList from "./BudgetList";
import NewCategory from "./NewCategory";
import NewTransaction from "./NewTransaction";
import Title from "../Title";

import "../App.scss";

const useStyle = makeStyles({
  heading: {
    color: "#05668d",
  },
  divider: {
    margin: "20px 0",
  },
  card: {
    margin: 0,
    padding: "1em",
    backgroundColor: "#ebf2fa"
  },
});

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
      <Title title={"Budget"} />

      <BudgetList categories={state.categories} transactions={state.transactions} />

      <Divider className={classes.divider}/>

      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Card className={classes.card}>
            <Typography variant="h6" className={classes.heading}>
              Add new category
            </Typography>
            <NewCategory addCategory={addCategory} />
          </Card>
        </Grid>

        <Grid item xs={6}>
          <Card className={classes.card}>
            <Typography variant="h6" className={classes.heading}>
              Add new transaction
            </Typography>
            <NewTransaction categories={state.categories} addTransaction={addTransaction} updateActual={updateActual} />
          </Card>
        </Grid>
      </Grid>
    </section>
  );
}
