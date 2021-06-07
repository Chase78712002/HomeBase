import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import { 
  Drawer, List, ListItem, ListItemIcon, ListItemText,
  Container, Typography
} from '@material-ui/core';

import DashboardTwoToneIcon from '@material-ui/icons/DashboardTwoTone';
import ScheduleTwoToneIcon from '@material-ui/icons/ScheduleTwoTone';
import LocalAtmTwoToneIcon from '@material-ui/icons/LocalAtmTwoTone';
import LoopTwoToneIcon from '@material-ui/icons/LoopTwoTone';
import DescriptionTwoToneIcon from '@material-ui/icons/DescriptionTwoTone';

import "./App.scss";

const useStyles = makeStyles((theme) => ({
  drawerPaper: { width: 'inherit' },
  link: {
    textDecoration: 'none', 
    color: theme.palette.text.primary
  }
}));

const menuItems = [
  {
    text: 'Dashboard',
    icon: <DashboardTwoToneIcon color="primary"/>,
    path: '/'
  },
  {
    text: 'Schedule',
    icon: <ScheduleTwoToneIcon color="primary" />,
    path: '/schedule'
  },
  {
    text: 'Budget',
    icon: <LocalAtmTwoToneIcon color= "primary" />,
    path: '/budget'
  },
  {
    text: 'Change orders',
    icon: <LoopTwoToneIcon color="primary" />,
    path: '/change_orders'
  },
  {
    text: 'Documents',
    icon: <DescriptionTwoToneIcon color="primary" />,
    path: '/documents'
  },
]

export default function App() {
  const classes = useStyles();

  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <Drawer
          style={{ width: '220px' }}
          variant="persistent"
          anchor="left"
          open={true}
          classes={{ paper: classes.drawerPaper }}
        >
          <List>
            {menuItems.map((item) => (
              <Link to={item.path} className={classes.link}>
                <ListItem button>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text}/>
                </ListItem>
              </Link>
            ))}
          </List>  
        </Drawer>

        <Switch>
          {menuItems.map((item) => (
            <Route exact path={item.path}>
              <Container>
                <Typography variant="h3" gutterBottom>
                  {item.text}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  This is where the component's content will go.
                </Typography>
              </Container>
            </Route>
          ))}
        </Switch>
      </div>
    </Router>
  );
}
