import HeadingBodyText from '@/components/HeadingBodyText';
import Carousel from './Carousel';
import { Box, Typography } from '@mui/joy';

interface NewsletterCarouselProps {
  heading: string;
  body: string;
  slides: Array<number>; // TODO: Will need to be changed to suit slides data when connected to contentful
  size: 'large' | 'small'
}

export default function NewsletterCarousel({heading, body, slides, size} : NewsletterCarouselProps) {

  const OPTIONS = {
    loop: true, 
    skipSnaps: true,
    align: (size == 'large' ? 'center' : 'start'),
    slidesToScroll: (size == 'large' ? 1 : 'auto')
  }

  return (
    <Box className='bg-medium-blue' sx={{justifyContent: 'center'}} pb={3} width='100%'>
      <HeadingBodyText heading={heading} body={body} color='light-white'/>
      <Carousel slides={slides} options={OPTIONS} size={size} type='newsletter' />
    </Box>
  );
}