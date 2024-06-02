import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Divider from '@mui/joy/Divider';
import Typography from '@mui/joy/Typography';
import Image from 'next/image';
import Button from '@mui/joy/Button';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Box } from '@mui/joy';

// Hardedcoded for now
// TODO (rbeccahsu): Work on integrating website with Contentful

export default function EventsCard() {
  return (
    <Card 
      variant="outlined" 
      sx={{
        width: 600,
        '&:hover': { boxShadow: 'md', borderColor: 'neutral.outlinedHoverBorder' },
      }}
    >
      <CardOverflow>
        <AspectRatio objectFit="contain">
          <Image src={"/event_banner.JPG"} alt={"group of people"} fill/>
        </AspectRatio>
      </CardOverflow>
      <CardContent>
        <Typography level="h3" fontSize="xl" sx={{ mt: 1 }}>WIESoc Study Lounge</Typography>
        <Typography level="body-sm">Wednesday 17th April, 12:00 - 14:00</Typography>

        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
          <Button 
            component="a" 
            href="https://fb.me/e/6IzxSbHFH"
            startDecorator={<FacebookIcon />}
            sx={{ 
              mt: 2, 
              width: 1/3, 
              bgcolor: '#9396D3', 
              '&:hover': { backgroundColor: '#777AD5' },
              mx: 'auto'
            }}
            >
            View Event
            </Button>
        </Box>
      </CardContent>
    </Card>
  )
}
