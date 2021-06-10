import React from "react";

import { useEffect, useState } from "react";
import axios from "axios";

import CardInfo from "./CardInfo";

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
  useEffect(() => {
    Promise.all([
      axios.get("/api/projects"),
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

  return <CardInfo projectInfo={state.projectInfo[0]} />;
}
