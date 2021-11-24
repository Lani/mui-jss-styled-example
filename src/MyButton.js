import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
const PREFIX = 'MyButton';

const classes = {
  root: `${PREFIX}-root`,
  contained: `${PREFIX}-contained`
};

const StyledButton = styled(Button)({
  [`& .${classes.root}`]: {
    borderRadius: '8px',
  },
  [`& .${classes.contained}`]: {
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
  /*
    Need to uncomment generated classes statement for the project to compile.
  */
  return <StyledButton {...props} /*{classes}*/ />;
}
