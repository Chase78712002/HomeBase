import { 
  makeStyles, Typography, Divider, Button, 
  Dialog, DialogTitle, DialogActions, DialogContent, DialogContentText, 
  Table, TableBody, TableCell, TableHead, TableRow
} from '@material-ui/core';

import Status from './Status';

const useStyles = makeStyles({
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "2em 2em 1em 2em"
  },
  right: {
    display: "flex",
    justifyContent: "flex-end"
  },
});

export default function ChangeOrderDetails({ currentCO, open, onClose }) {
  const classes = useStyles();

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} aria-labelledby="change-order-details" open={open} fullWidth={true}>
      <div className={classes.header}>
        <div>Logo</div>
        <div>
          <strong>Builder Name</strong><br/>
          123 Main Street<br/>
          Victoria, BC T3V 88<br/>
        </div>
      </div>

      <DialogTitle id="change-order-details" align="center">Change Order Details</DialogTitle>

      <div className={classes.header}>
        <div>
          <strong>Change order #:</strong> CO_{currentCO.id}<br />
        </div>
        <div>
          <strong>Client name:</strong> Name<br />
        </div>
      </div>

      <Divider variant="middle" />
        
      <DialogContent>
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
                <TableCell align="right">{currentCO.quantity}</TableCell>
                <TableCell align="right">${currentCO.cost / currentCO.quantity}</TableCell>
                <TableCell align="right">${currentCO.cost}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </DialogContentText>

        <br/>

        <DialogContentText>
          <Typography><strong>Details:</strong></Typography>
          <Typography>{currentCO.details}</Typography>
        </DialogContentText>
      </DialogContent>

      <DialogActions className={classes.header}>
        <Status statusId={currentCO.change_order_status_id}/>
        <Button onClick={handleClose} color="primary" autoFocus>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}
