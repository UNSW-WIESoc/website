import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Divider from '@mui/joy/Divider';
import Typography from '@mui/joy/Typography';
import Image from 'next/image';
import Button from '@mui/joy/Button';


export default function EventsCard() {
  return (
    <Card variant="outlined" sx={{ width: 600 }}>
      <CardOverflow>
        <AspectRatio ratio="2">
          <Image src={"/event_banner.JPG"} alt={"group of people"} fill/>
        </AspectRatio>
      </CardOverflow>
      <CardContent>
        <Typography level="title-lg">WIESoc Study Lounge</Typography>
        <Typography level="body-sm">Wednesday 17th April, 12:00 - 14:00</Typography>
      </CardContent>
    </Card>
  )
}
