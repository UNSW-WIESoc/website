import {Box, Stack, AspectRatio} from '@mui/joy';
import PageHeaderCard from "@/components/PageHeaderCard";
import Image from 'next/image';
import HeadingBodyText from '@/components/HeadingBodyText';
import ProgramsTitleDescription from '@/components/ProgramsTitleDescription';

export default function ProtegeProgram() {

  const bodyText = 'The Protege Program is a mentoring program where female-identifying first-year engineering students will be grouped with a mentor studying engineering in their second year or higher to learn more about UNSW and engineering at UNSW. It is a great opportunity to make friends with other engineering girls and gain some useful advice from older students.'

  const title1 = 'Meet other female engineers in your field'
  const description1 = 'The Protege Program offers the chance for new female engineering students to meet and build a network with other female engineering students in first year and beyond through the course of a structured program.'

  const title2 = 'Foster friendships'
  const description2 = 'The Protege Program offers the chance for new female engineering students to meet and build a network with other female engineering students in first year and beyond through the course of a structured program.'

  const title3 = 'Ease the transition'
  const description3 = 'The Protege Program helps ease the transition between high school and engineering at UNSW by providing an older student mentor who can help to navigate this new environment and overcome its challenges.'


  return (

    <Box>
      <PageHeaderCard imagePath={'/programs/header.jpg'} pageTitle={'Programs'}/>
      <HeadingBodyText heading='Protege Program' body={bodyText} color='graphite'/>

      <Box sx={{ px: 10, mt: 5, mb: 20 }}>
        <Stack direction={{ md: 'column', lg: 'row-reverse' }} spacing={{ lg: 0, xl: 3 }} sx={{ margin: '0 auto' }} alignItems='center'>

          <Stack direction='column' spacing={2} alignItems='center' sx={{ width: '50%' }}>
            <Box width={{ xl: '583px', lg: '466.4px', md: '800px', sm: '500px', xs: '300px'}}>
              <ProgramsTitleDescription title={title1} description={description1} marginTop={0} marginBottom={14} color='graphite'/>
              <AspectRatio variant='plain' objectFit='fill'>
                  <Image src={'/programs/protege-program/EaseTheTransition.svg'} alt={'icon'} fill/>
              </AspectRatio>
              <ProgramsTitleDescription title={title2} description={description2} marginTop={14} marginBottom={12} color='graphite'/>
            </Box>
          </Stack>

          <Stack direction='column' spacing={2} alignItems='center' sx={{ width: '50%' }}>
            <Box width={{ xl: '570px', lg: '456px', md: '800px', sm: '500px', xs: '300px' }}>
              <AspectRatio variant='plain' objectFit='fill'>
                <Image src={'/programs/protege-program/MeetOthers.svg'} alt={'icon'} fill/>
              </AspectRatio>              
              <ProgramsTitleDescription title={title3} description={description3} marginTop={5} marginBottom={12} color='graphite'/>
              <Box>
                <AspectRatio variant='plain' objectFit='fill'>
                  <Image src={'/programs/protege-program/FosterFriendships.svg'} alt={'icon'} fill/>
                </AspectRatio>              
              </Box>
            </Box>
          </Stack>

        </Stack>
      </Box>
    </Box>
  );
}
