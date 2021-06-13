import React from "react";
import EditTwoToneIcon from "@material-ui/icons/EditTwoTone";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import CheckCircleTwoToneIcon from "@material-ui/icons/CheckCircleTwoTone";

const TimelineItem = ({ data }) => (
  <div className="timeline-item">
    <div className="timeline-item-content">
      <span className="tag" style={{ background: data.color }}>
        {data.description}
      </span>
      <p>Estimated Completion Date:</p>
      <p> {data.end_date}</p>
      <p className="status" style={{ background: data.status_color }}>
        Status: {data.status}
      </p>
      {data.status === "Complete" ? (
        <span className="circle-complete">
          <CheckCircleTwoToneIcon style={{ fontSize: 30, color: "#53782b" }} />
        </span>
      ) : (
        <span className="circle" />
      )}
      <IconButton>
        <EditTwoToneIcon onClick={data.editMilestone}>Edit</EditTwoToneIcon>
      </IconButton>
    </div>
  </div>
);

export default TimelineItem;
