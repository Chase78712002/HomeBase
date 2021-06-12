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

import Dashboard from "./Dashboard-v2/Dashboard";
import Schedule from "./Schedule";
import Budget from "./Budget";
import ChangeOrders from "./ChangeOrders";
import Documents from "./Documents";
import Home from "./Home/index";
import "./App.scss";

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
    text: "Projects-Builder view",
    icon: <DescriptionTwoToneIcon />,
    path: "/projects",
    component: Home,
  },
];

export default function App() {
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
