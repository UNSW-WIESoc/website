import '../app/globals.css';

import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import Box from '@mui/joy/Box';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Typography from '@mui/joy/Typography';
import Image from 'next/image';
import Button from '@mui/joy/Button';
import Stack from '@mui/material/Stack';
import { FacebookIcon } from '@/components/SocialMediaIcons';
import { formatEventDates } from '../lib/helpers/event';
import FilledButton from '@/components/FilledButton';

export default function EventsCard({ event }: any) {
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
        <AspectRatio className='border-round-top' objectFit='cover'>
          <Image src={imgUrl} alt={title} objectFit='cover' fill/>
        </AspectRatio>
      </CardOverflow>
      <CardContent sx={{ height: '100%' }}>
        <Stack alignItems='center' py={1} spacing={1} sx={{ display: 'flex', flexDirection: 'column', height: '100%', width: '100%' }}>
          <Box sx={{ flex:'0 0 39%', alignItems:'center', width:'90%', display: '-webkit-box', WebkitBoxOrient: 'vertical', overflow: 'hidden', WebkitLineClamp: 3, textOverflow: 'ellipsis' }}>
            <Typography level='subtitle-lg' fontSize='xl' textAlign='center'>{title}</Typography>
          </Box>
          <Box sx={{ flex:'0 0 23%', width:'90%', display: '-webkit-box', WebkitBoxOrient: 'vertical', overflow: 'hidden', WebkitLineClamp: 2, textOverflow: 'ellipsis' }}>
            <Typography level='title-sm' textAlign='center' sx={{ width: '100%' }}>{eventDateTimeStr}</Typography>
          </Box>
          <Box sx={{ flex:'0 0 13%', width: '90%', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            <Typography level='title-sm' textAlign='center' sx={{ pt: 0 }}>{location}</Typography>
          </Box>
          <FilledButton
            link={facebookLink}
            Icon={FacebookIcon}
            text="View Event"
            width="60%"
            newTab={true}
          />
        </Stack>
      </CardContent>
    </Card>
  )
}
