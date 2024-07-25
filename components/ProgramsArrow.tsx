import { Box, useMediaQuery  } from '@mui/material';

const Arrow = () => {
  return (
 <Box sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        alignItems: 'center',
       justifyContent: 'center',
        position: 'relative',
        left: { xs: '-26%', sm: '0' }, 
      '&:before': {
        content: '""',
        display: 'block',
        width: { xs: '2px', sm: '120px' },
        height: { xs: '40px', sm: '0px' },
        borderBottom: { xs: 'none', sm: '2px dashed white' },
        borderLeft: { xs: '2px dashed white', sm: 'none' },
        marginRight: { xs: '0px', sm: '5px' },
        marginBottom: { xs: '5px', sm: '0px' },
        position: 'relative',
        top: { xs: '0px', sm: '-30px' }
      },
      '&:after': {
        content: '""',
        display: 'block',
        width: '0',
        height: '0',
        borderTop: { xs: '8px solid white', sm: '6px solid transparent' },
        borderBottom: { xs: 'none', sm: '6px solid transparent' },
        borderLeft: { xs: '8px solid transparent', sm: '8px solid white' },
        borderRight: { xs: '8px solid transparent', sm: 'none' },
        transform: { xs: 'translateY(0)', sm: 'translateY(-30px)' },
        marginTop: { xs: '0px', sm: '0px' },
        marginLeft: { xs: '0px', sm: '0px' }
      }
    }} />
  );
};


export default Arrow;