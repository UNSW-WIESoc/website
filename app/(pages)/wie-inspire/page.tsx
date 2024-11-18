'use client';
import { useEffect, useState } from "react";

import HeadingBodyText from "@/components/HeadingBodyText";
import PageHeaderCard from "@/components/PageHeaderCard";
import { Box, Grid, Stack, Typography } from "@mui/joy";
import { getWIEInspire } from "@/lib/api";
import WIEInspireCard from "@/components/WIEInspireCard";

export default function WIEInspire() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const articles = await getWIEInspire();
      setArticles(articles);
    }

    fetchData();
  }, []);
  console.log(articles);

  return(
    <Stack alignItems='center'>
      <PageHeaderCard imagePath={'/wie-inspire/header.jpg'} pageTitle={'WIE Inspire'}/>
      <HeadingBodyText heading='WIE Inspire' body='Welcome to the WIEInspire Series! In WIESoc, we celebrate the diverse experiences and insights of individuals in our community by conducting interviews on relevant topics that resonate with our shared interests and goals.' color='graphite'/>

        <Grid
          container
          justifyContent='center'
          sx={{ 'width': {xs: '100%', sm: '90%', md: '80%', lg: '70%', xl: '60%'} }}
          spacing={10}
          mb={10}
        >
          {articles.length > 0 ? (
            articles.map((article: any, index: number) => (
              <Grid
                xs={12} sm={12} md={6}
                key={index}
                display='flex'
                justifyContent='center'
                alignItems='center'
              >
                <Box flexGrow={1} justifyContent='center' sx={{ height: '100%', width: '100%' }}>
                  <WIEInspireCard
                    key={index}
                    article={article}
                  />
                </Box>
              </Grid>
            ))
            ) : (
              <Grid xs={12} display='flex' justifyContent='center' alignItems='center'>
                <Box>
                  <Typography>No articles at the moment. Please check in later!</Typography>
                </Box>
              </Grid>
            )
          }
        </Grid>
    </Stack>
  )
}