import { Box, Typography, Stack } from '@mui/material';
import Image from 'next/image';
import HeadingBodyText from '@/components/HeadingBodyText';
import { FC } from 'react';

interface TimelineCardProps {
  icon: string;
  text: string;
  date: string;
}
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

const TimelineCard: FC<TimelineCardProps> = ({ icon, text, date }) => (
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
        variant="body1"
        className="light-white"
        sx={{ marginTop: { xs: '0', sm: '18px' } }}
      >
        {text}
      </Typography>
      <Typography
        variant="subtitle1"
        className="white"
        sx={{ marginTop: { xs: '12px', sm: '16px' }, fontWeight: 'bold' }}
      >
        {date}
      </Typography>
    </Box>
  </Box>
);

const Timeline = () => {
  return (
      <Box className='bg-medium-blue' sx={{ justifyContent: 'center' }} pb={3} width='100%'>
      <HeadingBodyText heading='Checkpoint Events' body={''} color='light-white' />
      <Stack
        direction={{ xs: 'column', sm: 'row' }} 
        justifyContent="center"
        alignItems='center'
        spacing={5}
        pb={10}
        sx={{ width: { xs: '90%', md: '65%' }, mx: 'auto' }} 
      >
        <TimelineCard icon='/programs/Stage.svg' text='Introductory Ceremony' date='7th March 2024' />
        <Arrow />
        <TimelineCard icon='/programs/Level1.svg' text='Mid-term Checkpoint 1' date='14th March 2024' />
        <Arrow />
        <TimelineCard icon='/programs/Level2.svg' text='Mid-term Checkpoint 2' date='23rd March 2024' />
        <Arrow />
        <TimelineCard icon='/programs/Trophy.svg' text='Concluding Ceremony' date='11th April 2024' />
      </Stack>
    </Box>
  )
}

export default Timeline;