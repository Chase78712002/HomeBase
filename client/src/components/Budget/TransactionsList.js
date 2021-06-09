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
  },
  heading: {
    marginTop: 25,
    color: '#679436'
  }
})

export default function TransactionsList({transactions}) {
  const classes = useStyle();
  
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="transactions table">
        <TableHead>
          <TableRow>
            <TableCell>Description</TableCell>
            <TableCell align="right">Amount</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Category</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {transactions.map((transaction) => (
            <TableRow key={transaction.id}>
              <TableCell component="th" scope="row">
                {transaction.description}
              </TableCell>
              <TableCell align="right">${transaction.amount}</TableCell>
              <TableCell align="right">{transaction.date}</TableCell>
              <TableCell align="right">{transaction.budget_category_id}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}