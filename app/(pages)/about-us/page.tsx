import { Stack, Box, Typography, Card, CardOverflow, AspectRatio, CardContent,Sheet } from '@mui/joy';
import Image from 'next/image';

interface cardProps {
  picture: string;
  cardName: string;
  cardText: string;
}

function AboutUsCard({picture, cardName, cardText}: cardProps) {
  return (
      <Card className='light-wight' variant='plain' sx={{ width:'585px', height:'566px', boxShadow: 3 }}>
        <CardOverflow>
          <AspectRatio ratio='2'>
            <Image 
            src={picture}
            alt=''
            />
          </AspectRatio>
        </CardOverflow>

        <CardContent>
          <Stack direction='column' alignItems='center'>
            <Typography fontSize='30px' pb={3} pt={2} fontWeight='530'
              sx={{textAlign:'center'}}>
              {cardName}
            </Typography>
            <Typography fontSize='16px' px={2} fontWeight='250'
              sx={{textAlign:'center'}}>
              {cardText}
            </Typography>
          </Stack>
        </CardContent>
      </Card>
  );

}
export default function AboutUs() {

  const aboutWIEsocText = 'We are a UNSW student-run society that facilitates members from all \n \
                          disciplines of engineering. We run many social and industry events \n \
                          throughout the year as well as two programs dedicated to mentoring \n \
                          and interpersonal development. Our society provides a supportive network \n \
                          for all our members, whether past, present or future students, to advocate \n \
                          gender acceptance and equality in all facets of the engineering industry.'


            
  return (
    <Sheet>
      <center>
      <Typography level='h3' fontSize='30px' className='graphite' py={5} sx={{textAlign:'center'}}>
          About WIESoc
        </Typography>
        <Typography fontSize='20px' pb={10} px={18}>
          {aboutWIEsocText}
        </Typography>
      </center>
      <Sheet>
        <Box className='bg-medium-blue' sx={{height: 744, width: '100%'}}>
        <Typography level='h4' fontSize='30px' className='light-white' pb={3} pt={3} sx={{textAlign: 'center'}}>
            What We Do 
          </Typography>
        <Stack direction='row' spacing={8} pb={2} alignItems='center' justifyContent='center'>
          <AboutUsCard picture='/eventsCard.png' 
                      cardName='Events' 
                      cardText='WIESoc hold many events throughout the year, 
                          with a great mix of industry and social events. Come and 
                          join us for our upcoming events'
          />


          <AboutUsCard picture='/programsCard.png' 
                      cardName='Programs' 
                      cardText='Our Industry Mentoring Program and Protege Program 
                          can cater to you personal and professional development'
          />           
        </Stack>
        </Box>
      </Sheet>
    </Sheet>

  );
}
