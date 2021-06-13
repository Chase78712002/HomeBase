import { React, useEffect, useState } from "react";

import TimelineItem from "./TimelineItem";
import AddNewTimeline from "./AddNewTimeline";

import "../App.scss";
import "./Schedule.scss";

import Title from "./Title";

import axios from "axios";

export default function Schedule() {
  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    axios
      .get(`/api/milestones`)
      .then((response) => {
        setSchedule(response.data);
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
    <section className="content">
      <Title title={"Schedule and Milestones"} />
      <div className="timeline-container">{timeline}</div>
    </section>
  );
}
