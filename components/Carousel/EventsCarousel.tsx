import HeadingBodyText from '@/components/HeadingBodyText';
import Carousel from './Carousel';
import { Box, Typography } from '@mui/joy';

interface EventsCarouselProps {
  heading: string;
  body: string;
  slides: Array<number>; // TODO: Will need to be changed to suit slides data when connected to contentful
  size: 'large' | 'small'
}

export default function EventsCarousel({heading, body, slides, size} : EventsCarouselProps) {

  const OPTIONS = {
    loop: true, 
    skipSnaps: true,
    align: (size == 'large' ? 'center' : 'start'),
    slidesToScroll: (size == 'large' ? 1 : 'auto')
  }

  return (
    <Box className='bg-medium-blue' sx={{justifyContent: 'center'}} pb={3} width='100%'>
      <HeadingBodyText heading={heading} body={body} color='light-white'/>
      {slides.length > 0 && (
        <Carousel slides={slides} options={OPTIONS} size={size} />
      )}
      {slides.length == 0 && (
        <Typography className='dark-blue' level='body' textAlign='center' px={3} 
        sx={{
          textWrap: 'wrap',
          paddingBottom: '30px'
        }}>
          No upcoming events currently, check back later!
        </Typography>
      )}
    </Box>
  );
}
