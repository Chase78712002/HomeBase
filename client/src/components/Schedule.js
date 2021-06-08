import { React, useEffect, useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import BuildIcon from "@material-ui/icons/Build";
import LaptopMacIcon from "@material-ui/icons/LaptopMac";
import HotelIcon from "@material-ui/icons/Hotel";
import RepeatIcon from "@material-ui/icons/Repeat";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import timelineData from "./dataDM";
import "./App.scss";
import "./Schedule.scss";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "6px 16px",
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

export default function CustomizedTimeline() {
  // const [schedule, setSchedule] = useState([]);

  const classes = useStyles();

  // useEffect(() => {
  //   axios
  //     .get(`/api/milestones`)
  //     .then((response) => {
  //       // console.log(response.data[0].description);
  //       setSchedule((prev) => ({
  //         ...prev,
  //         schedule: response.data[0],
  //       }));
  //       console.log("schedule sate:", schedule);
  //     })
  //     .catch((error) => {
  //       const errorMessage = error;
  //       return errorMessage;
  //     });
  // }, []);

  const TimelineRepeat = () =>
    timelineData.length > 0 && (
      <div>
        {timelineData
          .filter((timelineData) => timelineData.id % 2)
          .map((timelineData, idx) => (
            <Timeline key={idx} align="alternate">
              {timelineData.id}
              <TimelineItem>
                <TimelineOppositeContent>
                  <Typography variant="body2" color="textSecondary">
                    {timelineData.startDate}
                  </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot>
                    <BuildIcon />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Paper elevation={3} className={classes.paper}>
                    <Typography variant="h6" component="h1">
                      {timelineData.description}
                    </Typography>
                    <Typography>End date: {timelineData.endDate}</Typography>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          ))}
        {timelineData
          .filter((timelineData) => timelineData.id % 3)
          .map((timelineData, idx) => (
            <Timeline key={idx} align="alternate">
              {timelineData.id}
              <TimelineItem>
                {timelineData.id}
                <TimelineOppositeContent>
                  <Typography variant="body2" color="textSecondary">
                    {timelineData.startDate}
                  </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot>
                    <BuildIcon />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Paper elevation={3} className={classes.paper}>
                    <Typography variant="h6" component="h1">
                      {timelineData.description}
                    </Typography>
                    <Typography>Because you need strength</Typography>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          ))}
      </div>
    );

  return <TimelineRepeat />;
}
