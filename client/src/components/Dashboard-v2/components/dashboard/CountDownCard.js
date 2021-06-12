import { Box, Card, CardContent, CardHeader, Grid } from "@material-ui/core";
import React, { useState } from "react";

export default function CountDown(props) {
  const [days, setDays] = useState(10);
  const [hours, setHours] = useState(9);
  const [minutes, setMinutes] = useState(8);
  const [seconds, setSeconds] = useState(7);

  const boxProps = {
    bgcolor: "transparent",
    borderColor: "text.primary",
    fontSize: 30,
    m: 0,
    border: 5,
    style: { width: "4rem", height: "4rem" },
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
  };

  return (
    <Card style={{ backgroundColor: "rgba(255,255,255, 0.2)" }} raised borderRadius={50}>
      <CardHeader title="Countdown to possession day" />
      <CardContent>
        <Grid container justify="space-evenly">
          <Box display="flex" flexDirection="column" alignItems="center">
            <Box textAlign="center"  borderRadius={16} {...boxProps}>
              {days}
            </Box>
            <Box>
              <h3>Days</h3>
            </Box>
          </Box>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Box textAlign="center" borderRadius={16} {...boxProps}>
              {hours}
            </Box>
            <Box>
              <h3>Hours</h3>
            </Box>
          </Box>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Box textAlign="center" borderRadius={16} {...boxProps}>
              {minutes}
            </Box>
            <Box>
              <h3>Minutes</h3>
            </Box>
          </Box>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Box textAlign="center" borderRadius={16} {...boxProps}>
              {seconds}
            </Box>
            <Box>
              <h3>Seconds</h3>
            </Box>
          </Box>
        </Grid>
      </CardContent>
    </Card>
  );
}
