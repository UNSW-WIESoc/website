import { AspectRatio, Box, Stack, Typography } from '@mui/joy';
import PersonIcon from '@mui/icons-material/Groups';
import Image from 'next/image';

export default function Home() {
  const aboutUsText = "We are a UNSW student-run society that facilitates members from all disciplines of engineering. \n \
  We run many social and industry events throughout the year as well as two Programs dedicated to mentoring and interpersonal development.\n \
  (The intro could probably mention something about women or all genders?)"

  return (
    <Box justifyContent='center'>
      <AspectRatio sx={{width: "100%", overflow:"hidden"}} objectFit="cover">
        <Image src={"/2024_group_photo.JPG"} alt={"group of people"} fill/>
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            bgcolor: "#93AED3",
            opacity: "0.7",
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
          <Typography level="h3" fontSize="72px" sx={{color:"#FFFFFF", textAlign: 'center'}}>
            UNSW Women In Engineering
          </Typography>
          <Typography level="title-lg" fontSize="30px" sx={{color:"#FFFFFF"}}>
            Connect • Engage • Inspire
          </Typography>
        </Stack>
      </AspectRatio>
      <Box mx='auto' my={15} width='1000px' height='100%'>
        <Typography level="h2" pb={3}>About Us</Typography>
        <Stack direction='row' spacing={8}>
          <Box width="500px">
            <Typography level="body-lg" pb={3}>{aboutUsText}</Typography>
            <Stack direction="row" width="100%" height="100%">
              <Box width="100%" textAlign='center'>
                <PersonIcon sx={{fontSize: '4rem', color: '#93AED3'}}/>
                <Typography level="body-md" fontWeight="600" textColor="#063776">2000+</Typography>
                <Typography level="body-md" fontWeight="600" textColor="#063776">members</Typography>
              </Box>
              <Box width="100%" textAlign='center'>
                <PersonIcon sx={{fontSize: '4rem', color: '#93AED3'}}/>
                <Typography level="body-md" fontWeight="600" textColor="#063776">2000+</Typography>
                <Typography level="body-md" fontWeight="600" textColor="#063776">members</Typography>
              </Box>
              <Box width="100%" textAlign='center'>
                <PersonIcon sx={{fontSize: '4rem', color: '#93AED3'}}/>
                <Typography level="body-md" fontWeight="600" textColor="#063776">2000+</Typography>
                <Typography level="body-md" fontWeight="600" textColor="#063776">members</Typography>
              </Box>
            </Stack>
          </Box>
          <Box width='500px'>
            <iframe width="100%" height='100%' src="https://www.youtube.com/embed/Tyyl9Kp-yiE?si=kk2dfErd_cJNYBbh" title="YouTube video player" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
}
