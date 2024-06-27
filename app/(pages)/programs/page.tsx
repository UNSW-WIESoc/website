import {Box, Stack, Typography} from '@mui/joy';
import PageHeaderCard from '@/components/PageHeaderCard';
import ProgramsCard from '@/components/ProgramsCard';
import {IconTextProps} from '@/components/LabelledIcon';
import HeadingBodyText from '@/components/HeadingBodyText';

function Testimonials() {
  const test1 = '"The Protégé Program was easily one of the most enjoyable and rewarding experiences at UNSW. Not only was it great to help my mentees with any queries they have, but seeing them come out of their shells and make new friends was what made this program so memorable."'
  const test2 = '"As a WIESOC peer mentor, you forge new friendships and gain invaluable leadership skills. It meant I was able to give the first years the same support I received when I first started. It was the highlight of my week with a program full of fun challenges and competitions and a great group of people."'
  const test3 = '"The Protégé Program was an amazing experience which made the start of uni so much easier through the guidance of a mentor. It was a great way to meet fellow girls in engineering through the fun events and activities. I met some of my closest friends at uni through the program too!"'
  
  return (
    <Box py={10} px={5} maxWidth={1250} mx='auto' textAlign='center' alignItems='center'>
      <Typography level='subtitle-lg' mb={5} >Hear from our previous mentors and mentees</Typography>
      {/* line */}
      <Box my={10} py={2}>
        <Typography className='dark-blue' level='body' mb={2}>{test1}</Typography>
        <Typography className='dark-blue' level='subtitle'>Olivia Widjaja (Former Protege Program Mentor)</Typography>
      </Box>
      {/* line */}
      <Box my={10} py={2}>
        <Typography className='dark-blue' level='body' mb={2}>{test2}</Typography>
        <Typography className='dark-blue' level='subtitle'>Nicole Sroba (Former Protege Program Mentor)</Typography>
      </Box>
      {/* line */}
      <Box my={10} py={2}>
        <Typography className='dark-blue' level='body' mb={2}>{test3}</Typography>
        <Typography className='dark-blue' level='subtitle'>Eeman Chaudhary (Former Protege Program Mentee)</Typography>
      </Box>
    </Box>
  )
}

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
      <Testimonials />
    </Box>
  );
}
