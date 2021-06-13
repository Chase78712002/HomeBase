import { React, useEffect, useState } from "react";

import TimelineItem from "./TimelineItem";
import AddNewTimeline from "./AddNewTimeline";

import "../App.scss";
import "./Schedule.scss";
import axios from "axios";

export default function Schedule() {
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
    <TimelineItem data={data} key={idx} />
  ));

  return (
    <div>
      <div>
        <AddNewTimeline />
      </div>
      <div className="timeline-container">{timeline}</div>
    </div>
  );
}
