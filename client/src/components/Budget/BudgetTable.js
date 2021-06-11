import { useState } from 'react';

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

import TransactionRowItem from './TransactionRowItem';

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
  const [currentCategory, setCurrentCategory] = useState();

  if (categories.length === 0 || transactions.length === 0) {
    return (
      <div>
        <CircularProgress className={classes.progress} />
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
    <TableBody>
      {categories.map((category) => (
        <TableRow key={category.id}>
          <TableCell>
            <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
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
              <Typography variant="h6" gutterBottom component="div">Transaction history</Typography>
              <Table size="small" aria-label="transactions">
              <TableHead>
                <TableRow>
                  <TableCell colspan="2">Description</TableCell>
                  <TableCell colspan="2">Date</TableCell>
                  <TableCell align="right">Amount</TableCell>
                </TableRow>
              </TableHead>
              <TransactionRowItem transactions={transactions}/>
            </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell></TableCell>
        <TableCell><strong>TOTALS:</strong></TableCell>
        <TableCell align="right">${totalEstimate}</TableCell>
        <TableCell align="right">${totalActual}</TableCell>
        <TableCell align="right">${totalVariance}</TableCell>
      </TableRow>
    </TableBody>
  )
}
