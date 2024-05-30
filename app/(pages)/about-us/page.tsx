import { Stack, Box, Typography, Card, CardOverflow, AspectRatio, CardContent,Sheet } from '@mui/joy';
import { shadows } from '@mui/system';



interface cardProps {
  picture: string;
  cardName: string;
  cardText: string;
}

function AboutusCard({picture, cardName, cardText}: cardProps) {
  return (
      <Card variant="plain" sx={{ width:"585px", height:"566px", bgcolor:'F5F5F5', boxShadow: 3 }}>
        <CardOverflow>
          <AspectRatio ratio="2">
            <img 
            src={picture}
            alt=""
            />
          </AspectRatio>
        </CardOverflow>

        <CardContent>
          <Typography fontSize="30px" pb={3} pt={2} fontWeight="530"
            sx={{textAlign:'center'}}>
            {cardName}
          </Typography>
          <Typography fontSize="16px" px={2} fontWeight="250"
            sx={{textAlign:'center'}}>
            {cardText}
          </Typography>
        </CardContent>
      </Card>
  );

}
export default function AboutUs() {

  const aboutWIEsocText = "We are a UNSW student-run society that facilitates members from all \n \
                          disciplines of engineering. We run many social and industry events \n \
                          throughout the year as well as two programs dedicated to mentoring \n \
                          and interpersonal development. Our society provides a supportive network \n \
                          for all our members, whether past, present or future students, to advocate \n \
                          gender acceptance and equality in all facets of the engineering industry."


            
  return (
    <Box justifyContent='center'>
      <Box justifyContent='center'>
        <Typography level="h3" fontSize="30px" py={5} sx={{textAlign:'center', color:'#33373D'}}>
          About WIESoc
        </Typography>
        <Typography fontSize="20px" pb={10} px={18}>
          {aboutWIEsocText}
        </Typography>
      </Box>
      <Sheet variant="solid" sx={{height: 744, width: "100%", backgroundColor:'#93AED3'}}>
          <Typography level="h4" fontSize="30px" pb={3} pt={3} sx={{color:"#FFFFFF", textAlign: 'center'}}>
            What We Do 
          </Typography>
        <Stack direction="row" spacing={8} pb={2} alignItems="center" justifyContent="center">
          <AboutusCard picture='/eventsCard.png' 
                      cardName='Events' 
                      cardText='WIESoc hold many events throughout the year, 
                          with a great mix of industry and social events. Come and 
                          join us for our upcoming events'
          />


          <AboutusCard picture='/programsCard.png' 
                      cardName='Programs' 
                      cardText='Our Industry Mentoring Program and Protege Program 
                          can cater to you personal and professional development'
          />           
        </Stack>

      </Sheet>

    </Box>

  );
}
