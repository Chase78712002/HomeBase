import { 
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from '@material-ui/core';

const useStyle = makeStyles({
  table: {
    minWidth: 650,
    marginTop: '20px'
  }
});

export default function BudgetTable(props) {
  const classes = useStyle();

  const actual = 1000000;

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
          {props.categories.map((category) => (
            <TableRow key={category.id}>
              <TableCell component="th" scope="row">
                {category.description}
              </TableCell>
              <TableCell align="right">${category.estimate_amount}</TableCell>
              <TableCell align="right">${actual}</TableCell>
              <TableCell align="right">${category.estimate_amount - actual}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
