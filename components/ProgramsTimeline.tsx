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
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'column', md: 'row' }, 
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        left: { xs: '-20%', sm: '-12.5%', md: '0' },
        '&:before': {
          content: '""',
          display: 'block',
          width: { xs: '2px', sm: '2px', md: '90px' }, 
          height: { xs: '20px', sm: '20px', md: '0px' }, 
          borderBottom: { xs: 'none', sm: 'none', md: '2px dashed white' },
          borderLeft: { xs: '2px dashed white', sm: '2px dashed white', md: 'none' },
          marginRight: { xs: '0px', sm: '0px', md: '0px' },
          marginBottom: { xs: '0px', sm: '0px', md: '0px' },
          position: 'relative',
          top: { xs: '0px', sm: '0px', md: '-35px' },
        },
        '&:after': {
          content: '""',
          display: 'block',
          width: '0',
          height: '0',
          borderTop: { xs: '4px solid white', sm: '4px solid white', md: '4px solid transparent' },
          borderBottom: { xs: 'none', sm: 'none', md: '4px solid transparent' },
          borderLeft: { xs: '4px solid transparent', sm: '4px solid transparent', md: '4px solid white' },
          borderRight: { xs: '4px solid transparent', sm: '4px solid transparent', md: 'none' },
          transform: { xs: 'translateY(0)', sm: 'translateY(0)', md: 'translateY(-35px)' },
          marginLeft: { xs: '0px', sm: '0px', md: '0px' },
        },
      }}
    />
  );
};

const TimelineCard: FC<TimelineCardProps> = ({ icon, text, date }) => (
  <Box
    textAlign="center"
    sx={{
      display: 'flex',
      flexDirection: { xs: 'row', sm: 'row', md: 'column' }, 
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
    }}
  >
    <Box
      sx={{
        width: { xs: '90px', sm: '90px', md: '110px' }, 
        height: { xs: '90px', sm: '90px', md: '110px' },
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
        textAlign: 'center',
        ml: { xs: 5, sm: 5, md: 0 }, 
        mt: { xs: 0, sm: 0, md: 1 }, 
      }}
    >
      <Typography
        level="body-sm"
        className="light-white"
        sx={{ marginTop: { xs: '0', sm: '0', md: '18px' }, fontSize: '0.875rem', whiteSpace: 'nowrap' }}
      >
        {text}
      </Typography>

      <Typography
        level="body-xs"
        className="white"
        sx={{ marginTop: { xs: '12px', sm: '12px', md: '16px' }, fontWeight: 'bold', fontSize: '0.875rem', whiteSpace: 'nowrap' }}
      >
        {date}
      </Typography>
    </Box>
  </Box>
);


const Timeline = () => {
  return (
      <Box className='bg-medium-blue' sx={{ justifyContent: 'center', pt: 8, pb: 8 }} pb={3} mb={10} width='100%'>
      <Typography level='subtitle-lg' className='light-white' sx={{ mb: 4, textAlign: 'center'}}>
      Checkpoint Events
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'column', md: 'row' },
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'nowrap', 
          gap: 3, 
          width: '100%',
          maxWidth: { xs: '100%', sm: '90%', md: '80%' }, 
          mx: 'auto',
        }} 
      >
        <TimelineCard icon='/programs/Stage.svg' text='Introductory Ceremony' date='7th March 2024' />
        <Arrow />
        <TimelineCard icon='/programs/Level1.svg' text='Mid-term Checkpoint 1' date='14th March 2024' />
        <Arrow />
        <TimelineCard icon='/programs/Level2.svg' text='Mid-term Checkpoint 2' date='23rd March 2024' />
        <Arrow />
        <TimelineCard icon='/programs/Trophy.svg' text='Concluding Ceremony ' date='11th April 2024' />
        </Box>
    </Box>
  )
}

export default Timeline;