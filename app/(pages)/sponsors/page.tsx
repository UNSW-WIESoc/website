import { Box, Stack, Typography } from '@mui/joy';
import PageHeaderCard from '@/components/PageHeaderCard';
import HeadingBodyText from '@/components/HeadingBodyText';
import SponsorSection from '@/components/SponsorSection';
import Image from 'next/image';

interface sponsorRows {
  maxWidth: string;
  imageComponent: string;
  imageName: string;
}

function SponsorRows ({maxWidth, imageComponent, imageName}: sponsorRows) {
  return(
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        maxWidth: maxWidth
      }}
    >
      <Image src={imageComponent} alt={imageName} layout='responsive' width={500} height={200}/>
    </Box>
  )
}

export default function Sponsors() {
  return (
    <Stack>
      <PageHeaderCard imagePath={'/sponsors/header.jpg'} pageTitle={'Sponsors'}/>
      <HeadingBodyText heading='Our Sponsors' body='WIESoc is proudly supported by the UNSW Faculty of Engineering and our industry partners.' color='graphite'/>
      <Box 
        display='flex' 
        justifyContent='center' 
        mt={2} 
        mb={10}
        sx={{
          width: {xs: '440px', sm: '475px', md: '500px', lg: '525px'},
          mx: 'auto',
          height: 'auto'
        }}  
      >
        <Box 
          sx={{ 
            position: 'relative',
            width: '100%',
            paddingBottom: '20%',
            }}
          >
          <Image src="/sponsors/unsw_logo.jpg" alt="UNSW Engineering" fill/>
        </Box>
      </Box>
      <Box width='95%' mx='auto' mb={15}>
        <SponsorSection title='Premium Sponsors'/>
        <Stack direction="column" spacing={8} justifyContent="center" alignItems="center">
          <Stack 
            direction={{ xs: 'column', md: 'row', lg: 'row'}} 
            spacing={10}
            justifyContent="center"
            alignItems="center"
            sx= {{ width: { xs: '80%', sm: '65%', md: '85%', lg: '70%'} }}
          >
            <SponsorRows maxWidth='400px' imageComponent='/sponsors/atlassian.svg' imageName='Atlassian'></SponsorRows>
            <SponsorRows maxWidth='400px' imageComponent='/sponsors/janeStreet_logo.jpg' imageName='Jane Street'></SponsorRows>
          </Stack>
          <Stack
            direction={{ xs: 'column', md: 'row', lg: 'row'}} 
            spacing={10}
            justifyContent="center"
            alignItems="center"
            sx= {{ width: { xs: '80%', sm: '65%', md: '85%', lg: '70%'} }}
          >
            <SponsorRows maxWidth='340px' imageComponent='/sponsors/sydneyWaters.jpg' imageName='Sydney Waters'></SponsorRows>
          </Stack>
        </Stack>
      </Box>
      <Box width='95%' mx='auto' mb={15}>
        <SponsorSection title='Advanced Sponsors'/>
        <Stack direction="column" spacing={8} justifyContent="center" alignItems="center">
          <Stack 
            direction={{ xs: 'column', md: 'row', lg: 'row'}} 
            spacing={10}
            justifyContent="center"
            alignItems="center"
            sx= {{ width: { xs: '80%', sm: '65%', md: '85%', lg: '70%'} }}
          >
            <SponsorRows maxWidth='320px' imageComponent='/sponsors/cochlear.jpg' imageName='Cochlear'></SponsorRows>
            <SponsorRows maxWidth='340px' imageComponent='/sponsors/aecom.jpg' imageName='Aecom'></SponsorRows>
            <SponsorRows maxWidth='340px' imageComponent='/sponsors/dolby.jpg' imageName='Dolby'></SponsorRows>

          </Stack>
          <Stack 
            direction={{ xs: 'column', md: 'row', lg: 'row'}} 
            spacing={10}
            justifyContent="center"
            alignItems="center"
            sx= {{ width: { xs: '80%', sm: '65%', md: '85%', lg: '70%'} }}
          >
            <SponsorRows maxWidth='400px' imageComponent='/sponsors/sportsGrid.jpg' imageName='Sports Grid'></SponsorRows>
            <SponsorRows maxWidth='450px' imageComponent='/sponsors/systa.jpg' imageName='Systra'></SponsorRows>
          </Stack>
          <Stack 
            direction={{ xs: 'column', md: 'row', lg: 'row'}} 
            spacing={10}
            justifyContent="center"
            alignItems="center"
            sx= {{ width: { xs: '80%', sm: '65%', md: '85%', lg: '70%'} }}
          >
            <SponsorRows maxWidth='300px' imageComponent='/sponsors/appian.svg' imageName='Appian'></SponsorRows>
            <SponsorRows maxWidth='400px' imageComponent='/sponsors/projectServices.jpg' imageName='Project Services'></SponsorRows>
            <SponsorRows maxWidth='450px' imageComponent='/sponsors/stantec.jpg' imageName='Stantec'></SponsorRows>
          </Stack>
        </Stack>
      </Box>
      <Box width='95%' mx='auto' mb={15}>
        <SponsorSection title='Foundation Sponsors'/>
        <Stack direction="column" spacing={8} justifyContent="center" alignItems="center">
          <Stack 
            direction={{ xs: 'column', md: 'row', lg: 'row'}} 
            spacing={10}
            justifyContent="center"
            alignItems="center"
            sx= {{ width: { xs: '80%', sm: '65%', md: '85%', lg: '70%'} }}
          >
            <SponsorRows maxWidth='450px' imageComponent='/sponsors/honeywell.jpg' imageName='Honeywell'></SponsorRows>
            <SponsorRows maxWidth='400px' imageComponent='/sponsors/flowTraders.jpg' imageName='Flow Traders'></SponsorRows>
          </Stack>
          <Stack
            direction={{ xs: 'column', md: 'row', lg: 'row'}} 
            spacing={10}
            justifyContent="center"
            alignItems="center"
            sx= {{ width: { xs: '80%', sm: '65%', md: '85%', lg: '70%'} }}
          >
            <SponsorRows maxWidth='400px' imageComponent='/sponsors/youngEngineersAustralia.jpg' imageName='Young Engineers Australia'></SponsorRows>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  );
}
