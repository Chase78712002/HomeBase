import { colors, Grid, useTheme } from "@material-ui/core";
import { Doughnut } from "react-chartjs-2";

export default function Donut(props) {
  const theme = useTheme();
  console.log(props.actualAmountArr);
  const data = {
    datasets: [
      {
        data: props.actualAmountArr,
        backgroundColor: [
          colors.indigo[500],
          colors.red[600],
          colors.orange[600],
          colors.amber[600],
          colors.teal[500],
          colors.red[100],
          colors.purple[400],
          colors.green[300],
        ],
        borderWidth: 2,
        borderColor: colors.common.white,
        hoverBorderColor: colors.common.white,
      },
    ],
    labels: props.categoriesArr,
  };

  const options = {
    animation: true,
    cutout: '40%',
    layout: { padding: 0 },
    legend: {
      display: false,
    },
    maintainAspectRatio: true,
    responsive: true,
    tooltips: {
      backgroundColor: theme.palette.background.paper,
      bodyFontColor: theme.palette.text.secondary,
      borderColor: theme.palette.divider,
      borderWidth: 1,
      enabled: true,
      footerFontColor: theme.palette.text.secondary,
      intersect: false,
      mode: "index",
      titleFontColor: theme.palette.text.primary,
    },
  };
  return (
    <Grid item>
      <Doughnut data={data} options={options} />
    </Grid>
  );
}
