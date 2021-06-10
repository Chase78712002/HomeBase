import { 
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  CircularProgress,
} from '@material-ui/core';

const useStyle = makeStyles({
  table: {
    minWidth: 650,
    marginTop: '20px'
  },
  progress: {
    color: '#679436'
  },
});

export default function BudgetTable({categories}) {
  const classes = useStyle();

  if (categories.length === 0) {
    return (
      <div>
        <CircularProgress className={classes.progress} />
      </div>
    )
  }

  const totalCosts = (value) => {
    return categories.map((category => category[value])).reduce((sum, i) => sum + i, 0);
  };

  // variables for table totals
  const totalEstimate = totalCosts('estimate_amount');
  const totalActual = totalCosts('actual_amount');
  const totalVariance = totalEstimate - totalActual;

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="budget table">
        <TableHead>
          <TableRow>
            <TableCell>Category</TableCell>
            <TableCell align="right">Estimate</TableCell>
            <TableCell align="right">Actual</TableCell>
            <TableCell align="right">Variance</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {categories.map((category) => (
            <TableRow key={category.id}>
              <TableCell component="th" scope="row">
                {category.description}
              </TableCell>
              <TableCell align="right">${category.estimate_amount}</TableCell>
              <TableCell align="right">${category.actual_amount}</TableCell>
              <TableCell align="right">${category.estimate_amount - category.actual_amount}</TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell><strong>TOTALS:</strong></TableCell>
            <TableCell align="right">${totalEstimate}</TableCell>
            <TableCell align="right">${totalActual}</TableCell>
            <TableCell align="right">${totalVariance}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  )
}
