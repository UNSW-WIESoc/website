import { Box, Grid } from '@mui/material';
import Image from 'next/image';
import { FC } from 'react';
import Typography from '@mui/joy/Typography';
import {Stack} from "@mui/joy";
import { protegeTimelineData } from '@/app/data';
interface TextComponentProps {
  text: string;
}

const TextComponent: FC<TextComponentProps> = ({ text }) => (
  <Box
    sx={{
      textAlign: 'center',
      ml: { xs: -22, sm: -22, md: 0},
      mt: { xs: 3, sm: 3, md: -4},
    }}
  >
    <Typography
      level="body-sm"
      className="light-white"
      sx={{ marginTop: { xs: '10px', sm: '10px', md: '18px' }, fontSize: '0.875rem', whiteSpace: 'nowrap' }}
    >
      {text}
    </Typography>

  </Box>
);


const Timeline = () => {
  return (
    <Stack direction='column' justifyContent='center' alignItems='center' className='bg-medium-blue' sx={{boxSizing:'border-box'}} py={8} mb={10} width='100%'>
      <Typography level='subtitle-lg' className='light-white' sx={{ mb: 3, textAlign: 'center'}}>
      Checkpoint Events
      </Typography>

      <Stack direction='column' justifyContent='center'>
        <Stack sx={{ display: { xs: 'none', md: 'block' }, flexGrow: 1 }} justifyContent='center' alignItems='center' width='100%'>
          <Image src='/programs/protege-program/Timeline.svg' alt='Timeline' width='900' height='200'/>
          <Stack direction='row' justifyContent='center' gap='120px' alignItems='center' width='100%'>
            {protegeTimelineData.map((event, index) => (<TextComponent key={index} text={event.text} />))}
          </Stack>
        </Stack>

        <Box sx={{ display: { xs: 'flex', sm: 'flex', md: 'none' },  flexDirection: { xs: 'row', sm: 'row'}, justifyContent:'center', alignItems: 'center', flexGrow: 1 }}>
          <Box 
            sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-start' }}}>
            <Image src='/programs/protege-program/Verticaltimeline.svg' alt='Timeline' width={150} height={510} style={{ display: 'block' }} />
          </Box>
          <Box
            sx={{ display: 'flex', flexDirection: {xs: 'column',  sm: 'column'}, mt: -5, ml: 20 ,justifyContent: 'center', gap: '63px'}}>
           {protegeTimelineData.map((event, index) => (<TextComponent key={index} text={event.text} />))}
          </Box>
        </Box>
        </Stack>
      </Stack>
  )
}

export default Timeline;
