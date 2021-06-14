import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.scss";

import HomeTwoToneIcon from "@material-ui/icons/HomeTwoTone";
import DashboardTwoToneIcon from "@material-ui/icons/DashboardTwoTone";
import ScheduleTwoToneIcon from "@material-ui/icons/ScheduleTwoTone";
import LocalAtmTwoToneIcon from "@material-ui/icons/LocalAtmTwoTone";
import LoopTwoToneIcon from "@material-ui/icons/LoopTwoTone";
import DescriptionTwoToneIcon from "@material-ui/icons/DescriptionTwoTone";

// app imports
import Header from "./Header";
import Nav from "./Nav";
import Home from "./Home/index";
import Dashboard from "./Dashboard/Dashboard";
import Schedule from "./Schedule";
import Budget from "./Budget/Budget";
import ChangeOrders from "./ChangeOrders/ChangeOrders";
import Documents from "./Document/Documents";

import "./App.scss";
import SplashLogin from "./Splash_login";

const menuItems = [
  {
    id: 1,
    text: "Client Projects",
    icon: <HomeTwoToneIcon />,
    path: "/projects",
    component: Home,
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
  },
];

export default function App() {
  return (
    <div >
      <Header />
      <Router>

        <Switch>
          <Route exact path="/" component={SplashLogin} />
          <div style={{ display: "flex" }}>
            <Nav menuItems={menuItems} />

            {menuItems.map((item) => (
              <Route
                key={item.id}
                path={item.path}
                component={item.component}
              />
            ))}
          </div>
          

        </Switch>
      </Router>
    </div>
  );
}
