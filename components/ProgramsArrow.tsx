import { Box } from '@mui/material';

const Arrow = () => (
  <Box sx={{
    display: 'flex',
    alignItems: 'center',
    '&:before': {
      content: '""',
      display: 'block',
      width: '120px',
      borderBottom: '2px dashed white',
      marginRight: '5px',
      position: 'relative',
      top: '-30px'
    },
    '&:after': {
      content: '""',
      display: 'block',
      width: '0',
      height: '0',
      borderTop: '6px solid transparent',
      borderBottom: '6px solid transparent',
      borderLeft: '8px solid white',
      transform: 'translateY(-30px)' 
    }
  }} />
);

export default Arrow;