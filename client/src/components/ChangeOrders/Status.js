import { makeStyles, Chip } from '@material-ui/core';
import CheckCircleTwoToneIcon from '@material-ui/icons/CheckCircleTwoTone';
import HighlightOffTwoToneIcon from '@material-ui/icons/HighlightOffTwoTone';
import HourglassFullTwoToneIcon from '@material-ui/icons/HourglassFullTwoTone';

const useStyle = makeStyles({
  approved: {
    borderColor: '#679436',
    '& > *': {
      color: '#679436',
    }
  },
  declined: {
    borderColor: '#8D0522',
    '& > *': {
      color: '#8D0522',
    }
  },
  pending: {
    borderColor: '#777',
    '& > *': {
      color: '#777',
    }
  },
});

export default function Status( { statusId }) {
  const classes = useStyle();

  let className = '';
  let icon = '';
  let statusDesc = '';

  switch(statusId) {
    case 1:
      className = classes.approved;
      icon = <CheckCircleTwoToneIcon/>
      statusDesc = 'APPROVED';
      break;
    case 2:
      className = classes.declined;
      icon = <HighlightOffTwoToneIcon />;
      statusDesc = 'DECLINED';
      break;
    default:
      className = classes.pending;  
      icon = <HourglassFullTwoToneIcon />;
      statusDesc = 'PENDING';
      break;
  }

  return (
    <Chip 
      className={className}
      icon={icon}
      label={statusDesc}
      variant="outlined"
    />
  )
}

