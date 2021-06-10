import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import HomeTwoToneIcon from "@material-ui/icons/HomeTwoTone";
import { CircularProgress } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function OverviewCard({ projectInfo }) {
  const classes = useStyles();

  if (!projectInfo) {
    console.log("Still loading");
    return <CircularProgress className={classes.progress} />;
  }

  return (
    <Card className={classes.root} raised={true}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            <HomeTwoToneIcon fontSize="large" />
          </Avatar>
        }
        // action={
        //   <IconButton aria-label="settings">    Could re-implement with some options?
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        title={projectInfo.name}
        subheader={projectInfo.start_date}
      />
      <CardMedia
        className={classes.media}
        image="https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fjordanlulich%2Ffiles%2F2018%2F06%2Fcanstockphoto137073-1200x798.jpg"
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          ullamcorper turpis augue, sit amet ultrices dui eleifend ut.
          Suspendisse fermentum magna sit amet ultricies pulvinar. Phasellus
          aliquet ipsum sed enim eleifend, in dapibus massa aliquam.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        {/* //REMOVED A EXPANDABLE SECTION HERE, could be put back if we can determine what to put in it */}
      </CardActions>
    </Card>
  );
}
