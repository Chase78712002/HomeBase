import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation,
} from "react-router-dom";

// @material-ui imports
import {
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  Button,
} from "@material-ui/core";
import AccountCircleTwoToneIcon from "@material-ui/icons/AccountCircleTwoTone";
import HomeTwoToneIcon from "@material-ui/icons/HomeTwoTone";

// app imports
// import Home from "./Home/index";

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

            <Button size="small" color="primary">
              <HomeTwoToneIcon />
              &nbsp;
              {/* <Link to="/projects" className={classes.link}> */}
              {/* All Projects */}
              {/* </Link> */}
              All Projects
            </Button>

            <Typography color="primary">&nbsp;|&nbsp;</Typography>

            <Button color="primary">
              <AccountCircleTwoToneIcon />
              &nbsp; My Account
            </Button>
          </Toolbar>
        </AppBar>

        {/* <Switch>
          <Route path="/projects" component={Home} />
        </Switch> */}
      </Router>
    </div>
  );
}
