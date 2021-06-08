import { React, useEffect, useState } from "react";

import TimelineDm from "./TimelineDM";

import "./App.scss";
import "./Schedule.scss";
import axios from "axios";

export default function CustomizedTimeline() {
  // const [schedule, setSchedule] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get(`/api/milestones`)
  //     .then((response) => {
  //       // console.log(response.data[0].description);
  //       setSchedule((prev) => ({
  //         ...prev,
  //         schedule: response.data[0],
  //       }));
  //       console.log("schedule sate:", schedule);
  //     })
  //     .catch((error) => {
  //       const errorMessage = error;
  //       return errorMessage;
  //     });
  // }, []);

  return (
    <>
      <TimelineDm />
    </>
  );
}
