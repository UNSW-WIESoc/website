import {AspectRatio, Box, Grid, Stack, Typography} from '@mui/joy';
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
  const aboutUsText = 'We are a UNSW student-run society that facilitates members from all disciplines of engineering. \n \
  We run many social and industry events throughout the year as well as two Programs dedicated to mentoring and interpersonal development.\n'

  return (
    <Box justifyContent='center'>
      <Stack width={{xs: '90%', sm: '70%'}} mx='auto' my={15} spacing={5} direction={{md: 'column', lg: 'row'}} justifyContent='space-around' justifySelf='center'>
        <Box justifyContent='center' mx='auto'>
          <Typography level='h1' textAlign={'left'}>About Us</Typography>
          <Box maxWidth='500px'>
            <Typography level='body' pb={3}>{aboutUsText}</Typography>
            <Stack direction='row' pb={5} justifyContent='center'>
              <LabelledIcon icon='/landing-page/People.svg' text='2000+ members'/>
              <LabelledIcon icon='/landing-page/People.svg' text='2000+ members'/>
              <LabelledIcon icon='/landing-page/People.svg' text='2000+ members'/>
            </Stack>
          </Box>
        </Box>
        <Box width='100%' maxWidth='500px' alignContent='center' justifyContent='center'>
          <iframe
            width='100%'
            height='50%'
            src='https://www.youtube.com/embed/Tyyl9Kp-yiE?si=kk2dfErd_cJNYBbh'
            title='Welcome To WIESoc'
            allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            referrerPolicy='strict-origin-when-cross-origin' allowFullScreen style={{border: 'none'}}
          >
          </iframe>
        </Box>
      </Stack>
    </Box>
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
