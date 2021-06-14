import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import clsx from 'clsx';

// @material-ui imports
import { makeStyles, Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton } from "@material-ui/core";

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import MenuTwoToneIcon from '@material-ui/icons/MenuTwoTone';
import HomeTwoToneIcon from '@material-ui/icons/HomeTwoTone';
import DashboardTwoToneIcon from "@material-ui/icons/DashboardTwoTone";
import ScheduleTwoToneIcon from "@material-ui/icons/ScheduleTwoTone";
import LocalAtmTwoToneIcon from "@material-ui/icons/LocalAtmTwoTone";
import LoopTwoToneIcon from "@material-ui/icons/LoopTwoTone";
import DescriptionTwoToneIcon from "@material-ui/icons/DescriptionTwoTone";

// app imports
import Home from "./Home/index"
import Dashboard from "./Dashboard/Dashboard";
import Schedule from "./Schedule";
import Budget from "./Budget/Budget";
import ChangeOrders from "./ChangeOrders/ChangeOrders";
import Documents from "./Document/Documents";

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
  link: {
    textDecoration: "none",
    color: theme.palette.text.primary,
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
    justifyContent: 'space-between',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  header: {
    color: 'theme.palette.darkBackground.main',
    align: 'right',
  },
  sidebar: {
    backgroundImage: 'url("https://source.unsplash.com/SAFF_1rWBqE/600x400")',
    backgroundPosition: 'center bottom',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'auto 100%',
  },
  overlay: {
    backgroundColor: 'rgba(37, 34, 24, 1)',
    top: 0,
    left: 0,
    opacity: '.6',
    width: '100%',
    height: '100%'
  },
  white: {
    color: theme.palette.white.main,
  },
  active: {
    backgroundColor: theme.palette.secondary.main,
  }
}));

export default function Nav() {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [activeButton, setActiveButton] = useState();

  const onSideBtnClick = id => {
    setActiveButton(id);
  };

  const handleDrawer = () => {
    setOpen(!open);
  }

  return (
    <div style={{ display: "flex" }}>
    <Router>
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
        <div className={classes.overlay}>
          <div className={classes.toolbar}>
            <IconButton className={classes.white} onClick={handleDrawer}>
              { open ? <ChevronLeftIcon /> : <MenuTwoToneIcon /> }
            </IconButton>
          </div>
          
          <Divider variant="middle" />

          <List>
            {menuItems.map((item) => (
              <Link key={item.id} to={item.path} className={classes.link} onClick={() => onSideBtnClick(item.id)}>
                <ListItem button className={activeButton === item.id ? classes.active : ""}>
                  <ListItemIcon className={classes.white}>{item.icon}</ListItemIcon>
                  <ListItemText className={classes.white} primary={item.text} />
                </ListItem>
              </Link>
            ))}
          </List>
        </div>
      </Drawer>

      <Switch>
      {menuItems.map((item) => (
        <Route key={item.id} path={item.path} component={item.component} />
      ))}
      </Switch>
    </Router>
    </div>
  );
}
