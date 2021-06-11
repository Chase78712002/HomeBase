import { useState, useEffect } from 'react';

import { 
  makeStyles,
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Collapse,
  CircularProgress,
} from '@material-ui/core';

import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

// import TransactionRowItem from './TransactionRowItem';

const useStyle = makeStyles({
  table: {
    minWidth: 650,
    marginTop: '20px'
  },
  progress: {
    color: '#679436'
  },
});

export default function BudgetTable({categories, transactions}) {
  const classes = useStyle();
  
  const [open, setOpen] = useState(false);
  const [currentCategoryId, setCurrentCategoryId] = useState('');
  const [currentCategoryTransactions, setCurrentCategoryTransactions] = useState(transactions);

  const handleView = () => {
    console.log('Id: ', currentCategoryId);
    const filteredTransactions = transactions.filter(transaction => transaction.budget_category_id === currentCategoryId);
    console.log(filteredTransactions);
    setCurrentCategoryTransactions(filteredTransactions);
}
  
  useEffect(() => {
    console.log('CurrentId: ', currentCategoryId);
    handleView();
    
  }, [currentCategoryId]);
  
  if (categories.length === 0 || transactions.length === 0) {
    return (
      <div>
        <CircularProgress className={classes.progress} />
      </div>
    )
  }

  // const handleOpen = (id) => {
  //   setCurrentCategoryId(id);
  //   setOpen(!open);
  // }

  // const handleView = () => {
  //     console.log('Id: ', currentCategoryId);
  //     const filteredTransactions = transactions.filter(transaction => transaction.budget_category_id === currentCategoryId);
  //     console.log(filteredTransactions);
  //     setCurrentCategoryTransactions(filteredTransactions);
  //     setOpen(!open);
  // }
  
  // calculating table totals
  const totalCosts = (value) => {
    return categories.map((category => category[value])).reduce((sum, i) => sum + i, 0);
  };

  const totalEstimate = totalCosts('estimate_amount');
  const totalActual = totalCosts('actual_amount');
  const totalVariance = totalEstimate - totalActual;

  return (
    <TableBody>
      {categories.map((category) => (
      <TableRow key={category.id}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => { setCurrentCategoryId(category.id); setOpen(!open);}}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {category.description}
        </TableCell>
        <TableCell align="right">${category.estimate_amount}</TableCell>
        <TableCell align="right">${category.actual_amount}</TableCell>
        <TableCell align="right">${category.estimate_amount - category.actual_amount}</TableCell>
      </TableRow>
      ))}
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Transaction history
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell colSpan="2">Description</TableCell>
                    <TableCell colSpan="2">Date</TableCell>
                    <TableCell align="right">Amount</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {currentCategoryTransactions.map((transaction) => (
                  <TableRow key={transaction.id}>
                    <TableCell colSpan="2">{transaction.description}</TableCell>
                    <TableCell colSpan="2">{transaction.date}</TableCell>
                    <TableCell align="right">${transaction.amount}</TableCell>
                  </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell></TableCell>
        <TableCell><strong>TOTALS:</strong></TableCell>
        <TableCell align="right"><strong>${totalEstimate}</strong></TableCell>
        <TableCell align="right"><strong>${totalActual}</strong></TableCell>
        <TableCell align="right"><strong>${totalVariance}</strong></TableCell>
    </TableRow>
    </TableBody>
  );
}
