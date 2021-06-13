import {
  Card,
  CardContent,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {},
});

export default function GlassCard(props) {
  const classes = useStyles();

  const { title, amount, icon, caption, graph } = props;

  return (
    <Card style={{ backgroundColor: "rgba(255,255,255, 0.2)" }} raised>
      <CardContent>
        <Grid
          container
          spacing={3}
          direction="column"
          // justify="space-evenly"
          // alignItems="center"
        >
          <Grid item>
            <Typography color="textSecondary" gutterBottom variant="h6">
              {title}
            </Typography>

            <Typography color="textPrimary" variant="h4">
              {amount}
            </Typography>

            <Grid container direction="row">
              <div>{icon}</div>
              <Typography variant="body2">{caption}</Typography>
            </Grid>
          </Grid>
          
          <Grid item>{graph}</Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
