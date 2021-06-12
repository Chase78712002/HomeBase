import { Bar } from 'react-chartjs-2';
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  useTheme,
  colors
} from '@material-ui/core';

const RecentSpending = (props) => {
  const theme = useTheme();
  const estAmountArr = props.data.map(budgetObj => budgetObj.estimate_amount)
  const actualAmountArr = props.data.map(budgetObj => budgetObj.actual_amount);
  const maxEstAmount = Math.max(...estAmountArr)
  const minEstAmount = Math.min(...estAmountArr)
  const midEstAmount = (maxEstAmount + minEstAmount)/2
  const categoriesArr = props.data.map(obj => obj.description)

  const data = {
    datasets: [
      {
        backgroundColor: colors.red[300],
        data: estAmountArr,
        label: 'Estimate'
      },
      {
        backgroundColor: colors.green[600],
        data: actualAmountArr,
        label: 'Actual'
      }
    ],
    labels: categoriesArr
  };

  const options = {
    animation: true,
    cornerRadius: 10,
    layout: { padding: 0 },
    legend: { display: false },
    maintainAspectRatio: true,
    responsive: true,
    scales: {
      x:[{
          barThickness: 1,
          maxBarThickness: 10,
          barPercentage: 10,
          categoryPercentage: 10,
          ticks: {
            fontColor: theme.palette.text.secondary
          },
          gridLines: {
            display: false,
            drawBorder: false
          }
        }]
      ,
      y: {
        min: 0,
        max: midEstAmount
    }
      // y:[{
      //     ticks: {
      //       fontColor: theme.palette.text.secondary,
      //       beginAtZero: true,
      //       suggestedMin: 0,
      //       suggestedMax: 10000
      //     },
      //     gridLines: {
      //       borderDash: [2],
      //       borderDashOffset: [2],
      //       color: theme.palette.divider,
      //       drawBorder: false,
      //       zeroLineBorderDash: [2],
      //       zeroLineBorderDashOffset: [2],
      //       zeroLineColor: theme.palette.divider
      //     },
      //   }]
  
    },
    tooltips: {
      backgroundColor: theme.palette.background.paper,
      bodyFontColor: theme.palette.text.secondary,
      borderColor: theme.palette.divider,
      borderWidth: 1,
      enabled: true,
      footerFontColor: theme.palette.text.secondary,
      intersect: false,
      mode: 'index',
      titleFontColor: theme.palette.text.primary
    }
  };

  return (
    <Card style={{ backgroundColor: "rgba(255,255,255, 0.2)" }} raised>
      <CardHeader title="Recent Spending" />
      <Divider />
      <CardContent>
        <Box>
          <Bar
            data={data}
            options={options}
          />
        </Box>
      </CardContent>
      <Divider />
    </Card>
  );
};

export default RecentSpending;
