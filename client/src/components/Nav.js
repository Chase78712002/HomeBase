import { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link, useLocation } from "react-router-dom";
import clsx from "clsx";

// @material-ui imports
import { makeStyles, Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton } from "@material-ui/core";

import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import MenuTwoToneIcon from "@material-ui/icons/MenuTwoTone";

const drawerWidth = 255;

const useStyles = makeStyles((theme) => ({
  link: {
    textDecoration: "none",
    color: theme.palette.text.primary,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    justifyContent: "flex-start",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  header: {
    color: "theme.palette.darkBackground.main",
    align: "right",
  },
  sidebar: {
    backgroundImage: 'url("https://source.unsplash.com/SAFF_1rWBqE/600x400")',
    backgroundPosition: "center bottom",
    backgroundRepeat: "no-repeat",
    backgroundSize: "auto 100%",
  },
  overlay: {
    backgroundColor: "rgba(37, 34, 24, 1)",
    opacity: ".6",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  },
  white: {
    color: theme.palette.white.main,
  },
  active: {
    backgroundColor: theme.palette.secondary.main,
    '&:hover': {
      backgroundColor: theme.palette.secondary.main,
    },
  },
  logo: {
    alignItems: "center",
  }
}));

export default function Nav({menuItems}) {
  const classes = useStyles();

  const [open, setOpen] = useState(true);

  let location = useLocation();
  const { pathname } = location;

  const handleDrawer = () => {
    setOpen(!open);
  };

  return (
    <>
      {pathname !== "/projects" && (
        <Drawer
          variant="permanent"
          className={clsx(
            classes.drawer,
            {
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            },
            classes
          )}
          classes={{
            paper: clsx(
              {
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open,
              },
              classes.sidebar
            ),
          }}
        >
          <div className={classes.overlay}>
            <div>
              <div className={classes.toolbar}>
                <IconButton className={classes.white} onClick={handleDrawer}>
                  {open ? <ChevronLeftIcon /> : <MenuTwoToneIcon />}
                </IconButton>
              </div>

              <Divider variant="middle" />
                <List>
                  {menuItems.map((item) => (
                    <Link
                      key={item.id}
                      to={item.path}
                      className={classes.link}
                    >
                      <ListItem
                        button
                        className={pathname === item.path ? classes.active : ""}
                      >
                      <ListItemIcon className={classes.white}>
                        {item.icon}
                      </ListItemIcon>
                      <ListItemText
                        className={classes.white}
                        primary={item.text}
                      />
                    </ListItem>
                  </Link>
                ))}
              </List>
            </div>
            <div>
              <img
                className={classes.logo}
                src={open ? "/Images/Logo/HB_Long_white.png" : "/Images/Logo/HB_Short_white.png"}
                width={open ? "225px" : "75px"}
                alt="HomeBase logo"
              />
            </div>
          </div>
        </Drawer>
      )}
    </>
  );
}
