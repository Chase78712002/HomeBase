import { makeStyles, Typography } from '@material-ui/core';

import BudgetTable from './Budget/BudgetTable';

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
    description: 'Base square feet',
    estimate_amount: 35000000
  },
  {
    id: 2,
    description: 'Change orders',
    estimate_amount: 10000000
  },
  {
    id: 3,
    description: 'Window coverings',
    estimate_amount: 300000
  },
  {
    id: 4,
    description: 'Landscaping',
    estimate_amount: 1000000
  }
];

const transactions = [
  {
    id: 1,
    description: 'Payment',
    amount: 15000000,
    date: 'April 25, 2021',
    budget_category_id: 1
  },
  {
    id: 2,
    description: 'Stainless steel faucet',
    amount: 50000,
    date: 'May 15, 2021',
    budget_category_id: 2
  },
  {
    id: 3,
    description: 'Landscaping consultation',
    amount: 200000,
    date: 'June 4, 2021',
    budget_category_id: 4
  }
];

export default function Budget() {
  const classes = useStyle();

  return (
    <section className="content">
      <Typography className={classes.header}>Budget</Typography>

      <Typography className={classes.heading} variant="h5">Budget</Typography>
      <BudgetTable categories={categories} />
    </section>
  )
}
