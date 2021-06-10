import React from "react";

import { useEffect, useState } from "react";
import axios from "axios";

import CardImage from "./CardImage";
import DocSummary from "./DocSummary";

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
  console.log("this set yet?", state.documentInfo);

  return (
    <>
      <CardImage projectInfo={state.projectInfo[0]} />
      <DocSummary documentInfo={state.documentInfo} />
    </>
  );
}
