import {Box, Stack, Typography} from '@mui/joy';
import PageHeaderCard from '@/components/PageHeaderCard';
import ProgramsCard from '@/components/ProgramsCard';
import {IconTextProps} from '@/components/LabelledIcon';
import HeadingBodyText from '@/components/HeadingBodyText';
import Arrow from '@/components/ProgramsArrow';
import TimelineCard from '@/components/ProgramsTimeline';
import Image from 'next/image';

export default function Program() {
  const bodyText =
    'Our Industry Mentoring Program and Protege Program can cater to your personal and professional development.'

  const protegeDescription =
    'This program helps new students adapt to engineering by pairing them with older student mentors.'

  const protegeIcon1: IconTextProps = {
    icon: '/programs/Graduate.svg', text: 'Student Mentors',
  };

  const protegeIcon2: IconTextProps = {
    icon: '/programs/Friendship.svg', text: 'Foster Friendships',
  };

  const protegeIcon3: IconTextProps = {
    icon: '/programs/Location.svg', text: 'Checkpoint Events',
  };

  const protegeIcon4: IconTextProps = {
    icon: '/programs/BookStack.svg', text: 'Settle into University',
  };

  const impDescription =
    'This program helps new students adapt to engineering by pairing them with industry mentors.'

  const impIcon1: IconTextProps = {
    icon: '/programs/WomanProfile.svg', text: 'Industry Mentors',
  };

  const impIcon2: IconTextProps = {
    icon: '/programs/Learning.svg', text: 'Develop Professionally',
  };

  const impIcon3: IconTextProps = {
    icon: '/programs/Location.svg', text: 'Checkpoint Events',
  };

  const impIcon4: IconTextProps = {
    icon: '/programs/ConnectedPeople.svg', text: 'Make Connections',
  };

  return (
    <Box>
      <PageHeaderCard imagePath={'/programs/header.jpg'} pageTitle={'Programs'}/>
      <HeadingBodyText heading='Annual Programs' body={bodyText} color='graphite'/>
      <Stack direction='column' alignItems='center' spacing={10} pb={10}>
        <ProgramsCard imagePath='/programs/protege_card.jpg' cardTitle='Protege Program'
                      description={protegeDescription} icon1={protegeIcon1} icon2={protegeIcon2} icon3={protegeIcon3}
                      icon4={protegeIcon4} link='/protege-program'/>
        <ProgramsCard imagePath='/programs/imp_card.jpg' cardTitle='Industry Mentoring Program'
                      description={impDescription} icon1={impIcon1} icon2={impIcon2} icon3={impIcon3}
                      icon4={impIcon4} link='/industry-mentoring-program'/>
      </Stack>  

      <Box className='bg-medium-blue' sx={{ justifyContent: 'center' }} pb={3} width='100%'>
      <HeadingBodyText heading='Checkpoint Events' color='light-white' />
      <Stack
        direction={{ xs: 'column', sm: 'row' }} 
        justifyContent="center"
        alignItems='center'
        spacing={5}
        pb={10}
        sx={{ width: { xs: '90%', md: '65%' }, mx: 'auto' }} 
      >
        <TimelineCard icon='/programs/Stage.svg' text='Introductory Ceremony' date='7th March 2024' />
        <Arrow />
        <TimelineCard icon='/programs/Level1.svg' text='Mid-term Checkpoint 1' date='14th March 2024' />
        <Arrow />
        <TimelineCard icon='/programs/Level2.svg' text='Mid-term Checkpoint 2' date='23rd March 2024' />
        <Arrow />
        <TimelineCard icon='/programs/Trophy.svg' text='Concluding Ceremony' date='11th April 2024' />
      </Stack>
    </Box>

    </Box>
  );
}

