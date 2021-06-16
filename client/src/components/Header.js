import { BrowserRouter as Router } from "react-router-dom";

// @material-ui imports
import {
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  Button,
} from "@material-ui/core";
import AccountCircleTwoToneIcon from "@material-ui/icons/AccountCircleTwoTone";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "transparent",
    boxShadow: "none",
  },
  root: {
    display: "flex",
    justifyContent: "flex-end",
  },
  title: {
    flexGrow: 1,
  },
  link: {
    textDecoration: "none",
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Router>
        <AppBar position="absolute" className={classes.appBar}>
          <Toolbar>
            <Typography className={classes.title}></Typography>
            <Button>
              <AccountCircleTwoToneIcon />
              &nbsp; Welcome Bob
            </Button>
          </Toolbar>
        </AppBar>
      </Router>
    </div>
  );
}
