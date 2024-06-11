import {Box, Stack, Typography} from '@mui/joy';
import PageHeaderCard from "@/components/PageHeaderCard";
import Image from 'next/image';


export default function ProtegeProgram() {

  return (
    <Box>
      <PageHeaderCard imagePath={'/programs/header.jpg'} pageTitle={'Programs'}/>
      <Stack direction='column' alignItems='center' spacing={10} pb={10} justifyContent={'center'}>
        <Typography level='h1' pt={3}>
          <Box  textAlign="center" px={10}>Protege Program</Box>
        </Typography>
        <Typography level='body'>
          <Box px={10} textAlign="center">
            The Protege Program is a mentoring program where female-identifying first-year engineering students will be grouped with a mentor studying engineering in their second year or higher to learn more about UNSW and engineering at UNSW. It is a great opportunity to make friends with other engineering girls and gain some useful advice from older students.
          </Box>
        </Typography>
      </Stack>

      <Box sx={{ px: 10, mt: 5, mb: 5 }}>
        <Stack direction='row' spacing={3} sx={{ margin: '0 auto' }}>
          <Stack direction='column' spacing={2} sx={{ width: '50%' }}>
            <Box>
              <Image src={'/programs/protege-program/MeetOthers.svg'} alt='icon' height={422} width={567}/>
            </Box>
            <Box>
              <Typography level='h4' sx={{ mb: 1 }}>
                Ease the transition
              </Typography>
              <Typography level='body'>
                The Protege Program helps ease the transition between high school and engineering at UNSW by providing an older student mentor who can help to navigate this new enviornment and overcome its challenges.
              </Typography>
            </Box>
            <Box>
              <Image src={'/programs/protege-program/FosterFriendships.svg'} alt='icon' height={422} width={567}/>
            </Box>
          </Stack>
          <Stack direction='column' spacing={2} sx={{ width: '50%' }}>
            <Box>
              <Typography level='h4' sx={{ mb: 1 }}>
                Meet other female engineers in your field
              </Typography>
              <Typography level='body'>
                The Protege Program offers the chance for new female engineering students to meet and build a network with other female engineering students in first year and beyond through the course of a structured program.
              </Typography>
            </Box>
            <Box>
              <Image src={'/programs/protege-program/EaseTheTransition.svg'} alt='icon' height={422} width={567}/>
            </Box>
            <Box>
              <Typography level='h4' sx={{ mb: 1 }}>
                Foster friendships
              </Typography>
              <Typography level='body'>
                The Protege Program offers the chance for new female engineering students to meet and build a network with other female engineering students in first year and beyond through the course of a structured program.
              </Typography>
            </Box>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
}
