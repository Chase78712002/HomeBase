import { useState } from "react";

// currency formatter
import NumberFormat from 'react-number-format';

// @material-ui imports
import { makeStyles, withStyles, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, LinearProgress, Button, Menu, MenuItem } from '@material-ui/core';
import ExpandMoreTwoToneIcon from '@material-ui/icons/ExpandMoreTwoTone';

// app imports
import ChangeOrderDetails from './ChangeOrderDetails';
import Status from './Status';

const useStyle = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  footer: {
    backgroundColor: theme.palette.background.main,
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

export default function ChangeOrdersTable({ changeOrders, status, projects }) {
  const classes = useStyle();

  const [open, setOpen] = useState(false);
  const [currentCO, setCurrentCO] = useState(false);
  const [statusFilterId, setStatusFilterId] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);

  // if data has not yet loaded, display progress bar
  if (changeOrders.length === 0 || status.length === 0 || projects.length === 0) {
    return (
      <div>
        <LinearProgress color="secondary" />
      </div>
    )
  }

  // set filtering options
  let filteredCOs = changeOrders;
  
  const filterByCategory = () => {
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

  const currentProject = projects[0];

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="change orders table">
        <TableHead>
          <TableRow>
            <TableCell>CHANGE ORDER NO.</TableCell>
            <TableCell>DESCRIPTION</TableCell>
            <TableCell align="center">
              STATUS
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
            <TableCell align="right">COST</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredCOs.map(changeOrder => (
            <TableRow key={changeOrder.id}>
              <StyledTableCell component="th" scope="row" >
                <Button variant="contained" onClick={() => handleClickOpen(changeOrder)}>
                  View CO_{changeOrder.id}
                </Button>
                <ChangeOrderDetails currentCO={currentCO} client={currentProject.client} open={open} onClose={handleClose} />
              </StyledTableCell>
              <StyledTableCell>{changeOrder.description}</StyledTableCell>
              <StyledTableCell align="center">
                <Status statusId={changeOrder.change_order_status_id}/>
              </StyledTableCell>
              <StyledTableCell align="right"><NumberFormat value={changeOrder.cost} displayType={'text'} thousandSeparator={true} prefix={'$'} /></StyledTableCell>
            </TableRow>
          ))}
          <TableRow>
            <StyledTableCell colSpan={2} className={classes.footer} />
            <StyledTableCell align="center" className={classes.footer}><strong>TOTAL:</strong></StyledTableCell>
            <StyledTableCell align="right" className={classes.footer}><strong><NumberFormat value={totalCosts()} displayType={'text'} thousandSeparator={true} prefix={'$'} /></strong></StyledTableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  )
}