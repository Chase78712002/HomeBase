import { Fab, makeStyles } from "@material-ui/core";
import NavigationIcon from "@material-ui/icons/Navigation";

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  extendedIcon: {
    right: theme.spacing(2),
  },
}));

export default function AddNewProject(props) {
  const classes = useStyles();

  return (
    <Fab variant="extended" >
      <NavigationIcon className={classes.extendedIcon} />
      Add New Project
    </Fab>
  );
}
