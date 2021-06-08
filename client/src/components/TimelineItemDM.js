import React from "react";

const TimelineItemDM = ({ data }) => (
  <div className="timeline-item">
    <div className="timeline-item-content">
      <span className="tag" style={{ background: data.color }}>
        {data.description}
      </span>
      <p>Start date: {data.startDate}</p>
      <p>End date: {data.endDate}</p>
      <p>{data.status}</p>
      <p>
        This is extra content to fill the space here in the box to be a better
        representation of what it may look like if bigger
      </p>
      <span className="circle"></span>
    </div>
  </div>
);

export default TimelineItemDM;
