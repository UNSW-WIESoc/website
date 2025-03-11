'use client';
import React, { useEffect, useState } from 'react';

import {Grid, Stack, Box, Typography} from '@mui/joy';
import PageHeaderCard from '@/components/PageHeaderCard';
import HeadingBodyText from '@/components/HeadingBodyText';
import EventsCarousel from '@/components/Carousel/EventsCarousel';
import { getEvents } from "@/lib/api";

export default function Newsletter() {
  const [pastEvents, setPastEvents] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const events = await getEvents();

      const now = new Date();

      const upcoming = events.filter((event: any) => new Date(event.fields.dateTimeEnd) > now);
      const past = events.filter((event: any) => new Date(event.fields.dateTimeEnd) <= now);

      setPastEvents(past);
    }

    fetchData();
  }, []);

  const example = {
    closeDate: "",
    img: "",
    position: "",
    location: "",
    summary: "",
    companyName: "",
    link: "/public/"
  }

  return (
    <Stack alignItems='center'>
        {/* TODO: CHANGE IMAGE */}
      <PageHeaderCard imagePath={'/events/header.jpg'} pageTitle={'Newsletter'}/> 
      <HeadingBodyText heading="WIESoc O'Clock" body="Keep up to date on event highlights and upcoming opportunities with our new monthly newsletter!" color='graphite'/>
      {/* Add a current pub card? */}
      <EventsCarousel heading='Archive' body='Browse through our previous publications!' slides={pastEvents} size='small'/>
    </Stack>
  );
};