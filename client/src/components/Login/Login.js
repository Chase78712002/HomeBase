import React from "react";
import { makeStyles, Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function InputWithIcon(props) {
  const classes = useStyles();

  const [user, setUser] = useState("");
  const [userChange, setUserChange] = useState("");

  const handleLogin = (e) => {
    setUser(e);
  };

  return (
    <div>
      Logged in as: {user}
      <div className={classes.margin}>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <AccountCircle />
          </Grid>
          <Grid item>
            <TextField
              id="input-with-icon-grid"
              label="Email"
              onChange={(e) => setUserChange(e.target.value)}
            />
          </Grid>

          <Grid item>
            {/* REPLACE ICON BELOW */}
            <AccountCircle />
          </Grid>
          <Grid item>
            <TextField
              id="input-with-icon-grid"
              label="Password"
              type="password"
            />
          </Grid>
        </Grid>

        <a href="../projects" style={{ "text-decoration": "none" }}>
          <Button
            className={classes.button}
            variant="contained"
            onClick={() => {
              handleLogin(userChange);
            }}
          >
            Login
          </Button>
        </a>
      </div>
    </div>
  );
}
