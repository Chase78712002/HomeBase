import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { useState } from 'react';
import clsx from 'clsx';

import { makeStyles, Typography, Divider, AppBar, Toolbar, Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton, Button } from "@material-ui/core";

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import HomeTwoToneIcon from '@material-ui/icons/HomeTwoTone';
import DashboardTwoToneIcon from "@material-ui/icons/DashboardTwoTone";
import ScheduleTwoToneIcon from "@material-ui/icons/ScheduleTwoTone";
import LocalAtmTwoToneIcon from "@material-ui/icons/LocalAtmTwoTone";
import LoopTwoToneIcon from "@material-ui/icons/LoopTwoTone";
import DescriptionTwoToneIcon from "@material-ui/icons/DescriptionTwoTone";
import MenuTwoToneIcon from '@material-ui/icons/MenuTwoTone';

import Dashboard from "./Dashboard";
import Schedule from "./Schedule";
import Budget from "./Budget";
import ChangeOrders from "./ChangeOrders";
import Documents from "./Documents";
import Home from "./Home/index"

import "./App.scss";

const menuItems = [
  {
    id: 1,
    text: "Client Projects",
    icon: <HomeTwoToneIcon />,
    path: "/projects",
    component: Home
  },
  {
    id: 2,
    text: "Project Dashboard",
    icon: <DashboardTwoToneIcon />,
    path: "/dashboard",
    component: Dashboard,
  },
  {
    id: 3,
    text: "Schedule",
    icon: <ScheduleTwoToneIcon />,
    path: "/schedule",
    component: Schedule,
  },
  {
    id: 4,
    text: "Budget",
    icon: <LocalAtmTwoToneIcon />,
    path: "/budget",
    component: Budget,
  },
  {
    id: 5,
    text: "Change Orders",
    icon: <LoopTwoToneIcon />,
    path: "/change_orders",
    component: ChangeOrders,
  },
  {
    id: 6,
    text: "Documents",
    icon: <DescriptionTwoToneIcon />,
    path: "/documents",
    component: Documents,
  }
];

const drawerWidth = 235;

const useStyles = makeStyles((theme) => ({
  drawerPaper: { 
    width: "inherit"
  },
  link: {
    textDecoration: "none",
    color: theme.palette.text.primary,
  },
  root: {
    display: 'flex',
  },
  appBar: {
    // zIndex: theme.zIndex.drawer + 1,
    backgroundColor: "transparent",
    boxShadow: "none",
    //   borderBottom: "0",
    //   marginBottom: "0",
    //   position: "absolute",
    //   width: "100%",
    //   paddingTop: "10px",
    //   border: "0",
    //   borderRadius: "3px",
    //   padding: "10px 0",
    //   transition: "all 150ms ease 0s",
    //   minHeight: "50px",
    //   display: "block",
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  icon: {
    margin: 0,
    padding: 0,
  },
  header: {
    backgroundColor: '#f5f5f5',
  },
  sidebar: {
    backgroundColor: '#252218',
    opacity: '.8',
    color: '#fff',
  },
  white: {
    color: '#fff',
  }
}));

export default function App() {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const handleDrawer = () => {
    setOpen(!open);
  }

  return (
    <Router>
      <div style={{ display: "flex" }}>
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          }, classes.header)}
        >
          <Toolbar className="header">
            {/* <IconButton className={classes.icon} color="inherit" onClick={handleDrawer}>
              { open ? <ChevronLeftIcon /> : <MenuTwoToneIcon /> }
            </IconButton> */}
          </Toolbar>
        </AppBar>
        <Toolbar />
        
        <Drawer
          variant="permanent"
          className={clsx(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }, classes)}
          classes={{
            paper: clsx({
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            }, classes.sidebar),
          }}
        >
          <div className={classes.toolbar}>
            {/* <Typography variant="h6" align="center" noWrap>HomeBase</Typography> */}
            <IconButton className={classes.icon} color="inherit" onClick={handleDrawer}>
              { open ? <ChevronLeftIcon /> : <MenuTwoToneIcon /> }
            </IconButton>
          </div>
          
          <Divider variant="middle" />

          <List>
            {menuItems.map((item) => (
              <Link key={item.id} to={item.path} className={classes.link}>
                <ListItem button>
                  <ListItemIcon className={classes.white}>{item.icon}</ListItemIcon>
                  <ListItemText className={classes.white} primary={item.text} />
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
