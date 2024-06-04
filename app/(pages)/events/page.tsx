import EventsCard from '@/components/EventsCard';

import {Grid, Stack, Typography} from '@mui/joy';
import PageHeaderCard from "@/components/PageHeaderCard";

export default function Events() {
  return (
    <Stack>
      <PageHeaderCard imagePath={'/events/header.jpg'} pageTitle={'Events'}/>
      <Typography level="h1" mt={10}>Upcoming Events</Typography>
      <Typography level="body-md" textAlign={'center'} mb={10}>
        WIESoc hold many events throughout the year, with a great mix of industry
        and social events. Come and join us for our upcoming events!
      </Typography>
      <Stack
        justifyContent='center'
        alignItems='center'
        mb={10}
        sx={{ width: '100%' }}
      >
        <Grid
          container
          justifyContent='center'
          sx={{ width: '70%' }}
          spacing={5}
        >
          {Array.from(Array(6)).map((_, index) => (
            <Grid
              xs={12} sm={6} md={6}
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
    </Stack>
  );
}
