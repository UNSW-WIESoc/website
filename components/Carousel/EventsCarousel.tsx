import HeadingBodyText from '@/components/HeadingBodyText';
import EventsCard from '@/components/EventsCard';
import Carousel from './Carousel';
import { Box } from '@mui/joy';

interface EventsCarouselProps {
  heading: string;
  body: string;
  slides: Array<number>; // TODO: Will need to be changed to suit slides data when connected to contentful
}

export default function EventsCarousel({heading, body, slides} : EventsCarouselProps) {

  const OPTIONS = { align: 'start' }
  
  return (
    <Box className='bg-medium-blue' sx={{justifyContent: 'center'}}>
      <HeadingBodyText heading={heading} body={body} color='light-white'/>
      <Carousel slides={slides} options={OPTIONS} />
      <Box sx={{display: 'flex', justifyContent: 'center'}}>
        {/* <Stack
          width={{xs: '90%', sm: '90%', md: '80%', lg: '70%', xl: '60%'}}
          direction='row'
          pb={10}
          spacing={3}
          sx={{
            overflow: 'scroll',
            scrollSnapType: 'x mandatory',
            '& > *': {
              scrollSnapAlign: 'start',
            },
            '::-webkit-scrollbar': { display: 'none'}
          }}
        >
          {Array(6).fill(0).map((_, index) => (
            <EventsCard key={index}/>
          ))}
        </Stack> */}
      </Box>
    </Box>
  );
}