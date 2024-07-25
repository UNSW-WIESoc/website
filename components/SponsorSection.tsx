import { Box, Typography } from '@mui/joy';
import HorizontalLine from './HorizontalLine';

interface SectionTitle {
  title: string;
}

export default function SponsorSection({ title }: SectionTitle) {
  return (
    <Box mt={7}>
      <Typography level='h2-blue'>
        {title}
      </Typography>
      <Box display='flex'>
        <HorizontalLine color='#93AED3' height={1} width={4000}/>
      </Box>
    </Box>
  )
}