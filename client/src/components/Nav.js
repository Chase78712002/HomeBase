import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation
} from "react-router-dom";
import clsx from "clsx";

// @material-ui imports
import {
  makeStyles,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
} from "@material-ui/core";

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
    alignItems: "center",
    justifyContent: "space-between",
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
    top: 0,
    left: 0,
    opacity: ".6",
    width: "100%",
    height: "100%",
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
}));

export default function Nav({menuItems}) {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const [activeButton, setActiveButton] = useState();
  const [hideNav, setHideNav] = useState(false);

  let location = useLocation();
  useEffect(() => {
    console.log("We are at:", location.pathname);
  }, [location]);

  const onSideBtnClick = (id) => {
    setActiveButton(id);
  };

  const handleDrawer = () => {
    setOpen(!open);
  };

  return (
    <>
      {location.pathname !== "/projects" && (
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
                  onClick={() => onSideBtnClick(item.id)}
                >
                  <ListItem
                    button
                    className={activeButton === item.id ? classes.active : ""}
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
        </Drawer>
      )}
    </>
  );
}
