import '../app/globals.css';

import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
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
      className='shadow-hover border-round'
      sx={{minWidth: '300px', maxWidth: '600px'}}
    >
      <CardOverflow>
        <AspectRatio objectFit='contain'>
          <Image src={'/event_banner.JPG'} alt={'group of people'} fill/>
        </AspectRatio>
      </CardOverflow>
      <CardContent>
        <Stack alignItems='center' py={1} spacing={1}>
          <Typography level='subtitle-lg' fontSize='xl' textAlign='center'>WIESoc Study Lounge</Typography>
          <Typography level='body' textAlign='center'>Wednesday 17 April 12pm - 2pm</Typography>
          <Button 
            component='a' 
            href='https://fb.me/e/6IzxSbHFH'
            target='_blank'
            startDecorator={<FacebookIcon color='#FFFFFF' width={25} height={25}/>}
            className='bg-purple button-border-round'
            >
            <Typography level='subtitle' className='white' p={0.5}>
              View Event
            </Typography>
          </Button>
        </Stack>
      </CardContent>
    </Card>
  )
}
