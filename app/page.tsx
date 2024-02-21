import { AspectRatio, Box, Stack, Typography } from '@mui/joy';
import Image from 'next/image';

export default function Home() {
  return (
    <Stack>
        <AspectRatio sx={{height: "calc(100vh - 75px)", width: "100%", overflow:"hidden"}} objectFit="cover">
          <Image src={"/group_photo.JPG"} alt={"group of people"} fill/>
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              bgcolor: "#93AED3",
              opacity: "0.6",
            }}
          />
          <Stack
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
            }}
            alignItems="center"
            justifyContent="center"
            spacing={8}
          >
            <Typography component="h1" fontSize="70pt" sx={{color:"#FFFFFF"}}>
              UNSW Women In Engineering
            </Typography>
            <Typography component="h2" fontSize="30pt" sx={{color:"#FFFFFF"}}>
              Connect • Engage • Inspire
            </Typography>
          </Stack>

        </AspectRatio>
        <Stack>

        </Stack>
    </Stack>
  );
}
