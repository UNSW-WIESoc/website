import { Box, Typography, Stack } from "@mui/joy";
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <Box sx={{backgroundColor:'#D1E2F8', padding: '20px'}}>
      <center>
        <Typography>Join Us Here</Typography>
        <Stack direction="row" justifyContent="center">
          <Link href="/">
            <Box sx={{padding: '40px'}}>
              <Image src={"/icon_facebook.svg"} alt={"facebook-logo"} height={30} width={30}/>
              <Typography>Facebook</Typography>
            </Box>
          </Link>
          <Link href="/">
            <Box sx={{padding: '40px'}}>
              <Image src={"/icon_instagram.svg"} alt={"instagram-logo"} height={30} width={30}/>
              <Typography>Instagram</Typography>
            </Box>
          </Link>
          <Link href="/">
            <Box sx={{padding: '40px'}}>
              <Image src={"/icon_linkedin.svg"} alt={"linkedin-logo"} height={30} width={30}/>
              <Typography>LinkedIn</Typography>
            </Box>
          </Link>
        </Stack>
      </center>
    </Box>
  );
}