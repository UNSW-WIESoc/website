import { Box, Typography } from '@mui/material';
import Image from 'next/image';

const TimelineCard = ({ icon, text, date }) => (
  <Box textAlign="center">
    <Box sx={{
      width: '110px',
      height: '110px',
      borderRadius: '50%',
      border: '2px solid white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto',
    }}>
      <Image src={icon} alt={text} width={60} height={60} />
    </Box>
    <Typography level='body' className='light-white' sx={{ marginTop: '12px' }}>{text}</Typography>
    <Typography level='subtitle' className='white' sx={{ marginTop: '6px' }}>{date}</Typography>
  </Box>
);

export default TimelineCard;