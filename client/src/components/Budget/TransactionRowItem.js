import { useState } from 'react';
import { makeStyles, Collapse, Box, Typography, Table, TableHead, TableCell, TableRow, TableBody } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

const useStyle = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});

export default function TransactionRowItem( { category, transactions, setCurrentCategoryId }) {
  const classes = useStyle();
  const [open, setOpen] = useState(false);

  return (
    <>
     <TableRow className={classes.root}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => { setCurrentCategoryId(category.id); setOpen(!open);}}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {category.description}
        </TableCell>
        <TableCell align="right">{category.estimate_amount}</TableCell>
        <TableCell align="right">{category.actual_amount}</TableCell>
        <TableCell align="right">{category.estimate_amount - category.actual_amount}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                History
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Description</TableCell>
                    <TableCell>Date</TableCell>
                    <TableCell align="right">Amount</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {transactions.map((transaction) => (
                    <TableRow key={transaction.id}>
                      <TableCell component="th" scope="row">
                        {transaction.description}
                      </TableCell>
                      <TableCell>{transaction.date}</TableCell>
                      <TableCell align="right">{transaction.amount}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
  </>
  )
}