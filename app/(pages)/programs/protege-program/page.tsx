import {Box, Stack, Typography} from '@mui/joy';
import PageHeaderCard from "@/components/PageHeaderCard";
import Image from 'next/image';
import HeadingBodyText from '@/components/HeadingBodyText';

export default function ProtegeProgram() {

  const bodyText =
  'The Protege Program is a mentoring program where female-identifying first-year engineering students will be grouped with a mentor studying engineering in their second year or higher to learn more about UNSW and engineering at UNSW. It is a great opportunity to make friends with other engineering girls and gain some useful advice from older students.'

  return (

    <Box>
      <PageHeaderCard imagePath={'/programs/header.jpg'} pageTitle={'Programs'}/>
      <HeadingBodyText heading='Protege Program' body={bodyText} color='graphite'/>

      <Box sx={{ px: 10, mt: 5, mb: 20 }}>
        <Stack direction={{ md: 'column', lg: 'row-reverse' }} spacing={{ lg: 0, xl: 3 }} sx={{ margin: '0 auto' }} alignItems='center'>
          <Stack direction='column' spacing={2} alignItems='center' sx={{ width: '50%' }}>
            <Box width={{ xl: '583px', lg: '466.4px', md: '800px', sm: '500px', xs: '300px' }}>
              <Typography level='h4' sx={{ mb: 1 }}>
                Meet other female engineers in your field
              </Typography>
              <Typography level='body' sx={{ mb: 14 }}>
                The Protege Program offers the chance for new female engineering students to meet and build a network with other female engineering students in first year and beyond through the course of a structured program.
              </Typography>
            </Box>
            <Box>
              <Image src={'/programs/protege-program/EaseTheTransition.svg'} alt='icon' height={408} width={583}/>
            </Box>
            <Box width={{ xl: '583px', lg: '466.4px', md: '800px', sm: '500px', xs: '300px' }}>
              <Typography level='h4' sx={{ mb: 1, mt: 14 }}>
                Foster friendships
              </Typography>
              <Typography level='body' sx={{ mb: 12 }}>
                The Protege Program offers the chance for new female engineering students to meet and build a network with other female engineering students in first year and beyond through the course of a structured program.
              </Typography>
            </Box>
          </Stack>

          <Stack direction='column' spacing={2} alignItems='center' sx={{ width: '50%' }}>
            <Box>
              <Image src={'/programs/protege-program/MeetOthers.svg'} alt='icon' height={422} width={567}/>
            </Box>
            <Box width={{ xl: '570px', lg: '456px', md: '800px', sm: '500px', xs: '300px' }}>
              <Typography level='h4' sx={{ mb: 1, mt: 5 }}>
                Ease the transition
              </Typography>
              <Typography level='body' sx={{ mb: 12 }}>
                The Protege Program helps ease the transition between high school and engineering at UNSW by providing an older student mentor who can help to navigate this new environment and overcome its challenges.
              </Typography>
            </Box>
            <Box>
              <Image src={'/programs/protege-program/FosterFriendships.svg'} alt='icon' height={381} width={570}/>
            </Box>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
}
