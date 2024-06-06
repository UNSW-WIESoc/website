import { Stack, Box, Typography, Card, CardOverflow, Grid, AspectRatio, CardContent,Sheet } from '@mui/joy';
import Image from 'next/image';
import PageHeaderCard from '@/components/PageHeaderCard';
import HeadingBodyText from '@/components/HeadingBodyText';
import OutlineButton from '@/components/OutlineButton';

interface cardProps {
  picture: string;
  cardName: string;
  cardText: string;
  link: string;
}

function AboutUsCard({picture, cardName, cardText,link}: cardProps) {
  return (
      <Card className='shadow-hover' variant='plain' sx={{ width: {xs: '90%'}, height: { md:'600px'}}}>
        <CardOverflow>
          <AspectRatio ratio='2'>
            <Image 
            src={picture}
            alt=''
            fill
            />
          </AspectRatio>
        </CardOverflow>

        <CardContent>
          <Stack direction='column' alignItems='center'>
            <Typography level='h2'
              textAlign='center'>
              {cardName}
            </Typography>
            <Typography level='body' pb={3}
              textAlign='center'>
              {cardText}
            </Typography>
            <Box sx={{ mb: 3 }}> 
            <OutlineButton text='Learn More' link={link} />
          </Box>
          </Stack>
        </CardContent>
      </Card>
  );

}
export default function AboutUs() {

  const aboutWIEsocText = 'We are a UNSW student-run society that facilitates members from all \
                          disciplines of engineering. We run many social and industry events \
                          throughout the year as well as two programs dedicated to mentoring \
                          and interpersonal development. Our society provides a supportive network \
                          for all our members, whether past, present or future students, to advocate \
                          gender acceptance and equality in all facets of the engineering industry.'
            
  return (
    <Sheet>
      <Stack justifyContent='center'>
        <PageHeaderCard imagePath={'/about-us/header.jpg'} pageTitle={'About Us'}/>
      </Stack>
      <HeadingBodyText heading='About WIESoc' body={aboutWIEsocText} color='graphite'/>
      <Sheet>
        <Stack className='bg-medium-blue' sx={{height: '100%', width: '100%'}} justifyContent='center'>
          <Typography level='h1' className='white' textAlign='center' pt={5} >
              What We Do 
          </Typography>
          <Grid container 
                    justifyContent='flex-end'
                    sx={{ 'width': '100%' }}
                    pb={2}
                    alignItems='center'
          >
            <Grid
              xs={24} sm={12} md={6}
              display='flex'
              justifyContent='center'
              pb={5}
            >
              <AboutUsCard picture='/eventsCard.png' 
                        cardName='Events' 
                        cardText='WIESoc hold many events throughout the year, 
                            with a great mix of industry and social events. Come and 
                            join us for our upcoming events'
                        link='/events'
              />
            </Grid>
            <Grid
              xs={24} sm={12} md={6}
              display='flex'
              justifyContent='center'
              alignItems='center'
              pb={5}
            >
              <AboutUsCard picture='/programsCard.png' 
                        cardName='Programs' 
                        cardText='Our Industry Mentoring Program and Protege Program 
                            can cater to you personal and professional development'
                        link='/programs'
              />    
            </Grid>
          </Grid>
        </Stack>
      </Sheet>
    </Sheet>

  );
}
