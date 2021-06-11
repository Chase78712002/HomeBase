import { useState, useEffect } from 'react';
import { makeStyles, Collapse, Box, Table, TableHead, TableCell, TableRow, TableBody } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

const useStyle = makeStyles({
  transactions: {
    backgroundColor: '#ebf2fa',
    paddingBottom: 0,
    paddingTop: 0,
    paddingRight: 0
  },
});

export default function BudgetListItem( { category, transactions }) {
  const classes = useStyle();
  
  const [open, setOpen] = useState(false);
  const [currentCategoryId, setCurrentCategoryId] = useState('');
  const [currentCategoryTransactions, setCurrentCategoryTransactions] = useState(transactions);
  
  useEffect(() => {
    const filteredTransactions = transactions.filter(transaction => transaction.budget_category_id === currentCategoryId);
    setCurrentCategoryTransactions(filteredTransactions);
    
  }, [currentCategoryId, transactions]);

  return (
    <>
     <TableRow>
        <TableCell component="th" scope="row">
          <IconButton aria-label="expand row" size="small" onClick={() => { setCurrentCategoryId(category.id); setOpen(!open);}}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
          {category.description}
        </TableCell>
        <TableCell align="right">${category.estimate_amount}</TableCell>
        <TableCell align="right">${category.actual_amount}</TableCell>
        <TableCell align="right">${category.estimate_amount - category.actual_amount}</TableCell>
    </TableRow>
    <TableRow>
      <TableCell className={classes.transactions} colSpan={6}>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <Box margin={1}>
            <Table size="small" aria-label="transactions">
              <TableHead>
                <TableRow>
                  <TableCell colSpan="2">TRANSACTION DETAILS</TableCell>
                  <TableCell>DATE</TableCell>
                  <TableCell align="right">AMOUNT</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {currentCategoryTransactions.map((transaction) => (
                  <TableRow key={transaction.id}>
                    <TableCell component="th" scope="row" colSpan="2">
                      {transaction.description}
                    </TableCell>
                    <TableCell>{transaction.date}</TableCell>
                    <TableCell align="right">${transaction.amount}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Box>
        </Collapse>
      </TableCell>
    </TableRow>
  </>
  );
}