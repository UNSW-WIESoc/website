import '../app/globals.css';

import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Divider from '@mui/joy/Divider';
import Typography from '@mui/joy/Typography';
import Image from 'next/image';
import Button from '@mui/joy/Button';
import Stack from '@mui/material/Stack';
import { FacebookIcon } from '@/components/SocialMediaIcons';


// Hardedcoded for now
// TODO (rbeccahsu): Work on integrating website with Contentful

export default function EventsCard() {
  return (
    <Card 
      variant='outlined' 
      className='shadow-hover'
      sx={{
        width: 600,
      }}
    >
      <CardOverflow>
        <AspectRatio objectFit='contain'>
          <Image src={'/event_banner.JPG'} alt={'group of people'} fill/>
        </AspectRatio>
      </CardOverflow>
      <CardContent>
        <Typography level='h3' fontSize='xl' mt={1}>WIESoc Study Lounge</Typography>
        <Typography level='body-sm'>Wednesday 17th April, 12:00 - 14:00</Typography>

        <Stack>
          <Button 
            component='a' 
            href='https://fb.me/e/6IzxSbHFH'
            target='_blank'
            rel='noopener noreferrer'
            startDecorator={<FacebookIcon color='#FFFFFF' width={25} height={25}/>}
            className='bg-purple button-border-round'
            sx={{ 
              width: 1/3, 
              mt: 2,
              mx: 'auto'
            }}
            >
            View Event
            </Button>
        </Stack>
      </CardContent>
    </Card>
  )
}