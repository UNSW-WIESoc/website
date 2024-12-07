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
import { formatSingleDate } from '../lib/helpers/event';

export default function CareersCard({ event }: any) {
  if (!event || !event.fields) {
    return null;
  }

  const {
    closeDate,
    img,
    position,
    location,
    summary,
    companyName,
    link
  } = event.fields;
  const imgUrl = 'https:' + img.fields.file.url;
  const eventDateTimeStr = formatSingleDate(closeDate);

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
        <AspectRatio className='border-round-top' objectFit='contain'>
          <Image src={imgUrl} alt={position} objectFit='contain' fill/>
        </AspectRatio>
      </CardOverflow>
      <CardContent sx={{ height: '100%' }}>
        <Stack alignItems='center' py={1} spacing={0} sx={{ display: 'flex', flexDirection: 'column', height: '100%', width: '100%' }}>
          <Box sx={{ flex:'0 0 75px', alignItems:'center', width:'90%', display: '-webkit-box', WebkitBoxOrient: 'vertical', overflow: 'hidden', WebkitLineClamp: 3, textOverflow: 'ellipsis' }}>
            <Typography level='subtitle-lg' fontSize='xl' textAlign='center'>{position}</Typography>
          </Box>
          <Box sx={{ flex:'0 0 25px', width: '90%', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            <Typography level='title-sm' textAlign='center' sx={{ mb: 5 }}>{companyName}</Typography>
          </Box>
          <Button 
            component='a' 
            href={link}
            target='_blank'
            className='bg-purple button-border-round'
            sx={{ mb: 'auto', width: '40%'}}
            >
            <Typography level='subtitle' pb={0.3} className='white' sx={{ mt: 'auto'}}>
              Learn More
            </Typography>
          </Button>
        </Stack>
      </CardContent>
    </Card>
  )
}
