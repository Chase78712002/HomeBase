import React from "react";
import timelineData from "./dataDM";
import TimelineItemDM from "./TimelineItemDM";

const TimelineDM = () =>
  timelineData.length > 0 && (
    <div className="timeline-container">
      {timelineData.map((data, idx) => (
        <TimelineItemDM data={data} key={idx} />
      ))}
    </div>
  );

export default TimelineDM;
