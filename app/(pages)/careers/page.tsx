'use client';
import {Grid, Stack, Box} from '@mui/joy';
import PageHeaderCard from "@/components/PageHeaderCard";
import HeadingBodyText from '@/components/HeadingBodyText';
import { getJobs } from "@/lib/api";
import React, { useEffect, useState } from 'react';
import CareersCard from '@/components/CareersCard';

export default function Careers() {
  const [careerEvents, setCareers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const events = await getJobs();

      const careerEvents = events.filter((event: any) => new Date(event.fields.dateTimeEnd));

      setCareers(careerEvents);
    }

    fetchData();
  }, []);

   return (
    <Stack alignItems='center'>
      <PageHeaderCard imagePath={'/careers/header.jpg'} pageTitle={'Careers'}/>
      <HeadingBodyText heading='Jobs and Opportunities' body='Discover corporate 
        sponsored events and activities to expand your professional networks and skills.' color='graphite' />
      <Grid
        container
        justifyContent='center'
        sx={{ 'width': {xs: '100%', sm: '90%', md: '80%', lg: '70%', xl: '60%'} }}
        spacing={10}
        mb={10}
      >
        {currJobs && currJobs?.map((event: any, index: number) => (
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
    </Stack>
  );
}


