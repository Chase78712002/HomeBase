import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import { Avatar, CardActionArea, CardMedia, IconButton } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  houseImage: {
    height: "150px",
  }
});

export default function ProjectItem(props) {
  const classes = useStyles();
  const { avatarSrc, name, start_date, address, image} = props

  const clientFullName = `${props.client.first_name} ${props.client.last_name}`
  
  return (
    <Card className={classes.root} variant="outlined">
      <CardActionArea component={Link} to={`/dashboard`}>

        <CardHeader
          avatar={
            <Avatar 
            src={avatarSrc}
            >
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={clientFullName}
          subheader={start_date}
        />
        <CardMedia
          className={classes.houseImage}
          image={image}
        />
        <CardContent>
          
          <Typography variant="h5" component="h2">
            {name}
          </Typography>
          
          <Typography variant="body2" component="p">
            {address}
          </Typography>
        </CardContent>

      </CardActionArea>
    </Card>
  );
}
