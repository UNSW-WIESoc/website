import { Box, Typography, Stack, Sheet } from '@mui/joy';
import Link from 'next/link';
import Image from 'next/image';
import {socialsData} from '@/app/data';
import { LinktreeIcon } from './SocialMediaIcons';


import React from 'react';

export default function Footer() {
  const darkBlue = '#063776';
  const iconSize = 35;

  return (
    <Sheet>
      <Box className='bg-light-blue' py={1}>
        <center>
          <Typography level='h2'>Join Us Here</Typography>
                    
          <Stack direction='column' spacing={3} alignItems='center'>
            
            {/* Other social media icons above */}
            <Stack direction='row' justifyContent='center' spacing={{xs: 8, md: 10}}>
              {socialsData.filter(({ Icon }) => Icon !== LinktreeIcon).map(({ Icon, href }, idx) => (
                <Link key={idx} href={href} target='_blank'>
                  <Icon color={darkBlue} width={iconSize} height={iconSize}/>
                </Link>
              ))}
            </Stack>

            {/* LinktreeIcon below other icons */}
            <Link href="https://linktr.ee/wiesocunsw?fbclid=PAZXh0bgNhZW0CMTEAAafuyPt_Y1LKwGW2P6pO6TW5GvMVS-JuHEQsIvb4-9FE1WEoWdUf10t6RhNqQA_aem_Fx5BWhmESOvrswBF2z76Mg" target='_blank'>
              <LinktreeIcon color={darkBlue} width={120} height={30}/>
            </Link>
          </Stack>
          <Stack direction='column' spacing={2} py={6}>
            <Typography level='body'>General enquiries: admin@wiesoc.com:</Typography>
            <Typography level='body'>Industry-related enquiries: vicepresidentindustryrelations@wiesoc.com</Typography>
          </Stack>
        </center>
      </Box>
      <Box className='bg-dark-blue' py={2} px={4}>
        <Stack direction='row' sx={{alignItems: 'center'}}>
          <Image src={'/wiesoc_logo_short.svg'} alt={'wiesoc-logo'} height={60} width={60}/>
          <Box p={1}>
            <Typography level='subtitle' className='light-white' sx={{textAlign: 'left'}}>UNSW</Typography>
            <Typography level='subtitle' className='medium-blue' sx={{textAlign: 'left'}}>Women In Engineering Society</Typography>
          </Box>
        </Stack>
      </Box>
    </Sheet>
  );
}