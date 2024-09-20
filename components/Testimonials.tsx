import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/joy/Typography';
import HorizontalLine from '@/components/HorizontalLine';
import Quote from '@/components/Quote';

interface TestimonialData {
    quote: string;
    by: string;
}
  
interface TestimonialsProps {
    data: TestimonialData[];
}

export default function Testimonials({ data }: TestimonialsProps) {
  return (
    <Stack
      py={5}
      px={5}
      mx='auto'
      textAlign='center'
      justifyContent='center'
      maxWidth={1250}
      width='100%'
      alignItems='center'
    >
      <Typography level='subtitle-lg' mb={5}>
        Hear from our previous mentors and mentees
      </Typography>
      <Stack spacing={5} direction='column' width='100%'>
        <Box display='flex' justifyContent='center' width='100%'>
          <HorizontalLine color='#93AED3' height={2} width={1200} />
        </Box>
        {data.map(({ quote, by }: any, idx: number) => (
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
