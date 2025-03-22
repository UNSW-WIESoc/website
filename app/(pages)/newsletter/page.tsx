'use client';
import React, { useEffect, useState } from 'react';

import {Stack} from '@mui/joy';
import PageHeaderCard from '@/components/PageHeaderCard';
import { getNewsletter } from '@/lib/api';
import Carousel from '@/components/Carousel/Carousel';

export default function Newsletter() {
  const [pastNews, setPastNews] = useState([]);
  const OPTIONS = {
    loop: true, 
    skipSnaps: true,
    align: 'center',
    slidesToScroll: 'large'
  }
  
  useEffect(() => {
    async function fetchData() {
      const items = await getNewsletter();
      console.log("Fetched Newsletters:", items);
  
      const slides = items.map((item: any) => ({
        title: item.fields.title,
        date: item.fields.date,
        pdfUrl: item.fields.file.fields.url
      }));
      console.log("Slides:", slides);
  
      setPastNews(slides);
    }
    fetchData();
  }, []);  

  return (
    <Stack alignItems='center'>
        {/* TODO: CHANGE IMAGE */}
      <PageHeaderCard imagePath={'/events/header.jpg'} pageTitle={'Newsletter'}/> 
      {/* Add a current pub card? */}
      <Carousel 
        slides={pastNews} 
        size='small'
        options={OPTIONS}
        type='newsletter'
      />
    </Stack>
  );
};