import React from "react";
import CheckCircleTwoToneIcon from "@material-ui/icons/CheckCircleTwoTone";

// const completeOrNot =

const TimelineItem = ({ data }) => (
  <div className="timeline-item">
    <div className="timeline-item-content">
      <span className="tag" style={ data.status === "Complete" ? {color: "#53782b"} : {color: "#aaa"}}>
        {data.status}
      </span>
      <h3 className="status">
        {data.description}
      </h3>
      <p>Estimated: {data.end_date}</p>
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
