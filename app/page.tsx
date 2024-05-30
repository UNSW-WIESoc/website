import { AspectRatio, Box, Stack, Typography } from '@mui/joy';
import PersonIcon from '@mui/icons-material/Groups';
import Image from 'next/image';

function CoverImage() {
  return (
    <AspectRatio sx={{width: '100%', overflow:'hidden'}} objectFit='cover'>
    <Image src={'/2024_group_photo.JPG'} alt={'group of people'} fill/>
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        bgcolor: '#93AED3',
        opacity: '0.7',
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
      justifyContent="center"
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

  const stat1 = "2000+\nmembers"

  return (
    <Box mx='auto' my={15} width='1000px' height='100%'>
      <Typography level='h1' textAlign={'left'}>About Us</Typography>
      <Stack direction='row' spacing={15}>
        <Box width="500px">
          <Typography level="body" pb={3}>{aboutUsText}</Typography>
          <Stack direction="row" width="100%" height="100%">
            <Box width="100%" textAlign='center' px='10px'>
              <PersonIcon className='medium-blue' sx={{fontSize: '4rem'}}/>
              <Typography level="subtitle" className='dark-blue'>{stat1}</Typography>
            </Box>
            <Box width="100%" textAlign='center' px='10px'>
              <PersonIcon className='medium-blue' sx={{fontSize: '4rem'}}/>
              <Typography level="subtitle" className='dark-blue'>{stat1}</Typography>
            </Box>
            <Box width="100%" textAlign='center' px='10px'>
              <PersonIcon className='medium-blue' sx={{fontSize: '4rem'}}/>
              <Typography level="subtitle" className='dark-blue'>{stat1}</Typography>
            </Box>
          </Stack>
        </Box>
        <Box width='500px'>
          <iframe width='100%' height='100%' src='https://www.youtube.com/embed/Tyyl9Kp-yiE?si=kk2dfErd_cJNYBbh' title='Welcome To WIESoc' allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' referrerPolicy='strict-origin-when-cross-origin' allowFullScreen style={{border: 'none'}}></iframe>
        </Box>
      </Stack>
    </Box>
  );
}

export default function Home() {
  return (
    <Box justifyContent='center'>
      <CoverImage/>
      <AboutUsOverview/>
    </Box>
  );
}
