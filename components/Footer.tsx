import { Box, Typography, Stack, Sheet } from '@mui/joy';
import Link from 'next/link';
import Image from 'next/image';
import {FacebookIcon, InstagramIcon, LinkedInIcon} from '@/components/SocialMediaIcons';

export default function Footer() {
  const darkBlue = '#063776';
  const iconSize = 35;

  return (
    <Sheet>
      <Box className='bg-light-blue' py={4}>
        <center>
          <Typography level='h2'>Join Us Here</Typography>
          <Stack direction='row' justifyContent='center' spacing={10}>
            <Box component={Link} href={'https://www.facebook.com/wieunsw/'} target='_blank' style={{textDecoration: 'none'}}>
              <FacebookIcon color={darkBlue} height={iconSize} width={iconSize}/>
              <Typography className='dark-blue' level='body'>Facebook</Typography>
            </Box>
            <Box component={Link} href={'https://www.instagram.com/wieunsw/'} target='_blank' style={{textDecoration: 'none'}}>
              <InstagramIcon color={darkBlue} height={iconSize} width={iconSize}/>
              <Typography className='dark-blue' level='body'>Instagram</Typography>
            </Box>
            <Box component={Link} href={'https://au.linkedin.com/company/unsw-wiesoc'} target='_blank' style={{textDecoration: 'none'}}>
              <LinkedInIcon color={darkBlue} height={iconSize} width={iconSize}/>
              <Typography className='dark-blue' level='body'>LinkedIn</Typography>
            </Box>
          </Stack>
          <Stack direction="column" spacing={2} py={10}>
            <Typography level='body'>Have more questions? Contact us here:</Typography>
            <Typography level='body'>some_email@wiesoc.com.au</Typography>
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