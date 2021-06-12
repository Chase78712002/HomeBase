import React, { useEffect, useState } from "react";
import {
  Container,
  Grid,
} from "@material-ui/core";
import GlassCard from "./components/dashboard/GlassCard";
import RecentChangeOrders from "./components/dashboard/RecentChangeOrders";
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
  const [state, setState] = useState({
    budgetData:[],
    changeOrderData:[]
  });

  const totalBudget = state.budgetData.map(budgetObj => budgetObj.estimate_amount)
                                .reduce((acc,val)=> acc + val, 0)

  const totalActual = state.budgetData.map(budgetObj=> budgetObj.actual_amount)
                                .reduce((acc, val) => acc + val, 0)

  const categoriesArr = state.budgetData.map(obj => obj.description)
  const actualAmountArr = state.budgetData.map(budgetObj => budgetObj.actual_amount);

  useEffect(() => {
    Promise.all([
      axios.get("/api/budget_categories"),
      axios.get("/api/change_orders")
    ])
    .then(all => {
      setState(prev => ({
        ...prev,
        budgetData: all[0].data,
        changeOrderData:all[1].data
      }));
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
          <RecentSpending data={state.budgetData} />
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
          <RecentChangeOrders data={state.changeOrderData} />
        </Grid>
      </Grid>
    </Container>
  );
}
