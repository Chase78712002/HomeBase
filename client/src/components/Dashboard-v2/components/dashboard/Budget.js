import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import MoneyIcon from "@material-ui/icons/Money";
import { red } from "@material-ui/core/colors";

const useStyles = makeStyles({
  root: {
    background: "rgba(255,255,255, 0.4)",
  },
});

export default function Budget(props) {
  const classes = useStyles();

  return (
    <Card style={{backgroundColor:"transparent"}}>
      <CardContent>
        <Grid
          container
          spacing={3}
          direction="row"
          justify="space-evenly"
          alignItems="center"
        >
          <Grid item>
            <Typography color="textSecondary" gutterBottom variant="h6">
              BUDGET
            </Typography>

            <Typography color="textPrimary" variant="h3">
              $24,000
            </Typography>

            <Grid container direction="row" justify="space-evenly">
              <ArrowDownwardIcon />
              <Typography variant="body2">12%</Typography>
              <Typography color="textSecondary" variant="caption">
                Since last month
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
