// currency formatter
import NumberFormat from 'react-number-format';

// @material-ui imports
import { 
  makeStyles, withStyles, LinearProgress, Paper,
  TableContainer, Table, TableHead, TableBody, TableRow, TableCell,
} from '@material-ui/core';

// app imports
import BudgetListItem from './BudgetListItem';

const useStyle = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  footer: {
    backgroundColor: theme.palette.background.main,
  },
}));

const StyledTableCell = withStyles((theme) => ({
  head: {
    fontSize: 16,
  },
  body: {
    fontSize: 16,
  },
}))(TableCell);

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
    <TableContainer component={Paper} className={classes.root} >
      <Table className={classes.table} aria-label="budget table">
        <TableHead>
          <TableRow>
            <StyledTableCell>CATEGORY</StyledTableCell>
            <StyledTableCell align="right">ESTIMATE</StyledTableCell>
            <StyledTableCell align="right">ACTUAL</StyledTableCell>
            <StyledTableCell align="right">VARIANCE</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {categories.map((category) => (
          <BudgetListItem key={category.id} category={category} transactions={transactions}/>
          ))}
          <TableRow>
            <StyledTableCell className={classes.footer} ><strong>TOTAL:</strong></StyledTableCell>
            <StyledTableCell className={classes.footer} align="right"><strong><NumberFormat value={totalEstimate} displayType={'text'} thousandSeparator={true} prefix={'$'} /></strong></StyledTableCell>
            <StyledTableCell className={classes.footer} align="right"><strong><NumberFormat value={totalActual} displayType={'text'} thousandSeparator={true} prefix={'$'} /></strong></StyledTableCell>
            <StyledTableCell className={classes.footer} align="right"><strong><NumberFormat value={totalVariance} displayType={'text'} thousandSeparator={true} prefix={'$'} /></strong></StyledTableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
