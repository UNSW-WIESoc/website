import { Box, Typography, Stack, Sheet } from '@mui/joy';
import Link from 'next/link';
import Image from 'next/image';
import {socialsData} from '@/app/data';
import { LinktreeIcon } from './SocialMediaIcons';


import React from 'react';
import FilledButton from './FilledButton';
import RectangleButton from './RectangleButton';

export default function Footer() {
  const darkBlue = '#063776';
  const iconSize = 35;

  return (
    <Sheet>
      <Box className='bg-light-blue' py={1}>
        <center>
          <Typography level='h2'>Join Us Here!</Typography>
                    
          <Stack direction='column' spacing={3} alignItems='center'>
            
            {/* Other social media icons above */}
            <Stack direction='row' justifyContent='center' spacing={{xs: 8, md: 10}}>
              {socialsData.filter(({ Icon }) => Icon !== LinktreeIcon).map(({ Icon, href }, idx) => (
                <Link key={idx} href={href} target='_blank'>
                  <Icon color={darkBlue} width={iconSize} height={iconSize}/>
                </Link>
              ))}
            </Stack>
          </Stack>
          <Box sx={{ my: 4 }}>
            <RectangleButton
              link="https://wiesoc.us4.list-manage.com/subscribe?u=e95b211468bdcfd709f05aa4c&id=d0e8493c10"
              text="Subscribe to our newsletter!"
              width="100"
            />
          </Box>
        </center>
      </Box>
      <Box className='bg-dark-blue' py={2} px={4}>
        <Stack direction='row' justifyContent='space-between' alignItems='center'>
          <Stack direction='row' sx={{alignItems: 'center'}}>
            <Image src={'/wiesoc_logo_short.svg'} alt={'wiesoc-logo'} height={60} width={60}/>
            <Box p={1}>
              <Typography level='subtitle' className='light-white' sx={{textAlign: 'left'}}>UNSW</Typography>
              <Typography level='subtitle' className='medium-blue' sx={{textAlign: 'left'}}>Women In Engineering Society</Typography>
            </Box>
          </Stack>

          <Stack direction='column' sx={{ textAlign: 'right' }}>
              <Typography level='body' sx={{ color: '#fff', fontSize: '0.7rem' }}>General enquiries: admin@wiesoc.com</Typography>
              <Typography level='body' sx={{ color: '#fff', fontSize: '0.7rem' }}>Sponsors: vicepresidentindustryrelations@wiesoc.com</Typography>
          </Stack>
        </Stack>
      </Box>
    </Sheet>
  );
}