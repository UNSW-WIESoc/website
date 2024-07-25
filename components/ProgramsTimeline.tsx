import { Box, Typography } from '@mui/material';
import Image from 'next/image';

const TimelineCard = ({ icon, text, date }) => (
<Box
    textAlign="center"
    sx={{
      display: 'flex',
      flexDirection: { xs: 'row', sm: 'column' },
      alignItems: 'center', 
      justifyContent: 'center' ,
      width: '100%', 

    }}
  >
    <Box
      sx={{
        width: { xs: '125px', sm: '148px' }, 
        height: { xs: '125px', sm: '148px' },
        borderRadius: '50%',
        border: '2px solid white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: { xs: '0', sm: '0' },
      }}
    >
      <Image src={icon} alt={text} width={90} height={90} />
    </Box>
    <Box
      sx={{
        textAlign: { xs: 'center', sm: 'center' },
        ml: { xs: 7, sm: 0 }, 
        mt: { xs: 0, sm: 2 }, 
      }}
    >
      <Typography
        level="body"
        className="light-white"
        sx={{ marginTop: { xs: '0', sm: '18px' } }}
      >
        {text}
      </Typography>
      <Typography
        level="subtitle"
        className="white"
        sx={{ marginTop: { xs: '12px', sm: '16px' }, fontWeight: 'bold' }}
      >
        {date}
      </Typography>
    </Box>
  </Box>
);


export default TimelineCard;