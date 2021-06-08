import React from "react";

const TimelineItemDM = ({ data }) => (
  <div className="timeline-item">
    <div className="timeline-item-content">
      <span className="tag" style={{ background: data.color }}>
        {data.description}
      </span>
      <p>Start date: {data.start_date}</p>
      <p>End date: {data.end_date}</p>
      <p className="status" style={{ background: data.status_color }}>
        {data.status}
      </p>
      <span className="circle"></span>
    </div>
  </div>
);

export default TimelineItemDM;
