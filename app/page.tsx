import {AspectRatio, Box, Stack, Typography} from '@mui/joy';
import PersonIcon from '@mui/icons-material/Groups';
import Image from 'next/image';
import LabelledIcon from '@/components/LabelledIcon';
import ProgramsComponent from '@/components/ProgramsComponent';

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

function ProgramsOverview() {
  return (
    <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={4} //double check later - randomly guessed it 
        paddingBottom='120px' //double check later - randomly guessed it 
      >
        <ProgramsComponent 
          frontTitle="Industry Mentoring Program" 
          frontImageSrc="/landing-page/Industry_Mentoring_Program.svg" 
          backContent={[
            {
              icon: "/programs/Graduate.svg",
              iconText: "Student Mentors",
            },
            {
              icon: "/programs/Friendship.svg",
              iconText: "Foster Friendships",
            },
            {
              icon: "/programs/Location.svg",
              iconText: "Checkpoint Events",
            },
            {
              icon: "/programs/BookStack.svg",
              iconText: "Settle into University",
            },
          ]}
          link=''
          description='This program helps new students adapt to engineering by pairing them with older student mentors.'
        />

        <ProgramsComponent 
          frontTitle="WIE Connect" 
          frontImageSrc="/landing-page/WIE_Connect.svg" 
          backContent={[
            {
              icon: "/programs/Graduate.svg",
              iconText: "Student Mentors",
            },
            {
              icon: "/programs/Friendship.svg",
              iconText: "Foster Friendships",
            },
            {
              icon: "/programs/Location.svg",
              iconText: "Checkpoint Events",
            },
          ]}
          link=''
          description='hello'
        />
      </Stack>
  );
}


export default function Home() {
  return (
    <Box justifyContent='center'>
      <CoverImage/>
      <AboutUsOverview/>
      <ProgramsOverview/>
    </Box>
  );
}
