import {AspectRatio, Box, Stack, Typography} from '@mui/joy';
import PersonIcon from '@mui/icons-material/Groups';
import Image from 'next/image';
import LabelledIcon from '@/components/LabelledIcon';
import OutlineButton from '@/components/OutlineButton';
import HorizontalLine from "@/components/HorizontalLine";

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

  const stat1 = '2000+\nmembers'

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

function SponsorsPreview() {
  return (
    <Box mx='auto' textAlign='center' width='100%' mb={10} justifyContent='center'>
      <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
        <HorizontalLine color='#93AED3' height={1} width={1000} />
      </Box>
      <Box m={2}>
        <Typography level='subtitle-lg'>MEET OUR SPONSORS</Typography>
      </Box>
      <Stack direction='row' spacing={10} justifyContent='center' alignItems='center' my={5}>
        <Box className='relative' sx={{width: '150', height: 'auto'}}>
          <Image src={'/sponsors/unsw_logo.jpg'} alt='UNSW Engineering' layout='intrinsic' width={200} height={100} />
        </Box>
        <Box className='relative' sx={{width: '150', height: 'auto'}}>
          <Image src={'/sponsors/atlassian.svg'} alt='Atlassian' layout='intrinsic' width={150} height={100} />
        </Box>
        <Box className='relative' sx={{width: '100', height: 'auto'}}>
          <Image src={'/sponsors/janeStreet_logo.jpg'} alt='Jane Street' layout='intrinsic' width={150} height={100} />
        </Box>
        <Box className='relative' sx={{width: '150', height: 'auto'}}>
          <Image src={'/sponsors/sydneyWaters.jpg'} alt='Sydney Water' layout='intrinsic' width={100} height={75} />
        </Box>
      </Stack>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          width: '100%'
        }}>
        <Box sx={{ position: 'absolute', zIndex: 5 }}>
          <OutlineButton text='View All' link='/sponsors' />
        </Box>
        <HorizontalLine color='#93AED3' height={1} width={1000} />
      </Box>
    </Box>
  )
}

export default function Home() {
    return (
        <Box justifyContent='center'>
            <CoverImage/>
            <AboutUsOverview/>
            <SponsorsPreview/>
        </Box>
    );
}
