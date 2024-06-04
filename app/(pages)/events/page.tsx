import EventsCard from '@/components/EventsCard';

import {Grid, Stack, Typography} from '@mui/joy';
import PageHeaderCard from "@/components/PageHeaderCard";
import HeadingBodyText from "@/components/HeadingBodyText";

export default function Events() {
  return (
    <Stack alignItems='center'>
      <PageHeaderCard imagePath={'/events/header.jpg'} pageTitle={'Events'}/>
      <HeadingBodyText heading='Upcoming Events' body='WIESoc hold many events throughout the year, with a great mix of industry
        and social events. Come and join us for our upcoming events!' color='graphite'/>
      <Grid
        container
        justifyContent='center'
        sx={{ 'width': {xs: '100%', sm: '90%', md: '80%', lg: '70%'} }}
        spacing={10}
        mb={10}
      >
        {Array.from(Array(6)).map((_, index) => (
          <Grid
            xs={12} sm={12} md={6}
            key={index}
            display='flex'
            justifyContent='center'
            alignItems='center'
          >
            <EventsCard />
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
}
