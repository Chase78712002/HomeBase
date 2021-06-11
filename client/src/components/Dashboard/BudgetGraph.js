import { CircularProgress } from "@material-ui/core";
import React from "react";
import { Pie, Bar } from "react-chartjs-2";

export default function DocSummary({ budgetInfo }) {
  if (!budgetInfo) {
    console.log("Still loading");
    return <CircularProgress />;
  }

  const budgetLabels = budgetInfo.map((item) => item.description);
  const budgetEstimates = budgetInfo.map((item) => item.estimate_amount);
  const budgetActual = budgetInfo.map((item) => item.actual_amount);
  const budgetPercentages = budgetInfo.map((item) =>
    Math.floor((item.actual_amount / item.estimate_amount) * 100)
  );

  console.log(budgetPercentages);

  return (
    <div>
      <Pie
        data={{
          labels: budgetLabels,
          datasets: [
            {
              label: "%",
              data: budgetPercentages,
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
              ],
              borderWidth: 2,
            },
            // {
            //   label: "Actual",
            //   data: budgetActual,
            //   backgroundColor: [
            //     "rgba(255, 99, 132, 0.5)",
            //     "rgba(54, 162, 235, 0.5)",
            //     "rgba(255, 206, 86, 0.5)",
            //   ],
            //   borderColor: [
            //     "rgba(255, 99, 132, 1)",
            //     "rgba(54, 162, 235, 1)",
            //     "rgba(255, 206, 86, 1)",
            //   ],
            //   borderWidth: 2,
            // },
          ],
        }}
        height={400}
        width={600}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Budget at a Glance",
            },
            legend: {
              position: "right",
            },
          },
        }}
      />
      <Bar
        data={{
          labels: budgetLabels,
          datasets: [
            {
              label: "%",
              data: budgetPercentages,
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
              ],
              borderWidth: 2,
            },
            // {
            //   label: "Actual",
            //   data: budgetActual,
            //   backgroundColor: [
            //     "rgba(255, 99, 132, 0.5)",
            //     "rgba(54, 162, 235, 0.5)",
            //     "rgba(255, 206, 86, 0.5)",
            //   ],
            //   borderColor: [
            //     "rgba(255, 99, 132, 1)",
            //     "rgba(54, 162, 235, 1)",
            //     "rgba(255, 206, 86, 1)",
            //   ],
            //   borderWidth: 2,
            // },
          ],
        }}
        height={400}
        width={600}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Budget at a Glance",
            },
            legend: {
              display: false,
            },
          },
          scales: {
            x: {
              display: true,
              title: {
                display: true,
                text: "Budget Categories",
                color: "#911",
                font: {
                  family: "Roboto",
                  size: 20,
                  weight: "bold",
                  lineHeight: 1.2,
                },
                padding: { top: 20, left: 0, right: 0, bottom: 0 },
              },
            },
            y: {
              display: true,
              min: 0,
              max: 100,
              title: {
                display: true,
                text: "% of Total per Budget Category",
                color: "#191",
                font: {
                  family: "Roboto",
                  size: 20,
                  style: "normal",
                  lineHeight: 1.2,
                },
                padding: { top: 30, left: 0, right: 0, bottom: 0 },
              },
            },
          },
        }}
      />
    </div>
  );
}
