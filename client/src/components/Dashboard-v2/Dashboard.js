import React, { useEffect, useState } from "react";
import {
  Container,
  createMuiTheme,
  Grid,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core";
import GlassCard from "./components/dashboard/GlassCard";
import RecentChangeOrders from "./components/dashboard/RecentChangeOrders";
import LatestProducts from "./components/dashboard/LatestProducts";
import RecentSpending from "./components/dashboard/RecentSpending";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import axios from "axios";
import Donut from "./components/dashboard/Donut";
import NumberFormat from 'react-number-format';

export default function Dashboard() {
  // const classes = useStyles();
  // const background ={backgroundImage:'url("/Images/Houses/bg1.jpg")'}
  // style={background}
  const [budgetData, setBudgetData] = useState([]);

  const totalBudget = budgetData.map(budgetObj => budgetObj.estimate_amount)
                                .reduce((acc,val)=> acc + val, 0)

  const totalActual = budgetData.map(budgetObj=> budgetObj.actual_amount)
                                .reduce((acc, val) => acc + val, 0)

  const categoriesArr = budgetData.map(obj => obj.description)
  const actualAmountArr = budgetData.map(budgetObj => budgetObj.actual_amount);

  useEffect(() => {
    axios.get("/api/budget_categories").then((res) => {
      setBudgetData(res.data);
    });
  }, []);
  return (
    <Container maxWidth={true}>
      <Grid container spacing={3}>
        <Grid item lg={6} md={12}>
          <GlassCard
            title="BUDGET"
            amount={<NumberFormat value={totalBudget} displayType={'text'} thousandSeparator={true} prefix={'$'} />
          }
            icon={<ArrowDownwardIcon />}
            caption="12% Since last week"
          />
          <RecentSpending data={budgetData} />
        </Grid>

        <Grid item lg={6} md={12}>
          <GlassCard
            title="Total Actual Spending"
            amount={<NumberFormat value={totalActual} displayType={'text'} thousandSeparator={true} prefix={'$'} />}
            icon={<ArrowUpwardIcon/>}
            caption="35% Since last week"
            graph={<Donut actualAmountArr={actualAmountArr} categoriesArr={categoriesArr} />}
          />
          
        </Grid>


        <Grid item md={12} xs={12}>
          <RecentChangeOrders />
        </Grid>
      </Grid>
    </Container>
  );
}
