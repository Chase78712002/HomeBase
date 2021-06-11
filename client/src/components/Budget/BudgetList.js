import { 
  makeStyles, CircularProgress, Paper,
  TableContainer, Table, TableHead, TableBody, TableRow, TableCell,
} from '@material-ui/core';

import BudgetListItem from './BudgetListItem';

const useStyle = makeStyles({
  table: {
    minWidth: 650,
    marginTop: '20px'
  },
  head: {
    color: '#fff',
    backgroundColor: '#427aa1'
  },
  progress: {
    color: '#679436'
  },
});

export default function BudgetList({ categories, transactions }) {
  const classes = useStyle();
  
  if (categories.length === 0 || transactions.length === 0) {
    return (
      <div>
        <CircularProgress className={classes.progress} />
      </div>
    )
  }

  // calculating table totals
  const totalCosts = (value) => {
    return categories.map((category => category[value])).reduce((sum, i) => sum + i, 0);
  };

  const totalEstimate = totalCosts('estimate_amount');
  const totalActual = totalCosts('actual_amount');
  const totalVariance = totalEstimate - totalActual;

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="budget table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.head}>CATEGORY</TableCell>
            <TableCell className={classes.head} align="right">ESTIMATE</TableCell>
            <TableCell className={classes.head} align="right">ACTUAL</TableCell>
            <TableCell className={classes.head} align="right">VARIANCE</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {categories.map((category) => (
          <BudgetListItem key={category.id} category={category} transactions={transactions}/>
          ))}
          <TableRow>
            <TableCell><strong>TOTAL:</strong></TableCell>
            <TableCell align="right"><strong>${totalEstimate}</strong></TableCell>
            <TableCell align="right"><strong>${totalActual}</strong></TableCell>
            <TableCell align="right"><strong>${totalVariance}</strong></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
