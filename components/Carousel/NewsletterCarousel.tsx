import HeadingBodyText from '@/components/HeadingBodyText';
import Carousel from './Carousel';
import { Box, Typography, Button } from '@mui/joy';

interface NewsletterCarouselProps {
  heading: string;
  body: string;
  newsletters: Array<any>;
  size: 'large' | 'small';
}

export default function NewsletterCarousel({ heading, body, newsletters, size }: NewsletterCarouselProps) {
  const OPTIONS = {
    loop: true,
    skipSnaps: true,
    align: size === 'large' ? 'center' : 'start',
    slidesToScroll: size === 'large' ? 1 : 'auto',
  };

  console.log('Newsletters:', newsletters);
  

  return (
    <Box className='bg-medium-blue' sx={{ justifyContent: 'center' }} pb={3} width='100%'>
      <HeadingBodyText heading={heading} body={body} color='light-white' />
      {newsletters.length > 0 ? (
        <Carousel
          options={OPTIONS} // Ensure options are passed to Carousel
          size='small'
          slides={newsletters}
        />
      ) : (
        <Typography level='body-sm' color='neutral'>No newsletters available</Typography>
      )}
    </Box>
  );
}