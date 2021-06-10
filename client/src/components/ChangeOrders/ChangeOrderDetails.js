import { makeStyles, Dialog, DialogTitle, DialogActions, DialogContent, DialogContentText, Button } from '@material-ui/core';

const useStyles = makeStyles({
  
});

export default function ChangeOrderDetails({ changeOrder, open, onClose}) {
  const classes = useStyles();

  const handleClose = () => {
    onClose(changeOrder.id);
  };

  return (
    <Dialog onClose={handleClose} aria-labelledby="change-order-details" open={open} fullWidth="true">
      <DialogTitle id="change-order-details">Change order #: CO_{changeOrder.id}</DialogTitle>
      <DialogContent>
          <DialogContentText>
            Description: {changeOrder.description}
          </DialogContentText>
          <DialogContentText>
            Cost: ${changeOrder.cost}
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
