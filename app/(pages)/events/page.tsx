'use client';
import React, { useEffect, useState } from 'react';

import EventsCard from '@/components/EventsCard';

import {Grid, Stack, Box, Typography} from '@mui/joy';
import PageHeaderCard from '@/components/PageHeaderCard';
import HeadingBodyText from '@/components/HeadingBodyText';
import EventsCarousel from '@/components/Carousel/EventsCarousel';
import { getEvents } from "@/lib/api";

export default function Events() {
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [pastEvents, setPastEvents] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const events = await getEvents();

      const now = new Date();

      const upcoming = events.filter((event: any) => new Date(event.fields.dateTimeEnd) > now);
      const past = events.filter((event: any) => new Date(event.fields.dateTimeEnd) <= now);

      setUpcomingEvents(upcoming);
      setPastEvents(past);
    }

    fetchData();
  }, []);

  return (
    <Stack alignItems='center'>
      <PageHeaderCard imagePath={'/events/header.jpg'} pageTitle={'Events'}/>
      <HeadingBodyText heading='Upcoming Events' body='WIESoc hold many events throughout the year, with a great mix of industry
        and social events. Come and join us for our upcoming events!' color='graphite'/>

      {upcomingEvents.length > 0 ? (
        <Grid
          container
          justifyContent='center'
          sx={{ 'width': {xs: '100%', sm: '90%', md: '80%', lg: '70%', xl: '60%'} }}
          spacing={10}
          mb={10}
        >
          {upcomingEvents.map((event: any, index: number) => (
            <Grid
              xs={12} sm={12} md={6}
              key={index}
              display='flex'
              justifyContent='center'
              alignItems='center'
            >
              <Box flexGrow={1} justifyContent='center'>
                <EventsCard
                  key={index}
                  event={event}
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography 
          variant="soft"
          color="primary"
          className='dark-blue' 
          level='body' 
          textAlign='center' 
          sx={{textWrap: 'wrap', mb: 15, '--Typography-gap': '0.5rem'}}
        >
          <Box sx={{ fontStyle: 'italic' }}>
            There are currently no upcoming events. Stay tuned for future events!
          </Box>
        </Typography>
      )}
      
      <EventsCarousel heading='Past Events' body='WIESoc hold many events throughout the semester, with a great mix of industry and social events.
Browse our previous events over the past year!' slides={pastEvents} size='small'/>
    </Stack>
  );
};