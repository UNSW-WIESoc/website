import {AspectRatio, Box, Stack, Typography} from '@mui/joy';
import Image from 'next/image';
import LabelledIcon from '@/components/LabelledIcon';
import OutlineButton from '@/components/OutlineButton';
import HorizontalLine from "@/components/HorizontalLine";
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

function SponsorsPreview() {
  return (
    <Box mx='auto' textAlign='center' width='100%' mb={10}>
      <Box display='flex'>
        <HorizontalLine color='#93AED3' height={1} width={1000} />
      </Box>
      <Typography m={2} level='subtitle-lg'>MEET OUR SPONSORS</Typography>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 5, sm: 10 }}
        justifyContent='center'
        alignItems='center'
        my={5}
      >
        <Stack direction={{ sm: 'column', md: 'row' }} spacing={{ xs: 5, sm: 10 }}>
          <Box className='relative' sx={{ width: '150', height: 'auto' }}>
            <Image src={'/sponsors/unsw_logo.jpg'} alt='UNSW Engineering' layout='intrinsic' width={200} height={100} />
          </Box>
          <Box className='relative' sx={{ width: '150', height: 'auto' }} pt={1}>
            <Image src={'/sponsors/atlassian.svg'} alt='Atlassian' layout='intrinsic' width={150} height={100} />
          </Box>
        </Stack>
        <Stack direction={{ sm: 'column', md: 'row' }} spacing={{ xs: 5, sm: 10 }}>
          <Box className='relative' sx={{ width: '100', height: 'auto' }}>
            <Image src={'/sponsors/janeStreet_logo.jpg'} alt='Jane Street' layout='intrinsic' width={150} height={100} />
          </Box>
          <Box className='relative' sx={{ width: '150', height: 'auto' }}>
            <Image src={'/sponsors/sydneyWaters.jpg'} alt='Sydney Water' layout='intrinsic' width={100} height={75} />
          </Box>
        </Stack>
      </Stack>
      <Box mt={3} display='flex' justifyContent='center' alignItems='center' position='relative' width='100%'>
        <Box sx={{ position: 'absolute' }}>
          <OutlineButton text='View All' link='/sponsors' />
        </Box>
        <HorizontalLine color='#93AED3' height={1} width={1000} />
      </Box>
    </Box>
  )
}

export default function Home() {
  const eventsCarouselText = 'WIESoc hold many events throughout the semester, with a great mix of industry and social events.\nCome and join us for our upcoming events!';
  return (
    <Box justifyContent='center'>
      <CoverImage/>
      <AboutUsOverview />
      <SponsorsPreview />
      <EventsCarousel heading='Upcoming Events' body={eventsCarouselText} slides={Array(6).fill(0)} size='large'/>
    </Box>
  )
}
