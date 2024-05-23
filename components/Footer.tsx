import { Box, Typography, Stack } from '@mui/joy';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <Box sx={{backgroundColor:'#D1E2F8', padding: '40px'}}>
      <center>
        <Typography level='h3' sx={{padding: '20px'}}>Join Us Here</Typography>
        <Stack direction='row' justifyContent='center'>
          <Link href='/'>
            <Box sx={{padding: '40px', textDecoration: 'none'}}>
              <Image src={'/icon_facebook.svg'} alt={'facebook-logo'} height={30} width={30}/>
              <Typography level='body-md' sx={{color: '#063776'}}>Facebook</Typography>
            </Box>
          </Link>
          <Link href='/'>
            <Box sx={{padding: '40px', textDecoration: 'none'}}>
              <Image src={'/icon_instagram.svg'} alt={'instagram-logo'} height={30} width={30}/>
              <Typography sx={{fontSize: '16pt', color: '#063776'}}>Instagram</Typography>
            </Box>
          </Link>
          <Link href='/'>
            <Box sx={{padding: '40px', textDecoration: 'none'}}>
              <Image src={'/icon_linkedin.svg'} alt={'linkedin-logo'} height={30} width={30}/>
              <Typography sx={{fontSize: '16pt', color: '#063776'}}>LinkedIn</Typography>
            </Box>
          </Link>
        </Stack>
      </center>
    </Box>
  );
}