import React from "react";

import { useEffect, useState } from "react";
import axios from "axios";

import CardImage from "./CardImage";
import DocSummary from "./DocSummary";
import BudgetGraph from "./BudgetGraph";
import "./Dashboard.scss";

import { CircularProgress } from "@material-ui/core";
import { PieChart, Pie, ResponsiveContainer, Cell } from "recharts";

/*We need to grab info about the:
 -project -> description, start date, For client: ___
 -budget
 -documents
 -pending change orders
 -next upcoming milestone
*/

export default function OutlinedCard() {
  const [state, setState] = useState({
    projectInfo: [],
    budgetInfo: [],
    documentInfo: [],
    changeOrderInfo: [],
    milestoneInfo: [],
  });

  // retrieve all required data via promise.all
  useEffect((id) => {
    Promise.all([
      axios.get("/api/projects"), //This get call needs to be changed to accept an id -> like this axios.get(`/api/projects/${id}`)
      axios.get("/api/budget_categories"),
      axios.get("/api/documents"),
      axios.get("/api/change_orders"),
      axios.get("/api/milestones"),
    ])
      .then((all) => {
        setState((prev) => ({
          ...prev,
          projectInfo: all[0].data,
          budgetInfo: all[1].data,
          documentInfo: all[2].data,
          changeOrderInfo: all[3].data,
          milestoneInfo: all[4].data,
        }));
      })
      .catch((error) => console.log(error));
  }, []);

  const data1 = [
    { name: "Facebook", value: 200000 },
    { name: "Twitter", value: 93213 },
    { name: "Youtube", value: 440000 },
  ];

  const data = state.budgetInfo.map((item, itemIdx) => ({ ...item }));

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className="dashboard">
      <CardImage projectInfo={state.projectInfo[0]} />
      <DocSummary documentInfo={state.documentInfo} />
      <BudgetGraph budgetInfo={state.budgetInfo} />
    </div>
  );
}
