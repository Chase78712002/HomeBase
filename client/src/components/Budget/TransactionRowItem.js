import { TableCell, TableRow, TableBody } from '@material-ui/core';

export default function TransactionRowItem( { transactions }) {
  return (
    <TableBody>
      {transactions.map((transaction) => (
        <TableRow key={transaction.id}>
          <TableCell component="th" scope="row" colspan="2">
            {transaction.description}
          </TableCell>
          <TableCell colspan="2">{transaction.date}</TableCell>
          <TableCell align="right">${transaction.amount}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  )
}