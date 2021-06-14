// @material-ui imports
import { makeStyles, Chip } from '@material-ui/core';
import CheckCircleTwoToneIcon from '@material-ui/icons/CheckCircleTwoTone';
import HighlightOffTwoToneIcon from '@material-ui/icons/HighlightOffTwoTone';
import HourglassFullTwoToneIcon from '@material-ui/icons/HourglassFullTwoTone';

const useStyle = makeStyles((theme) => ({
  approved: {
    borderColor: theme.palette.secondary.main,
    '& > *': {
      color: theme.palette.secondary.main,
    }
  },
  declined: {
    borderColor: theme.palette.error.main,
    '& > *': {
      color: theme.palette.error.main,
    }
  },
}));

export default function Status( { statusId }) {
  const classes = useStyle();

  let className = '';
  let icon = '';
  let statusDesc = '';

  switch(statusId) {
    case 1:
      className = classes.approved
      icon = <CheckCircleTwoToneIcon/>
      statusDesc = 'APPROVED';
      break;
    case 2:
      className = classes.declined
      icon = <HighlightOffTwoToneIcon />;
      statusDesc = 'DECLINED';
      break;
    default:
      icon = <HourglassFullTwoToneIcon />;
      statusDesc = 'PENDING';
      break;
  }

  return (
    <Chip 
      icon={icon}
      label={statusDesc}
      className={className}
      variant="outlined"
    />
  )
}

