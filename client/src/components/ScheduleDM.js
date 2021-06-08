import { React, useEffect, useState } from "react";

import TimelineDm from "./TimelineDM";
import TimelineItemDM from "./TimelineItemDM";

import "./App.scss";
import "./Schedule.scss";
import axios from "axios";

export default function CustomizedTimeline() {
  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    axios
      .get(`/api/milestones`)
      .then((response) => {
        console.log("The response:", response.data);
        setSchedule(response.data);

        console.log("schedule sate:", schedule);
      })
      .catch((error) => {
        const errorMessage = error;
        return errorMessage;
      });
  }, []);

  const timeline = schedule.map((data, idx) => (
    <TimelineItemDM
      data={data}
      key={idx}
      statusColor={{ statusColor: "#eb6060" }}
    />
  ));

  return (
    <>
      <div className="timeline-container">{timeline}</div>
    </>
  );
}
