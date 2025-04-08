'use client';
import React, { useEffect, useState } from 'react';
import { Stack } from '@mui/joy';
import PageHeaderCard from '@/components/PageHeaderCard';
import { getNewsletter } from '@/lib/api';
import Carousel from '@/components/Carousel/Carousel';
import NewsletterCarousel from '@/components/Carousel/NewsletterCarousel';

export default function Newsletter() {
  const [pastNews, setPastNews] = useState([]);
  const desc = 'Keep up to date on event highlights and upcoming opportunities with our new monthly newsletter!';
  
  useEffect(() => {
    async function fetchData() {
      const items = await getNewsletter();
      console.log("Fetched Newsletters:", items);
      setPastNews(items);
    }
    fetchData();
  }, []);  

  return (
    <Stack alignItems='center'>
        {/* TODO: CHANGE IMAGE */}
      <PageHeaderCard imagePath={'/events/header.jpg'} pageTitle={'Newsletter'}/> 
      {/* Add a current pub card? */}
      <NewsletterCarousel size='small' slides={pastNews} heading="WIESoc O'Clock" body={desc} />
    </Stack>
  );
};