import React from 'react';
import { ArrowForward } from '@mui/icons-material';
import Card from '@mui/joy/Card';
import { Typography, Box, Stack } from '@mui/joy';
import CardContent from '@mui/joy/CardContent';
import FilledButton from './FilledButton';

function monthDate(dateString: string): string {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long' };
  return date.toLocaleDateString(undefined, options);
}

export default function NewsletterCard({ newsletter }: any) {
  const { name, date, file } = newsletter.fields;
  const url =  'https:' + file.fields.file.url;
  const pubDate = monthDate(date);

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
      <CardContent sx={{ height: '100%' }}>
        <Stack alignItems='center' py={1} spacing={1} sx={{ display: 'flex', flexDirection: 'column', height: '100%', width: '100%' }}>
          <Box sx={{ flex:'0 0 39%', alignItems:'center', width:'90%', display: '-webkit-box', WebkitBoxOrient: 'vertical', overflow: 'hidden', WebkitLineClamp: 3, textOverflow: 'ellipsis' }}>
            <Typography level='subtitle-lg' fontSize='xl' textAlign='center'>{name}</Typography>
          </Box>
          <Box sx={{ flex:'0 0 23%', width:'90%', display: '-webkit-box', WebkitBoxOrient: 'vertical', overflow: 'hidden', WebkitLineClamp: 2, textOverflow: 'ellipsis' }}>
            <Typography level='title-sm' textAlign='center' sx={{ width: '100%' }}>{pubDate}</Typography>
          </Box>
          <FilledButton
            link={url}
            Icon={ArrowForward}
            text='View'
            width="60%"
            newTab={true}
          />
        </Stack>
      </CardContent>
    </Card>
  )
}