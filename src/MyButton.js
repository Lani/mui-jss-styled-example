import { Button } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    borderRadius: '8px',
  },
  contained: {
    '& > *': {
      color: 'yellow',
    },
    backgroundColor: 'red',
    '&:hover': {
      backgroundColor: 'white',
    }
  },
});


/**
 * A base button component used internally
 *
 */
export default function MyButton(
  props
) {
  const classes = useStyles();
  return <Button {...props} classes={classes} />;
}
