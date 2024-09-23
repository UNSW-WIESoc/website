import { Box, Grid } from '@mui/material';
import Image from 'next/image';
import { FC } from 'react';
import Typography from '@mui/joy/Typography';
interface TextComponentProps {
  text: string;
  date: string;
}

const TextComponent: FC<TextComponentProps> = ({ text, date }) => (
  <Box
    sx={{
      textAlign: 'center',
      ml: { xs: -22, sm: -22, md: 0},
      mt: { xs: 3, sm: 3, md: 0},
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


const Timeline = () => {
  return (
    <Box className='bg-medium-blue' sx={{boxSizing:'border-box', justifyContent: 'center', pt: 8, pb: 8 }} mb={10} width='100%'>
      <Typography level='subtitle-lg' className='light-white' sx={{ mb: 3, textAlign: 'center'}}>
      Checkpoint Events
      </Typography>

      <Box sx={{ maxWidth: { xs: '100%', sm: '90%', md: '80%' }, mx: 'auto',}}>
        <Box sx={{ display: { xs: 'none', md: 'block' }, flexGrow: 1 }}>
          <Box 
            sx={{ display: 'flex', justifyContent: 'center', mb: -52, mt: -50, mr: -1.5 }}>
            <Image src='/programs/protege-program/Timeline.svg' alt='Timeline' width={950} height={950} style={{ display: 'block' }} />
          </Box>
          <Box
            sx={{display: 'flex', flexDirection: { md: 'row' },  justifyContent: 'center', mr: -2, gap: '132px',}}>
            <TextComponent text='Opening Ceremony' date='7th March 2024' />
            <TextComponent text='Mid-term Checkpoint 1' date='14th March 2024' />
            <TextComponent text='Mid-term Checkpoint 2' date='23rd March 2024' />
            <TextComponent text='Closing Ceremony ' date='11th April 2024' />
          </Box>
        </Box>

        <Box sx={{ display: { xs: 'flex', sm: 'flex', md: 'none' },  flexDirection: { xs: 'row', sm: 'row'}, justifyContent:'center', alignItems: 'center', flexGrow: 1 }}>
          <Box 
            sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-start' }}}>
            <Image src='/programs/protege-program/Verticaltimeline.svg' alt='Timeline' width={150} height={510} style={{ display: 'block' }} />
          </Box>
          <Box
            sx={{ display: 'flex', flexDirection: {xs: 'column',  sm: 'column'}, mt: -5, ml: 20 ,justifyContent: 'center', gap: '63px'}}>
            <TextComponent text='Opening Ceremony' date='7th March 2024' />
            <TextComponent text='Mid-term Checkpoint 1' date='14th March 2024' />
            <TextComponent text='Mid-term Checkpoint 2' date='23rd March 2024' />
            <TextComponent text='Closing Ceremony ' date='11th April 2024' />
          </Box>
        </Box>
        </Box>
      </Box>
  )
}

export default Timeline;
