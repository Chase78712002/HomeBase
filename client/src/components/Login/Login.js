import React from "react";
import { makeStyles, Button } from "@material-ui/core";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { useState } from "react";
import { useEffect } from "react";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function InputWithIcon(props) {
  const classes = useStyles();

  const [user, setUser] = useState("");

  useEffect((event) => {
    setUser("event.target.value");
  }, []);

  return (
    <div>
      Logged in as: {user}
      <div className={classes.margin}>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <AccountCircle />
          </Grid>
          <Grid item>
            <TextField id="input-with-icon-grid" label="Email" onChange={}/>
          </Grid>

          <Grid item>
            {/* REPLACE ICON BELOW */}
            <AccountCircle />
          </Grid>
          <Grid item>
            <TextField id="input-with-icon-grid" label="Password" />
          </Grid>
        </Grid>

        <Button className={classes.button} variant="contained">
          Login
        </Button>
      </div>
    </div>
  );
}
