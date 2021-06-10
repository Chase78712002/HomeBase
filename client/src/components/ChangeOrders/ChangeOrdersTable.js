import { useState } from "react";

import { makeStyles, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, CircularProgress, Button, Menu, MenuItem } from '@material-ui/core';

import ChangeOrderDetails from './ChangeOrderDetails';
import Status from './Status';

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
  const [currentCO, setCurrentCO] = useState(false);
  const [statusFilterId, setStatusFilterId] = useState(0);

  // if data has not yet loaded, display progress bar
  if (changeOrders.length === 0 || status.length === 0) {
    return (
      <div>
        <CircularProgress className={classes.progress} />
      </div>
    )
  }

  // const filteredCOs = changeOrders.filter(changeOrder => changeOrder.change_order_status_id === statusFilterId);
  let filteredCOs = changeOrders;
  
  const filterByCategory = (id) => {
    if (statusFilterId !== 0) {
      filteredCOs = changeOrders.filter(changeOrder => changeOrder.change_order_status_id === statusFilterId)
    }
  };

  filterByCategory(statusFilterId);

  const totalCosts = () => {
    return filteredCOs.map((changeOrder => changeOrder.cost)).reduce((sum, i) => sum + i, 0);
  };

  const handleClickOpen = (changeOrder) => {
    setOpen(true);
    setCurrentCO(changeOrder);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button aria-controls="filter-approved" onClick={() => setStatusFilterId(0)}>
        VIEW ALL
      </Button>
      <Button aria-controls="filter-approved" onClick={() => setStatusFilterId(1)}>
        APPROVED
      </Button>
      <Button aria-controls="filter-declined" onClick={() => setStatusFilterId(2)}>
        DECLINED
      </Button>
      <Button aria-controls="filter-pending" onClick={() => setStatusFilterId(3)}>
        PENDING
      </Button>

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
            {filteredCOs.map(changeOrder => (
              <TableRow key={changeOrder.id}>
                <TableCell component="th" scope="row" >
                  <Button variant="outlined" onClick={() => handleClickOpen(changeOrder)}>
                    CO_{changeOrder.id}
                  </Button>
                  <ChangeOrderDetails currentCO={currentCO} open={open} onClose={handleClose} />
                </TableCell>
                <TableCell>{changeOrder.description}</TableCell>
                <TableCell align="center">
                  <Status statusId={changeOrder.change_order_status_id}/>
                </TableCell>
                <TableCell align="right">${changeOrder.change_order_status_id === 2 ? changeOrder.cost = 0 : changeOrder.cost}</TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell colSpan={2} />
              <TableCell align="center"><strong>TOTAL:</strong></TableCell>
              <TableCell align="right"><strong>${totalCosts()}</strong></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}