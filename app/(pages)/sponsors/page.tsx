import { Box, Stack, Typography } from '@mui/joy';
import PageHeaderCard from '@/components/PageHeaderCard';
import HeadingBodyText from '@/components/HeadingBodyText';
import SponsorSection from '@/components/SponsorSection';

export default function Sponsors() {
  return (
    <Stack>
      <PageHeaderCard imagePath={'/sponsors/header.jpg'} pageTitle={'Sponsors'}/>
      <HeadingBodyText heading='Our Sponsors' body='WIESoc is proudly supported by the UNSW Faculty of Engineering and our industry partners.' color='graphite'/>
      <Box display="flex" justifyContent="center" mt={2} mb={10}>
        <img src="/sponsors/unsw_logo.jpg" alt="UNSW Engineering" width={500} height="100%"/>
      </Box>
      <Box width='95%' mx='auto' mb={15}>
        <SponsorSection title='Premium Sponsors'/>
        <Stack direction="column" spacing={8} justifyContent="center" alignItems="center">
          <Stack 
            direction="row" 
            spacing={{ xs: 5, sm: 10, md: 15, lg: 20}}
            justifyContent="center"
            alignItems="center"
          >
            <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', maxWidth: '500px' }}>
              <img src="/sponsors/atlassian.svg" alt="ATLASSIAN" style={{ width: '100%', height: 'auto' }}/>
            </Box>
            <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', maxWidth: '500px' }}>
              <img src="/sponsors/janeStreet_logo.jpg" alt="Jane Street" style={{ width: '100%', height: 'auto' }}/>
            </Box>
          </Stack>
          <Stack
            direction="row" 
            spacing={{ xs: 5, sm: 10, md: 15, lg: 20}}
            justifyContent="center"
            alignItems="center"
          >
            <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', maxWidth: '340px' }}>
              <img src="/sponsors/sydneyWaters.jpg" alt="Sydney Waters" style={{ width: '100%', height: 'auto' }}/>
            </Box>
          </Stack>
        </Stack>
      </Box>
      <Box width='95%' mx='auto' mb={15}>
        <SponsorSection title='Advanced Sponsors'/>
        <Stack direction="column" spacing={8} justifyContent="center" alignItems="center">
          <Stack 
            direction="row" 
            spacing={{ xs: 2, sm: 5, md: 10, lg: 15}}
            justifyContent="center"
            alignItems="center"
          >
            <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', maxWidth: '320px' }}>
              <img src="/sponsors/cochlear.jpg" alt="Cochlear" style={{ width: '100%', height: 'auto' }}/>
            </Box>
            <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', maxWidth: '340px' }}>
              <img src="/sponsors/aecom.jpg" alt="AECOM" style={{ width: '100%', height: 'auto' }}/>
            </Box>
            <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', maxWidth: '340px' }}>
              <img src="/sponsors/dolby.jpg" alt="Dolby" style={{ width: '100%', height: 'auto' }}/>
            </Box>
          </Stack>
          <Stack 
            direction="row" 
            spacing={{ xs: 5, sm: 10, md: 15, lg: 20}}
            justifyContent="center"
            alignItems="center"
          >
            <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', maxWidth: '400px' }}>
              <img src="/sponsors/sportsGrid.jpg" alt="Sports Grid" style={{ width: '100%', height: 'auto' }}/>
            </Box>
            <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', maxWidth: '450px' }}>
              <img src="/sponsors/systa.jpg" alt="SYSTRA" style={{ width: '100%', height: 'auto' }}/>
            </Box>
          </Stack>
          <Stack 
            direction="row" 
            spacing={{ xs: 2, sm: 5, md: 10, lg: 15}}
            justifyContent="center"
            alignItems="center"
          >
            <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', maxWidth: '300px' }}>
              <img src="/sponsors/appian.svg" alt="Appian" style={{ width: '100%', height: 'auto' }}/>
            </Box>
            <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', maxWidth: '400px' }}>
              <img src="/sponsors/projectServices.jpg" alt="Project Services" style={{ width: '100%', height: 'auto' }}/>
            </Box>
            <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', maxWidth: '450px' }}>
              <img src="/sponsors/stantec.jpg" alt="Stantec" style={{ width: '100%', height: 'auto' }}/>
            </Box>
          </Stack>
        </Stack>
      </Box>
      <Box width='95%' mx='auto' mb={15}>
        <SponsorSection title='Foundation Sponsors'/>
        <Stack direction="column" spacing={8} justifyContent="center" alignItems="center">
          <Stack 
            direction="row" 
            spacing={{ xs: 5, sm: 10, md: 15, lg: 20}}
            justifyContent="center"
            alignItems="center"
          >
            <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', maxWidth: '450px' }}>
              <img src="/sponsors/honeywell.jpg" alt="Honeywell" style={{ width: '100%', height: 'auto' }}/>
            </Box>
            <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', maxWidth: '400px' }}>
              <img src="/sponsors/flowTraders.jpg" alt="Flow Traders" style={{ width: '100%', height: 'auto' }}/>
            </Box>
          </Stack>
          <Stack
            direction="row" 
            spacing={{ xs: 5, sm: 10, md: 15, lg: 20}}
            justifyContent="center"
            alignItems="center"
          >
            <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', maxWidth: '400px' }}>
              <img src="/sponsors/youngEngineersAustralia.jpg" alt="Young Engineers Australia" style={{ width: '100%', height: 'auto' }}/>
            </Box>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  );
}
