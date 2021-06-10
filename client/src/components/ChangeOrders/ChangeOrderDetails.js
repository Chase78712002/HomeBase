import { 
  makeStyles, Divider, Button, 
  Dialog, DialogTitle, DialogActions, DialogContent, DialogContentText, 
  Table, TableBody, TableCell, TableHead, TableRow
} from '@material-ui/core';

import Status from './Status';

const useStyles = makeStyles({
  header: {
    display: "flex",
    justifyContent: "space-between",
    padding: '2em'
  },
  right: {
    display: "flex",
    justifyContent: "flex-end"
  },
  divider: {
    marginBottom: '10px'
  }
});

export default function ChangeOrderDetails({ currentCO, open, onClose }) {
  const classes = useStyles();

  const quantity = 1;

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} aria-labelledby="change-order-details" open={open} fullWidth={true}>
      <div className={classes.header}>
        <div>Logo</div>
        <div><Status statusId={currentCO.change_order_status_id}/></div>
      </div>

      <Divider />

      <DialogTitle id="change-order-details" align="center">Change Order Details: CO_{currentCO.id}</DialogTitle>
      
      <DialogContent>
        <DialogContentText align="center">
        </DialogContentText>

        <DialogContentText>
          <Table className={classes.table} aria-label="change orders table">
            <TableHead>
              <TableRow>
                <TableCell>Description</TableCell>
                <TableCell align="right">Qty</TableCell>
                <TableCell align="right">Rate</TableCell>
                <TableCell align="right">Price</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>{currentCO.description}</TableCell>
                <TableCell align="right">{quantity}</TableCell>
                <TableCell align="right">${currentCO.cost}</TableCell>
                <TableCell align="right">${quantity * currentCO.cost}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </DialogContentText>
      </DialogContent>

      <DialogActions>
        <Button onClick={handleClose} color="primary" autoFocus>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}
