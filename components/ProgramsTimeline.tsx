import { Box, Stack } from '@mui/material';
import Image from 'next/image';
import HeadingBodyText from '@/components/HeadingBodyText';
import { FC } from 'react';
import Typography from '@mui/joy/Typography';
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
        width: { xs: '2px', sm: '90px' },
        height: { xs: '20px', sm: '0px' },
        borderBottom: { xs: 'none', sm: '2px dashed white' },
        borderLeft: { xs: '2px dashed white', sm: 'none' },
        marginRight: { xs: '0px', sm: '0px' },
        marginBottom: { xs: '3px', sm: '0px' },
        position: 'relative',
        top: { xs: '0px', sm: '-35px' }
      },
      '&:after': {
        content: '""',
        display: 'block',
        width: '0',
        height: '0',
        borderTop: { xs: '6px solid white', sm: '4px solid transparent' },
        borderBottom: { xs: 'none', sm: '4px solid transparent' },
        borderLeft: { xs: '6px solid transparent', sm: '4px solid white' },
        borderRight: { xs: '6px solid transparent', sm: 'none' },
        transform: { xs: 'translateY(0)', sm: 'translateY(-35px)' },
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
        width: { xs: '90px', sm: '110px' }, 
        height: { xs: '90px', sm: '110px' },
        borderRadius: '50%',
        border: '1px solid white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: { xs: '0', sm: '0' },
      }}
    >
      <Image src={icon} alt={text} width={60} height={60} />
    </Box>
    <Box
      sx={{
        textAlign: { xs: 'center', sm: 'center' },
        ml: { xs: 5, sm: 0 }, 
        mt: { xs: 0, sm: 1 }, 
      }}
    >
      <Typography 
        level="body-sm"
        className="light-white"
        sx={{ marginTop: { xs: '0', sm: '18px' }, fontSize: '0.875rem', whiteSpace: 'nowrap'}}
      >
        {text}
      </Typography>
      
      <Typography
        level="body-xs"
        className="white"
        sx={{ marginTop: { xs: '12px', sm: '16px' }, fontWeight: 'bold', fontSize: '0.875rem', whiteSpace: 'nowrap'}}
      >
        {date}
      </Typography>
    </Box>
  </Box>
);

const Timeline = () => {
  return (
      <Box className='bg-medium-blue' sx={{ justifyContent: 'center', pt: 8, pb: 2 }} pb={3} mb={10} width='100%'>
      <Typography level='subtitle-lg' className='light-white' sx={{ mb: 4, textAlign: 'center'}}>
      Checkpoint Events
      </Typography>
      <Stack
        direction={{ xs: 'column', sm: 'row' }} 
        justifyContent="center"
        alignItems='center'
        spacing={3}
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