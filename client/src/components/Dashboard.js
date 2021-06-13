import { Link } from "react-router-dom";

// @material-ui imports
import { makeStyles, Typography, Divider, Button, Grid, Card, CardContent, CardActions } from "@material-ui/core";
import HourglassFullTwoToneIcon from '@material-ui/icons/HourglassFullTwoTone';

// app imports
import Title from './Title';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  cardAction: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  link: {
    textDecoration: 'none',
    color: '#679436',
  }
});

export default function Dashboard() {
  const classes = useStyles();

  return (
    <section className="content">
      <Title title={"Project Dashboard"} />

      <Grid container className={classes.root} spacing={1}>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                PROJECT INFO
              </Typography>
              <Typography variant="h5" component="h2">
                Project name
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                adjective
              </Typography>
              <Typography variant="body2" component="p">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
              </Typography>
            </CardContent>
            <CardActions className={classes.cardAction}>
            <Button size="small"><Link to="/schedule" className={classes.link}>View schedule</Link></Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={8}>
          <Card>
            <CardContent>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                SCHEDULE
              </Typography>
              <Typography variant="h5" component="h2">
                Possesion day countdown
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                adjective
              </Typography>
              <Typography variant="body2" component="p">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
              </Typography>
            </CardContent>
            <CardActions className={classes.cardAction}>
              <Button size="small"><Link to="/schedule" className={classes.link}>View schedule</Link></Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={6}>
          <Card>
            <CardContent>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                BUDGET
              </Typography>
              <Typography variant="h5" component="h2">
                Spending to date
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                adjective
              </Typography>
              <Typography variant="body2" component="p">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
              </Typography>
            </CardContent>
            <CardActions className={classes.cardAction}>
            <Button size="small"><Link to="/budget" className={classes.link}>View budget</Link></Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={6}>
          <Card>
            <CardContent>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                BUDGET
              </Typography>
              <Typography variant="h5" component="h2">
                Card title
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                adjective
              </Typography>
              <Typography variant="body2" component="p">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
              </Typography>
            </CardContent>
            <CardActions className={classes.cardAction}>
            <Button size="small"><Link to="/budget" className={classes.link}>View budget</Link></Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={12} sm={12} md={12}>
          <Card>
            <CardContent>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                SECTION TITLE
              </Typography>
              <Typography variant="h5" component="h2">
                Card title
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                adjective
              </Typography>
              <Typography variant="body2" component="p">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
              </Typography>
            </CardContent>
            <CardActions className={classes.cardAction}>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </section>
  );
}
