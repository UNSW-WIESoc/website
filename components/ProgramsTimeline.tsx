import { Box, Typography } from '@mui/material';
import Image from 'next/image';

const TimelineCard = ({ icon, text, date }) => (
  <Box textAlign="center">
    <Box sx={{
      width: '148px',
      height: '148px',
      borderRadius: '50%',
      border: '2px solid white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto',
    }}>
      <Image src={icon} alt={text} width={100} height={100} />
    </Box>
    <Typography level='body' className='light-white' sx={{marginTop: '18px'}}>{text}</Typography>
    <Typography level='subtitle' className='white' sx={{marginTop: '16px',fontWeight: 'bold'}}>{date}</Typography>
  </Box>
);

export default TimelineCard;