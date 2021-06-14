import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import NumberFormat from 'react-number-format';

// @material-ui imports
import { makeStyles, Typography, Button, Grid, Card, CardContent, CardActions } from "@material-ui/core";

// @material-ui imports
import { Container } from "@material-ui/core";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

// app imports
import Title from '../Title';
import GlassCard from "./components/dashboard/GlassCard";
import RecentChangeOrders from "./components/dashboard/RecentChangeOrders";
import RecentSpending from "./components/dashboard/RecentSpending";
import Donut from "./components/dashboard/Donut";
import Countdown from "./CountDownCard";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    // display: "flex",
    // flexGrow: 1,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  cardAction: {
    display: "flex",
    justifyContent: "flex-end",
  },
  link: {
    textDecoration: "none",
    color: theme.palette.primary.main,
  },
  card: {
    backgroundColor: "rgba(255,255,255, 0.2)",
    marginBottom: "25px",
    height: "100%"
  }
}));

export default function Dashboard() {
  const classes = useStyles();

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
    <section className="content">
      <Title title={"Project Dashboard"} />

      <Grid container className={classes.root} spacing={1}>
        <Grid item xs={12} sm={12} md={4}>
          <Card className={classes.card} raised >
            <CardContent>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                PROJECT INFO
              </Typography>
              <Typography variant="h5" component="h2" color="secondary">
                Project name
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                Project start date
              </Typography>
              <Typography variant="body2" component="p">
                Address of new home
                <br /><br />
                Image?
                <br /><br />
                Avatars of builders and clients associated with this project?
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.card} raised>
            <CardContent>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
              POSSESSION DAY
              </Typography>
              <Typography variant="h5" component="h2" color="secondary">
                Countdown to possession day!
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                Date
              </Typography>
              <Countdown />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={12} md={4}>
          <Link to="/schedule" className={classes.link}>
          <Card className={classes.card} raised >
            <CardContent>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                SCHEDULE &amp; MILESTONES
              </Typography>
              <Typography variant="h5" component="h2" color="secondary">
                Upcoming milestones
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                Project start date
              </Typography>
              <Typography variant="body2" component="p">
                Pull in milestones after today's date; limit to 4 or 5?
              </Typography>
            </CardContent>
            {/* <CardActions className={classes.cardAction}>
            <Button size="small"><Link to="/schedule" className={classes.link}>View full schedule</Link></Button>
            </CardActions> */}
          </Card>
          </Link>
        </Grid>
{/* 
        <Grid item xs={12} sm={6} md={4}>
          <Link to="/budget" className={classes.link}>
          <Card className={classes.card} raised>
            <CardContent>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                BUDGET
              </Typography>
              <Typography variant="h5" component="h2">
                Title
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                Date
              </Typography>
            </CardContent>
            <CardActions className={classes.cardAction}>
            <Button size="small"><Link to="/schedule" className={classes.link}>View budget</Link></Button>
            </CardActions>
          </Card>
          </Link>
        </Grid> */}

        <Grid item xs={12} sm={6} md={8}>
          <Card className={classes.card} raised>
            <CardContent>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
              BUDGET
              </Typography>
              {/* <GlassCard
                amount={<NumberFormat value={totalBudget} displayType={'text'} thousandSeparator={true} prefix={'$'} />}
                icon={<ArrowDownwardIcon />}
                caption="12% Since last week"
              /> */}
              <Typography variant="h5" component="h2">
                Recent spending
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                As of TODAY'S DATE
              </Typography>
              <RecentSpending data={state.budgetData} />
            </CardContent>
            {/* <CardActions className={classes.cardAction}>
            <Button size="small"><Link to="/schedule" className={classes.link}>View budget</Link></Button>
            </CardActions> */}
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.card} raised>
            <CardContent>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
              BUDGET
              </Typography>
              <Typography variant="h5" component="h2">
                Total actual spending
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                As of TODAY'S DATE
              </Typography>
              <GlassCard
                amount={<NumberFormat value={totalActual} displayType={'text'} thousandSeparator={true} prefix={'$'} />}
                icon={<ArrowUpwardIcon/>}
                caption="35% Since last week"
                graph={<Donut actualAmountArr={actualAmountArr} categoriesArr={categoriesArr} />}
              />
            </CardContent>
            {/* <CardActions className={classes.cardAction}>
            <Button size="small"><Link to="/schedule" className={classes.link}>View budget</Link></Button>
            </CardActions> */}
          </Card>
        </Grid>
      </Grid>

      

    {/* <Container maxWidth={false}>
    <CountDown />
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
    </Container> */}
    </section>
  );
}
