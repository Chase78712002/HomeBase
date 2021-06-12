import { React, useEffect, useState } from "react";

import TimelineItem from "./TimelineItem";

import "./App.scss";
import "./Schedule.scss";

import Title from "./Title";

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
  }, [schedule]);

  const timeline = schedule.map((data, idx) => (
    <TimelineItem data={data} key={idx} />
  ));

  return (
    <section className="content">
      <Title title={"Schedule and Milestones"} />
      <div className="timeline-container">{timeline}</div>
    </section>
  );
}
