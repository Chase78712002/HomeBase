import { useState } from 'react';
import { makeStyles, Typography } from '@material-ui/core';

import BudgetTable from './Budget/BudgetTable';
import TransactionsList from './Budget/TransactionsList';
import NewTransaction from './Budget/NewTransaction';

import './App.scss';

const useStyle = makeStyles({
  header: {
    color: '#05668d',
    fontSize: 30,
    margin: '10px 0'
  },
  heading: {
    marginTop: 25,
    color: '#679436'
  }
});

const categories = [
  {
    id: 1,
    description: 'Construction costs',
    estimate_amount: 350000
  },
  {
    id: 2,
    description: 'Change orders',
    estimate_amount: 100000
  },
  {
    id: 3,
    description: 'Appliances',
    estimate_amount: 3000
  },
  {
    id: 4,
    description: 'Landscaping',
    estimate_amount: 10000
  },
  {
    id: 5,
    description: 'Misc',
    estimate_amount: 10000
  }
];

export default function Budget() {
  const classes = useStyle();

  const [transactions, setTransaction] = useState([
    {
      id: 1,
      description: 'Excavation and backfill',
      amount: 6250,
      date: '2021-04-25',
      budget_category_id: 1
    },
    {
      id: 2,
      description: 'Stainless steel faucet',
      amount: 500,
      date: '2021-05-15',
      budget_category_id: 2
    },
    {
      id: 3,
      description: 'Landscaping consultation',
      amount: 2000,
      date: '2021-06-04',
      budget_category_id: 4
    }
  ]);

  const addTransaction = transaction => {
    setTransaction(transactions => [...transactions, transaction]);
  };

  return (
    <section className="content">
      <Typography className={classes.header}>Budget</Typography>

      <Typography className={classes.heading} variant="h5">Budget</Typography>
      <BudgetTable categories={categories} />

      <Typography className={classes.heading} variant="h5">Transaction history</Typography>
      <TransactionsList transactions={transactions} />

      <Typography className={classes.heading} variant="h5">Add a new transaction</Typography>
      <NewTransaction categories={categories} addTransaction={addTransaction}/>
    </section>
  )
}
