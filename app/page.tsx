import {AspectRatio, Box, Grid, Sheet, Stack, Typography} from '@mui/joy';
import Image from 'next/image';
import LabelledIcon from '@/components/LabelledIcon';
import EventsCarousel from '@/components/Carousel/EventsCarousel';

function CoverImage() {
  return (
    <AspectRatio sx={{width: '100%', overflow: 'hidden'}} objectFit='cover'>
      <Image src={'/landing-page/2024_group_photo.JPG'} alt={'group of people'} fill/>
      <Box
        className='bg-dark-blue'
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          opacity: '0.6',
        }}
      />
      <Stack
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
        justifyContent='center'
      >
        <Typography className='light-white' level='title-lg'>
          UNSW Women In Engineering
        </Typography>
        <Typography className='light-white' level='h2'>
          Connect • Engage • Inspire
        </Typography>
      </Stack>
    </AspectRatio>
  );
}

function AboutUsOverview() {
  const aboutUsText = 'We are a UNSW student-run society that facilitates members from all disciplines of engineering. \n\n \
  We run many social and industry events throughout the year as well as two Programs dedicated to mentoring and interpersonal development.\n'

  return (
    <Stack
      width={{md: '90%', lg: '70%', xl: '50%'}}
      direction={{md: 'column', lg: 'row'}} 
      mx='auto'
      my={15}
      spacing={6}
      alignItems='center'
    >
      <Stack width={{xs: '90%', sm: '70%', md: '60%', lg: '50%'}} spacing={3} pb={3}>
        <Typography level='h1' textAlign={'left'}>About Us</Typography>
        <Typography level='body'>{aboutUsText}</Typography>
        <Stack direction='row' justifyContent='center'>
          <LabelledIcon icon='/landing-page/People.svg' text='2000+ members'/>
          <LabelledIcon icon='/landing-page/People.svg' text='2000+ members'/>
          <LabelledIcon icon='/landing-page/People.svg' text='2000+ members'/>
        </Stack>
      </Stack>
      <AspectRatio sx={{width: {xs: '90%', sm: '70%', md: '60%', lg: '50%'}, alignContent: 'center'}}>
        <iframe
          src='https://www.youtube.com/embed/Tyyl9Kp-yiE?si=kk2dfErd_cJNYBbh'
          title='Welcome To WIESoc'
          allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          referrerPolicy='strict-origin-when-cross-origin' allowFullScreen style={{border: 'none'}}
        >
        </iframe>
      </AspectRatio>
    </Stack>
  );
}

export default function Home() {
  const eventsCarouselText = 'WIESoc hold many events throughout the semester, with a great mix of industry and social events.\nCome and join us for our upcoming events!';
  return (
    <Box justifyContent='center'>
      <CoverImage/>
      <AboutUsOverview/>
      <EventsCarousel heading='Upcoming Events' body={eventsCarouselText} slides={Array(6).fill(0)} size='large'/>
    </Box>
  );
}
