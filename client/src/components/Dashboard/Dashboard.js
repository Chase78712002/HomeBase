import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import NumberFormat from "react-number-format";

// @material-ui imports
import { makeStyles, Typography, Grid, Card, CardContent, Button } from "@material-ui/core";

// app imports
import Title from "../Title";
import GlassCard from "./GlassCard";
import ProjectInfo from "./ProjectInfo";
import RecentChangeOrders from "./RecentChangeOrders";
import RecentSpending from "./RecentSpending";
import Donut from "./Donut";
import Countdown from "./CountDownCard";
import UpcomingMilestones from "./UpcomingMilestones";

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
    color: theme.palette.text.secondary,
  },
  card: {
    backgroundColor: "rgba(255,255,255, 0.2)",
    marginBottom: "25px",
    height: "100%",
  },
}));

export default function Dashboard() {
  const classes = useStyles();

  // const classes = useStyles();
  // const background ={backgroundImage:'url("/Images/Houses/bg1.jpg")'}
  // style={background}
  const [state, setState] = useState({
    budgetData: [],
    changeOrderData: [],
    milestoneData: [],
    projectData: [],
  });
  const [filteredMilestones, setFilteredMilestones] = useState([]);

  const totalBudget = state.budgetData
    .map((budgetObj) => budgetObj.estimate_amount)
    .reduce((acc, val) => acc + val, 0);

  const totalActual = state.budgetData
    .map((budgetObj) => budgetObj.actual_amount)
    .reduce((acc, val) => acc + val, 0);

  const categoriesArr = state.budgetData.map((obj) => obj.description);
  const actualAmountArr = state.budgetData.map(
    (budgetObj) => budgetObj.actual_amount
  );

  useEffect(() => {
    Promise.all([
      axios.get("/api/budget_categories"),
      axios.get("/api/change_orders"),
      axios.get("/api/milestones"),
      axios.get("/api/projects"),
    ]).then((all) => {
      setState((prev) => ({
        ...prev,
        budgetData: all[0].data,
        changeOrderData: all[1].data,
        milestoneData: all[2].data,
        projectData: all[3].data,
      }));
    });
  }, []);

  const upcomingMilestonesData = state.milestoneData.map((data, dataIdx) => (
    <UpcomingMilestones key={dataIdx} milestone={data} />
  ));

  const projectsInfoData = state.projectData
    .slice(0, 1)
    .map((data, dataIdx) => <ProjectInfo key={dataIdx} projectsInfo={data} />);

  return (
    <section className="content">
      <Title title={"Project Dashboard"} />

      <Grid container className={classes.root} spacing={1}>
        <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.card} raised>
            <CardContent>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                PROJECT INFO
              </Typography>
              {projectsInfoData}
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.card} raised>
            <CardContent>
              <Button size="small">
                <Link to="/schedule" className={classes.link}>
                  SCHEDULE &amp; MILESTONES
                </Link>
              </Button>
              <Typography variant="h5" component="h2" color="secondary">
                Countdown to possession day!
              </Typography>
              <Countdown />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.card} raised>
            <CardContent>
              <Button size="small">
                <Link to="/schedule" className={classes.link}>
                  SCHEDULE &amp; MILESTONES
                </Link>
              </Button>
              <Typography variant="h5" component="h2" color="secondary">
                Upcoming milestones
              </Typography>
              <UpcomingMilestones milestone={state.milestoneData} />
              <Typography variant="body2" component="div">
                {upcomingMilestonesData}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={8}>
          <Card className={classes.card} raised>
            <CardContent>
              <Button size="small">
                <Link to="/budget" className={classes.link}>
                  BUDGET
                </Link>
              </Button>
              <Typography variant="h5" component="h2" color="secondary">
                Estimate vs. actual
              </Typography>
              <RecentSpending data={state.budgetData} />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card className={classes.card} raised>
            <CardContent>
              <Button size="small">
                <Link to="/budget" className={classes.link}>
                  BUDGET
                </Link>
              </Button>
              <Typography variant="h5" component="h2" color="secondary">
                Total budget
              </Typography>
              <GlassCard
                amount={<NumberFormat value={totalBudget} displayType={'text'} thousandSeparator={true} prefix={'$'} />}
              />
              <Typography variant="h5" component="h2" color="secondary">
                Total actual spending
              </Typography>
              <GlassCard
                amount={
                  <NumberFormat
                    value={totalActual}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"$"}
                  />
                }
                graph={
                  <Donut
                    actualAmountArr={actualAmountArr}
                    categoriesArr={categoriesArr}
                  />
                }
              />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </section>
  );
}
