import {Box, Stack, AspectRatio, Typography} from '@mui/joy';
import PageHeaderCard from '@/components/PageHeaderCard';
import Image from 'next/image';
import HeadingBodyText from '@/components/HeadingBodyText';
import ProgramsTitleDescription from '@/components/ProgramsTitleDescription';
import HorizontalLine from '@/components/HorizontalLine';
import Quote from '@/components/Quote';
import { protegeData } from '@/app/data';

/*
function Testimonials() {
  return (
    <Stack py={5} px={5} mx='auto' textAlign='center' justifyContent='center' maxWidth={1250} width='100%' alignItems='center'>
      <Typography level='subtitle-lg' mb={5}>
        Hear from our previous mentors and mentees
      </Typography>
      <Stack spacing={5} direction='column' width='100%'>
        <Box display='flex' justifyContent='center' width='100%'>
          <HorizontalLine color='#93AED3' height={2} width={1200} />
        </Box>
        {protegeData.map(({ quote, by }, idx) => (
          <Stack key={idx} spacing={5} maxWidth={1250} width='100%' alignItems='center'>
            <Quote quote={quote} color='dark-blue' author={by} />
            <Box display='flex' justifyContent='center' width='100%'>
              <HorizontalLine color='#93AED3' height={2} width={1200} />
            </Box>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
}
*/


export default function IndustryMentoringProgram() {

  const bodyText = 'The Industry Mentoring Program provides a unique opportunity for students to directly connect with industry representatives in a mentor-mentee program. Industry mentors will interact with student mentees to provide them with a deeper insight into professional environments and their future careers.'

  const title1 = 'Gain a deeper understanding'
  const description1 = 'This program gives students the opportunity to develop an understanding of real life in the engineering industry and the range of opportunities in the field. They can also learn from the experiences of industry professionals and their diverse career paths.'

  const title2 = 'Build a strong foundation'
  const description2 = 'Build a strong foundation for your future career. During this program, you will be able to build a professional network through valuable networking events and improve your employability and soft skills.'

  return (

    <Box>
      <PageHeaderCard imagePath={'/programs/header.jpg'} pageTitle={'Programs'}/>
      <HeadingBodyText heading='Industry Mentoring Program' body={bodyText} color='graphite'/>

      <Box sx={{ px: 10, mt: 5, mb: 20 }}>
        <Stack direction={{ md: 'column', lg: 'row-reverse' }} spacing={{ lg: 0, xl: 3 }} sx={{ margin: '0 auto' }} alignItems='center'>

          <Stack direction='column' spacing={2} alignItems='center' sx={{ width: '50%' }}>
            <Box width={{ xl: '583px', lg: '496px', md: '800px', sm: '500px', xs: '300px'}}>
              <ProgramsTitleDescription title={title1} description={description1} marginTop={0} marginBottom={14} color='graphite'/>
              <AspectRatio variant='plain' objectFit='cover' sx={{borderRadius: 'md'}}>
                  <Image src={'/programs/industry-mentoring-program/BuildFoundation.jpg'} alt={'icon'} fill/>
              </AspectRatio>
            </Box>
          </Stack>

          <Stack direction='column' spacing={2} alignItems='center' sx={{ width: '50%' }}>
            <Box width={{ xl: '583px', lg: '496px', md: '800px', sm: '500px', xs: '300px' }}>
              <AspectRatio variant='plain' objectFit='cover' sx={{borderRadius: 'md'}}>
                <Image src={'/programs/industry-mentoring-program/DeeperUnderstanding.jpg'} alt={'icon'} fill/>
              </AspectRatio>               
              <ProgramsTitleDescription title={title2} description={description2} marginTop={14} marginBottom={12} color='graphite'/>
            </Box>
          </Stack>

        </Stack>
      </Box>
    </Box>
  );
}
