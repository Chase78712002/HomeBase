import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";

import DashboardTwoToneIcon from "@material-ui/icons/DashboardTwoTone";
import ScheduleTwoToneIcon from "@material-ui/icons/ScheduleTwoTone";
import LocalAtmTwoToneIcon from "@material-ui/icons/LocalAtmTwoTone";
import LoopTwoToneIcon from "@material-ui/icons/LoopTwoTone";
import DescriptionTwoToneIcon from "@material-ui/icons/DescriptionTwoTone";

import Dashboard from "./Dashboard";
import Schedule from "./Schedule";
import Budget from "./Budget";
import ChangeOrders from "./ChangeOrders";
import Documents from "./Documents";
import Signup from "./Signup";

import "./App.scss";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  drawerPaper: { width: "inherit" },
  link: {
    textDecoration: "none",
    color: theme.palette.text.primary,
  },
}));

const menuItems = [
  {
    id: 1,
    text: "Dashboard",
    icon: <DashboardTwoToneIcon />,
    path: "/dashboard",
    component: Dashboard,
  },
  {
    id: 2,
    text: "Schedule",
    icon: <ScheduleTwoToneIcon />,
    path: "/schedule",
    component: Schedule,
  },
  {
    id: 3,
    text: "Budget",
    icon: <LocalAtmTwoToneIcon />,
    path: "/budget",
    component: Budget,
  },
  {
    id: 4,
    text: "Change orders",
    icon: <LoopTwoToneIcon />,
    path: "/change_orders",
    component: ChangeOrders,
  },
  {
    id: 5,
    text: "Documents",
    icon: <DescriptionTwoToneIcon />,
    path: "/documents",
    component: Documents,
  },
  {
    id: 6,
    text: "Signup",
    icon: <DescriptionTwoToneIcon />,
    path: "/signup",
    component: Signup,
  },
  {
    id: 7,
    text: "Login",
    icon: <DescriptionTwoToneIcon />,
    path: "/login",
    component: null,
  },
  {
    id: 8,
    text: "/",
    icon: <DescriptionTwoToneIcon />,
    path: "/",
    component: null,
  },
];

export default function App() {
  const [state, setState] = useState({
    isLoggedIn: false,
    user: {},
  });

  const handleLogin = (data) => {
    setState({
      isLoggedIn: true,
      user: data.user,
    });
  };

  const handleLogout = () => {
    setState({
      isLoggedIn: false,
      user: {},
    });
  };

  useEffect(() => {
    axios
      .get("/logged_in", { withCredentials: true })
      .then((response) => {
        if (response.data.logged_in) {
          handleLogin(response);
        } else {
          handleLogout();
        }
      })
      .catch((error) => {
        console.log("api errors:", error);
      });
  }, []);

  const classes = useStyles();

  return (
    <Router>
      <div style={{ display: "flex" }}>
        <Drawer
          style={{ width: "220px" }}
          variant="persistent"
          anchor="left"
          open={true}
          classes={{ paper: classes.drawerPaper }}
        >
          <List>
            {menuItems.map((item) => (
              <Link key={item.id} to={item.path} className={classes.link}>
                <ListItem button>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItem>
              </Link>
            ))}
          </List>
        </Drawer>

        <Switch>
          {menuItems.map((item) => (
            <Route key={item.id} path={item.path} component={item.component} />
          ))}
        </Switch>
      </div>
    </Router>
  );
}
