// currency formatter
import NumberFormat from 'react-number-format';

// @material-ui imports
import { 
  makeStyles, LinearProgress, Paper,
  TableContainer, Table, TableHead, TableBody, TableRow, TableCell,
} from '@material-ui/core';

// app imports
import BudgetListItem from './BudgetListItem';

const useStyle = makeStyles((theme) => ({
  table: {
    minWidth: 650,
    marginTop: '20px'
  },
  footer: {
    backgroundColor: theme.palette.background.main,
  }
}));

export default function BudgetList({ categories, transactions }) {
  const classes = useStyle();
  
  if (categories.length === 0 || transactions.length === 0) {
    return (
      <div>
        <LinearProgress color="secondary" />
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
            <TableCell>CATEGORY</TableCell>
            <TableCell align="right">ESTIMATE</TableCell>
            <TableCell align="right">ACTUAL</TableCell>
            <TableCell align="right">VARIANCE</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {categories.map((category) => (
          <BudgetListItem key={category.id} category={category} transactions={transactions}/>
          ))}
          <TableRow>
            <TableCell className={classes.footer} ><strong>TOTAL:</strong></TableCell>
            <TableCell className={classes.footer} align="right"><strong><NumberFormat value={totalEstimate} displayType={'text'} thousandSeparator={true} prefix={'$'} /></strong></TableCell>
            <TableCell className={classes.footer} align="right"><strong><NumberFormat value={totalActual} displayType={'text'} thousandSeparator={true} prefix={'$'} /></strong></TableCell>
            <TableCell className={classes.footer} align="right"><strong><NumberFormat value={totalVariance} displayType={'text'} thousandSeparator={true} prefix={'$'} /></strong></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
