import React from "react";
import CheckCircleTwoToneIcon from "@material-ui/icons/CheckCircleTwoTone";

// const completeOrNot =

const TimelineItem = ({ data }) => (
  <div className="timeline-item">
    <div className="timeline-item-content">
      <span className="tag" style={{ background: data.color }}>
        {data.description}
      </span>
      <p>Estimated Completion Date:</p>
      <p> {data.end_date}</p>
      <p className="status" style={{ background: data.status_color }}>
        {data.status}
      </p>
      {data.status === "Complete" ? (
        <span className="circle-complete">
          <CheckCircleTwoToneIcon style={{ fontSize: 30, color: "#53782b" }} />
        </span>
      ) : (
        <span className="circle" />
      )}
    </div>
  </div>
);

export default TimelineItem;
