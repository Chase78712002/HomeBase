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
<<<<<<< HEAD
    text: 'Dashboard',
=======
    text: "Dashboard",
>>>>>>> 0254b128605aa0842903374354212eff8653107c
    icon: <DashboardTwoToneIcon />,
    path: "/dashboard",
    component: Dashboard,
  },
  {
    id: 2,
<<<<<<< HEAD
    text: 'Schedule',
=======
    text: "Schedule",
>>>>>>> 0254b128605aa0842903374354212eff8653107c
    icon: <ScheduleTwoToneIcon />,
    path: "/schedule",
    component: Schedule,
  },
  {
    id: 3,
<<<<<<< HEAD
    text: 'Budget',
=======
    text: "Budget",
>>>>>>> 0254b128605aa0842903374354212eff8653107c
    icon: <LocalAtmTwoToneIcon />,
    path: "/budget",
    component: Budget,
  },
  {
    id: 4,
<<<<<<< HEAD
    text: 'Change orders',
=======
    text: "Change orders",
>>>>>>> 0254b128605aa0842903374354212eff8653107c
    icon: <LoopTwoToneIcon />,
    path: "/change_orders",
    component: ChangeOrders,
  },
  {
    id: 5,
<<<<<<< HEAD
    text: 'Documents',
=======
    text: "Documents",
>>>>>>> 0254b128605aa0842903374354212eff8653107c
    icon: <DescriptionTwoToneIcon />,
    path: "/documents",
    component: Documents,
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
<<<<<<< HEAD
              <Link to={item.path} className={classes.link} key={item.id}>
=======
              <Link key={item.id} to={item.path} className={classes.link}>
>>>>>>> 0254b128605aa0842903374354212eff8653107c
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
<<<<<<< HEAD
            <Route path={item.path} component={item.component} key={item.id}/>
=======
            <Route key={item.id} path={item.path} component={item.component} />
>>>>>>> 0254b128605aa0842903374354212eff8653107c
          ))}
        </Switch>
      </div>
    </Router>
  );
}
