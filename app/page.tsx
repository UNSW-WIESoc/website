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

  const backContent_1 = [
    <LabelledIcon icon="/programs/Graduate.svg" text="Student Mentors" />,
    <LabelledIcon icon="/programs/Friendship.svg" text="Foster Friendships" />,
    <LabelledIcon icon="/programs/Location.svg" text="Checkpoint Events" />,
    <LabelledIcon icon="/programs/BookStack.svg" text="Settle into University" />,
  ];

  const backContent_2 = [
    <LabelledIcon icon="/programs/WomanProfile.svg" text="Industry Mentors" />,
    <LabelledIcon icon="/programs/Learning.svg" text="Develop Professionally" />,
    <LabelledIcon icon="/programs/Location.svg" text="Checkpoint Events" />,
    <LabelledIcon icon="/programs/ConnectedPeople.svg" text="Make Connections" />,
  ];

  return (
    <Box sx={{ 
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: { xs: 2, md: 4 },
    }}>
      <Typography className={'graphite'} level='h1'>
        Programs
      </Typography>
      <Typography className={'graphite'} level='body' sx={{ textAlign: 'center', paddingBottom: 4 }}>
        Our Industry Mentoring Program and Protege Program can cater to your personal and professional development.
      </Typography>
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        justifyContent="center"
        alignItems="center"
        spacing={10}
        paddingBottom={15}
      >
        <ProgramsComponent 
          frontTitle="Protege Program" 
          frontImageSrc="/programs/protege_card.jpg" 
          backContent={backContent_1}
          link='/programs/protege-program'
          description='This program allows international women in engineering to connect, engage and support one another.'
        />
        <ProgramsComponent 
          frontTitle="Industry Mentoring Program" 
          frontImageSrc="/programs/Industry_Mentoring.svg" 
          backContent={backContent_2}
          link='/programs/imp-program'
          description='This program helps new students adapt to engineering by pairing them with industry mentors.'
        />
      </Stack>
    </Box>
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
