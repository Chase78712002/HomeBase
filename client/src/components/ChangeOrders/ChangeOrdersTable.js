import { useState } from "react";
import { makeStyles, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, CircularProgress, Button } from '@material-ui/core';

import ChangeOrderDetails from './ChangeOrderDetails';

const useStyle = makeStyles({
  header: {
    color: '#05668d',
    fontSize: 30,
    margin: '10px 0'
  },
  table: {
    minWidth: 650,
    marginTop: '20px'
  },
  progress: {
    color: '#679436'
  },
});

export default function ChangeOrdersTable({ changeOrders, status }) {
  const classes = useStyle();

  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState();

  // if data has not yet loaded, display progress bar
  if (changeOrders.length === 0 || status.length === 0) {
    return (
      <div>
        <CircularProgress className={classes.progress} />
      </div>
    )
  }

  const totalCosts = () => {
    return changeOrders.map((changeOrder => changeOrder.cost)).reduce((sum, i) => sum + i, 0);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  // lookup status description from change_order_status table
  const statusLookup = (status, id) => {
    const statusObj = status.find(element => element.id === id);
    return statusObj.status;
  };

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="change orders table">
        <TableHead>
          <TableRow>
            <TableCell>Reference no.</TableCell>
            <TableCell>Description</TableCell>
            <TableCell align="center">Status</TableCell>
            <TableCell align="right">Cost</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {changeOrders.map(changeOrder => (
            <TableRow key={changeOrder.id}>
              <TableCell component="th" scope="row" >
                <Button variant="outlined" onClick={handleClickOpen}>
                  CO_{changeOrder.id}
                </Button>
                <ChangeOrderDetails changeOrder={changeOrder} open={open} onClose={handleClose} />
              </TableCell>
              <TableCell>{changeOrder.description}</TableCell>
              <TableCell align="center">{statusLookup(status, changeOrder.change_order_status_id)}</TableCell>
              <TableCell align="right">${changeOrder.change_order_status_id === 2 ? changeOrder.cost = 0 : changeOrder.cost}</TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell colSpan={2} />
            <TableCell align="center"><strong>TOTAL:</strong></TableCell>
            <TableCell align="right">${totalCosts()}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  )
}