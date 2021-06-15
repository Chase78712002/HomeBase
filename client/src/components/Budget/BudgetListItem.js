import { useState, useEffect } from 'react';

// currency formatter
import NumberFormat from 'react-number-format';

// @material-ui imports
import { makeStyles, withStyles, Collapse, Box, Table, TableHead, TableCell, TableRow, TableBody } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

const useStyle = makeStyles((theme) => ({
  transactions: {
    backgroundColor: theme.palette.lightBackground.main,
    padding: 0,
  },
  header: {
    color: theme.palette.primary.main,
  }
}));

const StyledTableCell = withStyles((theme) => ({
  head: {
    fontSize: 16,
  },
  body: {
    fontSize: 16,
  },
}))(TableCell);

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
     <TableRow onClick={() => { setCurrentCategoryId(category.id); setOpen(!open);}}>
        <StyledTableCell component="th" scope="row">
          <IconButton aria-label="expand row" size="small">
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
          {category.description}
        </StyledTableCell>
        <StyledTableCell align="right"><NumberFormat value={category.estimate_amount} displayType={'text'} thousandSeparator={true} prefix={'$'} /></StyledTableCell>
        <StyledTableCell align="right"><NumberFormat value={category.actual_amount} displayType={'text'} thousandSeparator={true} prefix={'$'} /></StyledTableCell>
        <StyledTableCell align="right"><NumberFormat value={category.estimate_amount - category.actual_amount} displayType={'text'} thousandSeparator={true} prefix={'$'} /></StyledTableCell>
    </TableRow>
    <TableRow>
      <TableCell className={classes.transactions} colSpan={6}>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <Box margin={1}>
            <Table size="small" aria-label="transactions">
              <TableHead>
                <TableRow>
                  <StyledTableCell className={classes.header}>TRANSACTION DETAILS</StyledTableCell>
                  <StyledTableCell className={classes.header}>DATE</StyledTableCell>
                  <StyledTableCell className={classes.header} align="right">AMOUNT</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {currentCategoryTransactions.map((transaction) => (
                  <TableRow key={transaction.id}>
                    <StyledTableCell>{transaction.description}</StyledTableCell>
                    <StyledTableCell>{transaction.date}</StyledTableCell>
                    <StyledTableCell align="right"><NumberFormat value={transaction.amount} displayType={'text'} thousandSeparator={true} prefix={'$'} /></StyledTableCell>
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