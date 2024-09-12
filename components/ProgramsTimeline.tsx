import { Box, Grid } from '@mui/material';
import Image from 'next/image';
import { FC } from 'react';
import Typography from '@mui/joy/Typography';
interface TimelineCardProps {
  icon: string;
  isLast: boolean;
}

interface TextComponentProps {
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
      position: 'relative',
      marginTop: '10px',
      '&:before': {
        content: '""',
        display: 'block',
        width: { xs: '2px', sm: '2px', md: '120px' }, 
        height: { xs: '25px', sm: '25px', md: '0px' }, 
        borderBottom: { xs: 'none', sm: 'none', md: '2px dashed white'},
        borderLeft: { xs: '2px dashed white', sm: '2px dashed white', md: '0px' },
        position: 'relative',
        marginLeft: {xs: '0px', sm: '0px', md: '50px'}
      },
      '&:after': {
        content: '""',
        display: 'block',
        borderTop: { xs: '4px solid white', sm: '4px solid white', md: '4px solid transparent' },
        borderBottom: { xs: 'none', sm: 'none', md: '4px solid transparent' },
        borderLeft: { xs: '4px solid transparent', sm: '4px solid transparent', md: '4px solid white' },
        borderRight: { xs: '4px solid transparent', sm: '4px solid transparent', md: 'none' },
      },
    }}
  />
  );
};

const TimelineCard: FC<TimelineCardProps> = ({ icon, isLast }) => (
  <Box
    textAlign="center"
    sx={{
      display: 'flex',
      flexDirection: { xs: 'column', sm: 'column', md: 'row' }, 
      alignItems: { xs:'center', sm: 'center', md: 'center' },
      justifyContent: 'center',
      width: '100%',
      ml: isLast ? { xs: 0, sm: 0, md: 0 } : { xs: 0, sm: 0, md: 11 },
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
        aspectRatio: '1'
      }}
    >
      <Image src={icon} alt={''} width={60} height={60} />
    </Box>
    {!isLast && <Arrow />}
  </Box>
);

const TextComponent: FC<TextComponentProps> = ({ text, date }) => (
  <Box
    sx={{
      textAlign: 'center',
      ml: { xs: -22, sm: -22, md: 0},
      mt: { xs: 3, sm: 3, md: 0}
    }}
  >
    <Typography
      level="body-sm"
      className="light-white"
      sx={{ marginTop: { xs: '10px', sm: '10px', md: '18px' }, fontSize: '0.875rem', whiteSpace: 'nowrap' }}
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
);

const items = [
  <TimelineCard icon='/programs/Stage.svg' isLast={false} key="1" />,
  <TimelineCard icon='/programs/Level1.svg' isLast={false} key="2" />,
  <TimelineCard icon='/programs/Level2.svg'isLast={false} key="3" />,
  <TimelineCard icon='/programs/Trophy.svg' isLast={true} key="4" />,
  <TextComponent text='Introductory Ceremony' date='7th March 2024' key="5" />,
  <TextComponent text='Mid-term Checkpoint 1' date='14th March 2024' key="6" />,
  <TextComponent text='Mid-term Checkpoint 2' date='23rd March 2024' key="7" />,
  <TextComponent text='Concluding Ceremony ' date='11th April 2024' key="8" />
];

const Mobileitems = [
  { component: <TimelineCard icon='/programs/Stage.svg' isLast={false} key="1" />, xs: 8, sm: 8 },
  { component: <TextComponent text='Introductory Ceremony' date='7th March 2024' key="2" />, xs: 4, sm: 4 },
  { component: <TimelineCard icon='/programs/Level1.svg' isLast={false} key="3" />, xs: 8, sm: 8 },
  { component: <TextComponent text='Mid-term Checkpoint 1' date='14th March 2024' key="4" />, xs: 4, sm: 4 },
  { component: <TimelineCard icon='/programs/Level2.svg' isLast={false} key="5" />, xs: 8, sm: 8 },
  { component: <TextComponent text='Mid-term Checkpoint 2' date='23rd March 2024' key="6" />, xs: 4, sm: 4 },
  { component: <TimelineCard icon='/programs/Trophy.svg' isLast={true} key="7" />, xs: 8, sm: 8 },
  { component: <TextComponent text='Concluding Ceremony ' date='11th April 2024' key="8" />, xs: 4, sm: 4 }
];

const Timeline = () => {
  return (

  <Box className='bg-medium-blue' sx={{ justifyContent: 'center', pt: 8, pb: 8 }} pb={3} mb={10} width='100%'>
  <Typography level='subtitle-lg' className='light-white' sx={{ mb: 4, textAlign: 'center'}}>
  Checkpoint Events
  </Typography>

  <Box sx={{ display: { xs: 'none', md: 'block' }, flexGrow: 1 }}>
        <Grid container spacing={1}>
          {items.map((item, index) => (
            <Grid item md={3} key={index}>
              {item}
            </Grid>
          ))}
        </Grid>
      </Box>

  <Box sx={{ display: { xs: 'block', sm: 'block', md: 'none' }, flexGrow: 1 }}>
    <Grid container spacing={2}>
      {Mobileitems.map((item, index) => (
        <Grid item xs={item.xs} sm={item.sm} key={index}>
          {item.component}
        </Grid>
      ))}
    </Grid>
  </Box>
  </Box>
  )
}


export default Timeline;
