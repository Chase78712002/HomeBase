import { Box, Card, CardContent, CardHeader, Grid } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import React, { useEffect, useState } from "react";
import "./CountDownCard.scss";
import {add} from'date-fns'
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns';




export default function CountDown(props) {
  const [days, setDays] = useState(10);
  const [hours, setHours] = useState(9);
  const [minutes, setMinutes] = useState(8);
  const [seconds, setSeconds] = useState(7);
  const [isLoading, setLoading] = useState(true);
  const [selectedDate, setSelectedDate] = React.useState(add(new Date(), { months:1}) );


  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  console.log('days: ',days)
  const countdown = () => {
    const endDate = new Date(selectedDate).getTime();
    const today = new Date().getTime();

    const timeDiff = endDate - today;

    const second = 1000; // milisec
    const minute = 60 * second;
    const hour = 60 * minute;
    const day = 24 * hour;

    let timeDays = Math.floor(timeDiff / day);
    let timeHours = Math.floor((timeDiff % day) / hour);
    let timeMinutes = Math.floor((timeDiff % hour) / minute);
    let timeSeconds = Math.floor((timeDiff % minute) / second);

    timeHours = timeHours < 10 ? "0" + timeHours : timeHours;
    timeDays = timeDays < 10 ? "0" + timeDays : timeDays;
    timeMinutes = timeMinutes < 10 ? "0" + timeMinutes : timeMinutes;
    timeSeconds = timeSeconds < 10 ? "0" + timeSeconds : timeSeconds;

    setDays(timeDays);
    setHours(timeHours);
    setMinutes(timeMinutes);
    setSeconds(timeSeconds);
    setLoading(false);
    
  };

  useEffect(() => {
    
    const myInterval = setInterval(countdown, 100);

    const cleanup = () => {
      console.log('cleaning up ...')
      clearInterval(myInterval)
    }
    
    return cleanup;
  },[selectedDate]);

  const boxProps = {
    bgcolor: "transparent",
    borderColor: "text.primary",
    fontSize: 30,
    m: 0,
    border: 5,
    style: { width: "4rem", height: "4rem" },
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <Card style={{ backgroundColor: "rgba(255,255,255, 0.2)" }} raised >
      <CardHeader title="Countdown to possession day" />
      <MuiPickersUtilsProvider utils={DateFnsUtils} >
        <KeyboardDatePicker
          InputProps={{
            disableUnderline: true,
           }}
          margin="dense"
          id="date-picker-dialog"
          format="MMM dd yyyy"
          value={selectedDate}
          onChange={handleDateChange}
        />
      </MuiPickersUtilsProvider>
      <CardContent>
        {isLoading ? (
          <Box className="loading">
            <CircularProgress />
          </Box>
        ) : (
          <Grid container justify="space-evenly">
            <Box display="flex" flexDirection="column" alignItems="center">
              <Box textAlign="center" borderRadius={16} {...boxProps}>
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
        )}
      </CardContent>
    </Card>
  );
}
