import '../app/globals.css';

import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Typography from '@mui/joy/Typography';
import Image from 'next/image';
import Button from '@mui/joy/Button';
import Stack from '@mui/material/Stack';
import { formatEventDates } from '../lib/helpers/event';
import Box from '@mui/joy/Box';

export default function CareersCard({ event }: any) {
  if (!event || !event.fields) {
    return null;
  }

  const {
    img,
    title,
    dateTimeStart,
    dateTimeEnd,
    description,
    registerLink,
    facebookLink,
    location, 
    slug
  } = event.fields;
  const imgUrl = 'https:' + img.fields.file.url;
  const eventDateTimeStr = formatEventDates(dateTimeStart, dateTimeEnd);
  console.log(img.fields)

  return (
    <Card
      variant='outlined'
      className='shadow-hover border-round'
      sx={{
        minWidth: '300px',
        maxWidth: '600px',
        height: '100%'
      }}
    >
      <CardOverflow>
        <AspectRatio objectFit='contain'>
          <Image src={imgUrl} alt={title} objectFit='cover' fill/>
        </AspectRatio>
      </CardOverflow>
      <CardContent sx={{ height: '100%' }}>
        <Stack alignItems='center' py={1} spacing={1} sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography level='subtitle-lg' fontSize='xl' textAlign='center'>{title}</Typography>
            <Typography level='title-sm' textAlign='center'>{eventDateTimeStr}</Typography>
            <Typography level='title-sm' textAlign='center'>{location}</Typography>
          <Button 
            component='a' 
            href={facebookLink}
            target='_blank'
            className='bg-purple button-border-round'
            sx={{ mb: 'auto'}}
            >
            <Typography level='subtitle' pb={0.3} className='white'  sx={{ mt: 'auto' }}>
              View Event
            </Typography>
          </Button>
        </Stack>
      </CardContent>
    </Card>
  )
}
