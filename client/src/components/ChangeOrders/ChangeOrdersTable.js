import { useState } from "react";

import { makeStyles, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, CircularProgress, Button, Menu, MenuItem } from '@material-ui/core';
import ExpandMoreTwoToneIcon from '@material-ui/icons/ExpandMoreTwoTone';

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
  const [anchorEl, setAnchorEl] = useState(null);

  // if data has not yet loaded, display progress bar
  if (changeOrders.length === 0 || status.length === 0) {
    return (
      <div>
        <CircularProgress className={classes.progress} />
      </div>
    )
  }

  // set filtering options
  let filteredCOs = changeOrders;
  
  const filterByCategory = (id) => {
    if (statusFilterId !== 0) {
      filteredCOs = changeOrders.filter(changeOrder => changeOrder.change_order_status_id === statusFilterId)
    }
  };

  filterByCategory(statusFilterId);

  // filtering handlers

  const handleClickMenu = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  // calculate total change order costs (by filtered view)
  const totalCosts = () => {    
    return filteredCOs
      // remove any declined COs from total
      .filter((changeOrder => changeOrder.change_order_status_id !== 2))
      .map((changeOrder => changeOrder.cost))
      .reduce((sum, i) => sum + i, 0);
  };

  // dialog box handlers
  const handleClickOpen = (changeOrder) => {
    setOpen(true);
    setCurrentCO(changeOrder);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="change orders table">
        <TableHead>
          <TableRow>
            <TableCell>Reference no.</TableCell>
            <TableCell>Description</TableCell>
            <TableCell align="center">
              Status
              <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClickMenu}>
                <ExpandMoreTwoToneIcon />
              </Button>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleCloseMenu}
              >
                <MenuItem onClick={() => { setStatusFilterId(0); handleCloseMenu() }}>View all</MenuItem>
                <MenuItem onClick={() => { setStatusFilterId(1); handleCloseMenu() }}>Approved</MenuItem>
                <MenuItem onClick={() => { setStatusFilterId(2); handleCloseMenu() }}>Declined</MenuItem>
                <MenuItem onClick={() => { setStatusFilterId(3); handleCloseMenu() }}>Pending</MenuItem>
              </Menu>
            </TableCell>
            <TableCell align="right">Payment amount</TableCell>
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
              <TableCell align="right">${changeOrder.change_order_status_id === 2 ? 0 : changeOrder.cost}</TableCell>
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
  )
}