'use client';
import React, { useState, useEffect } from 'react';

import {AspectRatio, Box, Stack, Typography} from '@mui/joy';
import Image from 'next/image';
import LabelledIcon from '@/components/LabelledIcon';
import ProgramsComponent from '@/components/ProgramsComponent';
import OutlineButton from '@/components/OutlineButton';
import HorizontalLine from "@/components/HorizontalLine";
import EventsCarousel from '@/components/Carousel/EventsCarousel';
import { getEvents } from "@/lib/api";
import TypingAnimation from '@/components/TypingAnimation';

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
        spacing={{xs: 2, sm: 5}}
      >
        <Typography className='light-white' level='title-lg'>
          UNSW Women In Engineering
        </Typography>
        <Typography className='light-white' level='h2'>
          <TypingAnimation text='Connect • Engage • Inspire' delay={100} infinite={true} pause={1000} />
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
    <Box mx='auto' textAlign='center' width='100%' mb={10} px={5}>
      <Box display='flex'>
        <HorizontalLine color='#93AED3' height={1} width={1000} />
      </Box>
      <Typography m={2} level='subtitle-lg'>MEET OUR SPONSORS</Typography>
      <Stack direction='row' spacing={{ xs: 5, sm: 10 }} justifyContent='center' alignItems='center' my={5} >
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

function ProgramsOverview() {

  const backContent_1 = [
    <LabelledIcon icon='/programs/Graduate.svg' text='Student Mentors' />,
    <LabelledIcon icon='/programs/Friendship.svg'text='Foster Friendships' />,
    <LabelledIcon icon='/programs/Location.svg' text='Checkpoint Events' />,
    <LabelledIcon icon='/programs/BookStack.svg' text='Settle into University' />,
  ];

  const backContent_2 = [
    <LabelledIcon icon='/programs/WomanProfile.svg' text='Industry Mentors' />,
    <LabelledIcon icon='/programs/Learning.svg' text='Develop Professionally' />,
    <LabelledIcon icon='/programs/Location.svg' text='Checkpoint Events' />,
    <LabelledIcon icon='/programs/ConnectedPeople.svg' text='Make Connections' />,
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
        justifyContent='center'
        alignItems='center'
        spacing={10}
        paddingBottom={15}
      >
        <ProgramsComponent 
          frontTitle='Protege Program'
          frontImageSrc='/programs/protege_card.jpg' 
          backContent={backContent_1}
          link='/programs/protege-program'
          description='This program allows international women in engineering to connect, engage and support one another.'
        />
        <ProgramsComponent 
          frontTitle='Industry Mentoring Program'
          frontImageSrc='/programs/Industry_Mentoring.svg' 
          backContent={backContent_2}
          link='/programs/imp-program'
          description='This program helps new students adapt to engineering by pairing them with industry mentors.'
        />
      </Stack>
    </Box>
  );
}


export default function Home() {
  const [upcomingEvents, setUpcomingEvents] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const events = await getEvents();
      const now = new Date();
      const upcoming = events.filter((event: any) => new Date(event.fields.dateTimeEnd) > now);

      setUpcomingEvents(upcoming);
    }

    fetchData();
  }, []);
  
  const eventsCarouselText = 'WIESoc hold many events throughout the semester, with a great mix of industry and social events.\nCome and join us for our upcoming events!';
  return (
    <Box justifyContent='center'>
      <CoverImage/>
      <AboutUsOverview />
      <SponsorsPreview />
      <EventsCarousel heading='Upcoming Events' body={eventsCarouselText} slides={upcomingEvents} size='large'/>
      <ProgramsOverview/>
    </Box>
  )
}
