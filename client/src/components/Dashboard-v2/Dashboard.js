import React from "react";
import { Helmet } from "react-helmet";
import {
  Container,
  createMuiTheme,
  Grid,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core";
import Budget from "./components/dashboard/Budget";
import LatestOrders from "./components/dashboard/LatestOrders";
import LatestProducts from "./components/dashboard/LatestProducts";
import Sales from "./components/dashboard/Sales";
import TasksProgress from "./components/dashboard/TasksProgress";
import TotalCustomers from "./components/dashboard/TotalCustomers";
import TotalProfit from "./components/dashboard/TotalProfit";
import TrafficByDevice from "./components/dashboard/TrafficByDevice";
import { Box } from "@material-ui/core";



export default function Dashboard() {
  // const classes = useStyles();
  // const background ={backgroundImage:'url("/Images/Houses/bg1.jpg")'}
// style={background}
  return (
      <Box >
        <Container maxWidth={false}>
          <Grid container spacing={3}>
            <Grid item md={4} sm={12} >
              <Budget />
            </Grid>

            <Grid item lg={3} sm={6} xl={3} xs={12}>
              <TotalProfit sx={{ height: "100%" }} />
            </Grid>

            <Grid item lg={8} md={12} xl={9} xs={12}>
              <Sales />
            </Grid>

            <Grid item lg={4} md={6} xl={3} xs={12}>
              <TrafficByDevice sx={{ height: "100%" }} />
            </Grid>

            <Grid item md={12} xs={12}>
              <LatestOrders />
            </Grid>
          </Grid>
        </Container>
      </Box>
  );
}
