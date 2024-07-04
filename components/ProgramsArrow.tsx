import { Box } from '@mui/material';

const Arrow = () => (
  <Box sx={{
    display: 'flex',
    alignItems: 'center',
    top: '-20px',
    '&:before': {
      content: '""',
      display: 'block',
      width: '100px',
      borderBottom: '2px dashed white',
      marginRight: '4px',
      position: 'relative',
      top: '-1px'
    },
    '&:after': {
      content: '""',
      display: 'block',
      width: '0',
      height: '0',
      borderTop: '6px solid transparent',
      borderBottom: '6px solid transparent',
      borderLeft: '10px solid white',
      left: '-1px',
    }
  }} />
);

export default Arrow;