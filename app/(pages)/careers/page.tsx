'use client';
import React, { useEffect, useState } from 'react';

import { Grid, Stack, Box } from '@mui/joy';
import PageHeaderCard from "@/components/PageHeaderCard";
import HeadingBodyText from '@/components/HeadingBodyText';
import { getJobs } from "@/lib/api";
import EventsCarousel from '@/components/Carousel/EventsCarousel';

export default function Careers() {
  const [currJobs, setCurrJobs] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const jobs = await getJobs();
      setCurrJobs(jobs);
    }

    fetchData();
  }, []);

   return (
    <Stack alignItems='center'>
    <PageHeaderCard imagePath={'/careers/header.jpg'} pageTitle={'Careers'}/>
    <HeadingBodyText heading='Jobs and Opportunities' body='Discover corporate 
      sponsored events and activities to expand your professional networks and skills.' color='graphite' />
    </Stack>
  );
}


