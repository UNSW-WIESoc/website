import {AspectRatio, Box, Stack, Typography} from '@mui/joy';
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
    <Box mx='auto' my={15} width='1000px' height='100%'>
      <Typography level='h1' textAlign={'left'}>About Us</Typography>
      <Stack direction='row' spacing={15}>
        <Box width='500px'>
          <Typography level='body' pb={3}>{aboutUsText}</Typography>
          <Stack direction='row' width='100%' height='100%' justifyContent='center' spacing={6}>
            <LabelledIcon icon='/landing-page/People.svg' text='2000+ members'/>
            <LabelledIcon icon='/landing-page/People.svg' text='2000+ members'/>
            <LabelledIcon icon='/landing-page/People.svg' text='2000+ members'/>
          </Stack>
        </Box>
        <Box width='500px'>
          <iframe width='100%' height='100%' src='https://www.youtube.com/embed/Tyyl9Kp-yiE?si=kk2dfErd_cJNYBbh'
                  title='Welcome To WIESoc'
                  allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                  referrerPolicy='strict-origin-when-cross-origin' allowFullScreen style={{border: 'none'}}></iframe>
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
