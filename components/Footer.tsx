import { Box, Typography, Stack, Sheet } from '@mui/joy';
import Link from 'next/link';
import Image from 'next/image';
import { Url } from 'next/dist/shared/lib/router/router';
import {FacebookIcon, InstagramIcon, LinkedInIcon} from '@/components/SocialMediaIcons';
import { LinkedIn } from '@mui/icons-material';


export default function Footer() {
  const darkBlue = '#063776';
  const iconSize = 35;

  return (
    <Sheet>
      <Box sx={{backgroundColor:'#D1E2F8', padding: '60px'}}>
        <center>
          <Typography level='h2' sx={{fontWeight: '500', fontColor: '#33373D'}}>Join Us Here</Typography>
          <Stack direction='row' justifyContent='center' spacing={10} sx={{color: darkBlue, padding: '40px'}}>
            <Box component={Link} href={'https://www.facebook.com/wieunsw/'} target='_blank' style={{textDecoration: 'none'}}>
              <FacebookIcon color={darkBlue} height={iconSize} width={iconSize}/>
              <Typography level='body-md'>Facebook</Typography>
            </Box>
            <Box component={Link} href={'https://www.instagram.com/wieunsw/'} target='_blank' style={{textDecoration: 'none'}}>
              <InstagramIcon color={darkBlue} height={iconSize} width={iconSize}/>
              <Typography level='body-md'>Instagram</Typography>
            </Box>
            <Box component={Link} href={'https://au.linkedin.com/company/unsw-wiesoc'} target='_blank' style={{textDecoration: 'none'}}>
              <LinkedInIcon color={darkBlue} height={iconSize} width={iconSize}/>
              <Typography level='body-md'>LinkedIn</Typography>
            </Box>
          </Stack>
          <Box sx={{padding: '30px'}}>
            <Typography>Have more questions? Contact us here:</Typography>
          </Box>
        </center>
      </Box>
      <Box sx={{backgroundColor:'#063776', padding: '10px 50px'}}>
        <Stack direction='row' sx={{alignItems: 'center'}}>
          <Image src={'/wiesoc_logo_short.svg'} alt={'wiesoc-logo'} height={60} width={60}/>
          <Box sx={{margin: '15px'}}>
            <Typography level='body-md' sx={{color: '#F6FAF9', fontWeight: '700'}}>UNSW</Typography>
            <Typography level='body-md' sx={{color: '#93AED3', fontWeight: '700'}}>Women In Engineering Society</Typography>
          </Box>
        </Stack>
      </Box>
    </Sheet>
  );
}