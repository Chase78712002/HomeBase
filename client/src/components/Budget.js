import { useEffect, useState } from 'react';
import axios from 'axios';

import { makeStyles, Typography } from '@material-ui/core';

import BudgetTable from './Budget/BudgetTable';
import TransactionsList from './Budget/TransactionsList';
import NewCategory from './Budget/NewCategory';
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
    transactions: []
  });

  useEffect(() => {
    Promise
    .all([
      axios.get('/api/budget_categories'),
      axios.get('/api/transaction_bills')
    ])
    .then(all => {
      setState(prev => ({
        ...prev,
        categories: all[0].data,
        transactions: all[1].data,
      }))
    })
    .catch(error => console.log(error));
  }, []);

  const addCategory = category => {
    return axios.post('/api/budget_categories', category)
    .then(() => {
      const newCategories = state.categories.concat(category);
      setState(prev => ({
        ...prev,
        categories: newCategories
      }))
    })
    .catch(error => console.log(error));
  };

  const addTransaction = transaction => {
    return axios.post('/api/transaction_bills', transaction)
    .then(() => { 
      const newTransactions = state.transactions.concat(transaction);
      setState(prev => ({
        ...prev,
        transactions: newTransactions
      }))
    })
    .catch(error => console.log(error));
  };

  return (
    <section className="content">
      <Typography className={classes.header}>Budget</Typography>

      <Typography className={classes.heading} variant="h5">Budget summary</Typography>
      <BudgetTable categories={state.categories} />

      <Typography className={classes.heading} variant="h5">Transaction history</Typography>
      <TransactionsList transactions={state.transactions} />

      <Typography className={classes.heading} variant="h5">Add a new budget category</Typography>
      <NewCategory addCategory={addCategory}/>

      <Typography className={classes.heading} variant="h5">Add a new transaction</Typography>
      <NewTransaction categories={state.categories} addTransaction={addTransaction}/>
    </section>
  )
}
