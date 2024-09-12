import { Box, Grid } from '@mui/material';
import Image from 'next/image';
import { FC } from 'react';
import Typography from '@mui/joy/Typography';


const Arrow = () => {
  return (
    <Box
    sx={{
      display: 'flex',
      flexDirection: { xs: 'column', sm: 'column'}, 
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      marginTop: '10px',
      '&:before': {
        content: '""',
        display: 'block',
        width: { xs: '2px', sm: '2px'}, 
        height: { xs: '25px', sm: '25px' }, 
        borderBottom: { xs: 'none', sm: 'none'},
        borderLeft: { xs: '2px dashed white', sm: '2px dashed white' },
        position: 'relative',
        top: { xs: '0px', sm: '0px' },
      },
      '&:after': {
        content: '""',
        display: 'block',
        width: '0',
        height: '0',
        borderTop: { xs: '4px solid white', sm: '4px solid white' },
        borderBottom: { xs: 'none', sm: 'none' },
        borderLeft: { xs: '4px solid transparent', sm: '4px solid transparent' },
        borderRight: { xs: '4px solid transparent', sm: '4px solid transparent' },
        transform: { xs: 'translateY(0)', sm: 'translateY(0)' },
      },
    }}
  />
  );
};

interface TimelineCardProps {
  icon: string;
  isLast: boolean;
}

const TimelineCard: FC<TimelineCardProps> = ({ icon, isLast }) => (
  <Box
    textAlign="center"
    sx={{
      display: 'flex',
      flexDirection: { xs: 'column', sm: 'column' }, 
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
    }}
  >
    <Box
      sx={{
        width: { xs: '90px', sm: '90px' }, 
        height: { xs: '90px', sm: '90px' },
        borderRadius: '50%',
        border: '1px solid white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: { xs: '0', sm: '0' },
      }}
    >
      <Image src={icon} alt={''} width={60} height={60} />
    </Box>
    {!isLast && <Arrow />}
  </Box>
);

interface TextComponentProps {
  text: string;
  date: string;
}

const TextComponent: FC<TextComponentProps> = ({ text, date }) => (
  <Box
    sx={{
      textAlign: 'center',
      ml: { xs: -22, sm: -22},
      mt: { xs: 3, sm: 3}
    }}
  >
    <Typography
      level="body-sm"
      className="light-white"
      sx={{ marginTop: { xs: '10px', sm: '10px' }, fontSize: '0.875rem', whiteSpace: 'nowrap' }}
    >
      {text}
    </Typography>

    <Typography
      level="body-xs"
      className="white"
      sx={{ marginTop: { xs: '12px', sm: '12px' }, fontWeight: 'bold', fontSize: '0.875rem', whiteSpace: 'nowrap' }}
    >
      {date}
    </Typography>
  </Box>
);


const Timeline = () => {
  return (

      <Box className='bg-medium-blue' sx={{ justifyContent: 'center', pt: 8, pb: 8 }} pb={3} mb={10} width='100%'>
      <Typography level='subtitle-lg' className='light-white' sx={{ mb: 4, textAlign: 'center'}}>
      Checkpoint Events
      </Typography>

      <Grid container spacing={2} sx={{ marginBottom: 2}}>
      <Grid item xs={8} sm={8}>
      <TimelineCard icon='/programs/Stage.svg' isLast={false}/>
      </Grid>
      <Grid item xs={4} sm={4}>
      <TextComponent text='Introductory Ceremony' date='7th March 2024' />
      </Grid>
      <Grid item xs={8} sm={8}>
      <TimelineCard icon='/programs/Level1.svg' isLast={false}/>
      </Grid>
      <Grid item xs={4} sm={4}>
      <TextComponent text='Mid-term Checkpoint 1' date='14th March 2024'/>
      </Grid>
      </Grid>

      <Grid container spacing={2}>
      <Grid item xs={8} sm={8}>
      <TimelineCard icon='/programs/Level2.svg'isLast={false}/>
      </Grid>
      <Grid item xs={4} sm={4}>
      <TextComponent text='Mid-term Checkpoint 2' date='23rd March 2024'/>
      </Grid>
      <Grid item xs={8} sm={8}>
      <TimelineCard icon='/programs/Trophy.svg' isLast={true}/>
      </Grid>
      <Grid item xs={4} sm={4}>
      <TextComponent text='Concluding Ceremony ' date='11th April 2024'/>
      </Grid>
      </Grid>

  </Box>
  )
}



// const Timeline = () => {
//   return (
//       <Box className='bg-medium-blue' sx={{ justifyContent: 'center', pt: 8, pb: 8 }} pb={3} mb={10} width='100%'>
//       <Typography level='subtitle-lg' className='light-white' sx={{ mb: 4, textAlign: 'center'}}>
//       Checkpoint Events
//       </Typography>
//       <Box
//         sx={{
//           display: 'flex',
//           flexDirection: { xs: 'column', sm: 'column', md: 'row' },
//           justifyContent: 'center',
//           alignItems: 'center',
//           flexWrap: 'nowrap', 
//           gap: 3, 
//           width: '100%',
//           maxWidth: { xs: '100%', sm: '90%', md: '80%' }, 
//           mx: 'auto',
//         }} 
//       >
//         <TimelineCard icon='/programs/Stage.svg' text='Introductory Ceremony' date='7th March 2024' />
//         <Arrow />
//         <TimelineCard icon='/programs/Level1.svg' text='Mid-term Checkpoint 1' date='14th March 2024' />
//         <Arrow />
//         <TimelineCard icon='/programs/Level2.svg' text='Mid-term Checkpoint 2' date='23rd March 2024' />
//         <Arrow />
//         <TimelineCard icon='/programs/Trophy.svg' text='Concluding Ceremony ' date='11th April 2024' />
//         </Box>
//     </Box>
//   )
// }

export default Timeline;