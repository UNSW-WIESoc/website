import {Box, Stack, AspectRatio, Typography} from '@mui/joy';
import PageHeaderCard from '@/components/PageHeaderCard';
import Image from 'next/image';
import HeadingBodyText from '@/components/HeadingBodyText';
import ProgramsTitleDescription from '@/components/ProgramsTitleDescription';
import { impData } from '@/app/data';
import Testimonials from '@/components/Testimonials';
import Interested from '@/components/Interested';

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
        <Stack direction={{ md: 'column', lg: 'row-reverse' }} alignItems='center' spacing={{xl: 20, lg: 10}}>
          <Stack direction='column' alignItems={{lg: 'start', md: 'center', sm: 'center', xs: 'center'}} sx={{ width: '100%' }}>
            <Box width={{ xl: '583px', lg: '496px', md: '800px', sm: '500px', xs: '300px' }}>
              <AspectRatio variant='plain' objectFit='cover' sx={{borderRadius: 'md'}}>
                <Image src={'/programs/industry-mentoring-program/DeeperUnderstanding.jpg'} alt={'icon'} fill/>
              </AspectRatio>               
              <ProgramsTitleDescription title={title2} description={description2} marginTop={14} marginBottom={12} color='graphite'/>
            </Box>
          </Stack>

          <Stack direction='column' alignItems={{lg: 'end', md: 'center',  sm: 'center', xs: 'center'}} sx={{ width: '100%' }}>
            <Box width={{ xl: '583px', lg: '496px', md: '800px', sm: '500px', xs: '300px'}} sx={{ display: 'flex', flexDirection: 'column'}}>
              <Box sx={{ order: { xs: 2, sm: 2, md: 2, lg: 1, xl: 1 } }}>
                <ProgramsTitleDescription title={title1} description={description1} marginTop={0} marginBottom={14} color='graphite'/>
              </Box>
              <Box sx={{ order: { xs: 1, sm: 1, md: 1, lg: 2, xl: 2 }, mb: { xs: 15, sm: 15, md: 15, lg: 0, xl: 0} }}>
                <AspectRatio variant='plain' objectFit='cover' sx={{borderRadius: 'md'}}>
                    <Image src={'/programs/industry-mentoring-program/BuildFoundation.jpg'} alt={'icon'} fill/>
                </AspectRatio>
              </Box>
            </Box>
          </Stack>

        </Stack>
      </Box>

      <Testimonials data={impData} />
      <Interested />
    </Box>
  );
}
