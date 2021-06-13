// currency formatter
import NumberFormat from 'react-number-format';

// @material-ui imports
import { 
  makeStyles, Divider, Button, 
  Dialog, DialogTitle, DialogActions, DialogContent,
  Table, TableBody, TableCell, TableHead, TableRow
} from '@material-ui/core';

// app imports
import Status from './Status';

const useStyles = makeStyles({
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "2em 2em 1em 2em"
  },
});

export default function ChangeOrderDetails({ currentCO, client, open, onClose }) {
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
          Victoria, BC V8P 1H5<br/>
        </div>
      </div>

      <DialogTitle id="change-order-details" align="center">Change Order Details</DialogTitle>

      <div className={classes.header}>
        <div>
          <strong>Change order #:</strong> CO_{currentCO.id}<br />
        </div>
        <div>
          <strong>Client name:</strong> {client.first_name} {client.last_name}<br />
        </div>
      </div>

      <Divider variant="middle" />
        
      <DialogContent>

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
                <TableCell align="right"><NumberFormat value={currentCO.cost / currentCO.quantity} displayType={'text'} thousandSeparator={true} prefix={'$'} /></TableCell>
                <TableCell align="right"><NumberFormat value={currentCO.cost} displayType={'text'} thousandSeparator={true} prefix={'$'} /></TableCell>
              </TableRow>
            </TableBody>
          </Table>

        <br/>

        <div><strong>Details:</strong></div>
        <div>{currentCO.details}</div>
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
