import { AspectRatio, Box, Stack, Grid } from '@mui/joy';
import PageHeaderCard from '@/components/PageHeaderCard';
import HeadingBodyText from '@/components/HeadingBodyText';
import SponsorSection from '@/components/SponsorSection';
import Image from 'next/image';

interface imageData {
  src: string;
  alt: string;
}

interface sponsorRows {
  images: imageData[];
}

const premiumSponsors1 = [
  { src: '/sponsors/atlassian.svg', alt: 'Atlassian' },
  { src: '/sponsors/janeStreet_logo.jpg', alt: 'Jane Street' }
];

const premiumSponsors2 = [
  { src: '/sponsors/sydneyWaters.jpg', alt: 'Sydney Waters' }
];

const advancedSponsors1 = [
  { src: '/sponsors/cochlear.jpg', alt: 'Cochlear' },
  { src: '/sponsors/aecom.jpg', alt: 'Aecom' },
  { src: '/sponsors/dolby.jpg', alt: 'Dolby' }
];

const advancedSponsors2 = [
  { src: '/sponsors/sportsGrid.jpg', alt: 'Sports Grid' },
  { src: '/sponsors/systa.jpg', alt: 'Systra' }
];

const advancedSponsors3 = [
  { src: '/sponsors/appian.svg', alt: 'Appian' },
  { src: '/sponsors/projectServices.jpg', alt: 'Project Services' },
  { src: '/sponsors/stantec.jpg', alt: 'Stantec' }
];

const foundationSponsors1 = [
  { src: '/sponsors/honeywell.jpg', alt: 'Honeywell' },
  { src: '/sponsors/flowTraders.jpg', alt: 'Flow Traders' }
];

const foundationSponsors2 = [
  { src: '/sponsors/youngEngineersAustralia.jpg', alt: 'Young Engineers Australia' }
];

function SponsorRows ({ images }: sponsorRows) {
  return(
    <Grid container spacing={8} justifyContent='center' mx='auto'>
      {images.map((image, index) => (
        <Grid xs={6} sm={5} md={4} lg={3} key={index}>
          <AspectRatio variant='plain' objectFit='contain'>
            <Image src={image.src} alt={image.alt} fill/>
        </AspectRatio>
      </Grid>
      ))}
    </Grid>
  )
}

export default function Sponsors() {
  return (
    <Stack>
      <PageHeaderCard imagePath={'/sponsors/header.jpg'} pageTitle={'Sponsors'}/>
      <HeadingBodyText heading='Our Sponsors' body='WIESoc is proudly supported by the UNSW Faculty of Engineering and our industry partners.' color='graphite'/>
      <Grid container justifyContent='center'>
        <Grid xs={7} sm={5} md={4} lg={4}>  
          <AspectRatio variant='plain' objectFit='contain'>
            <Image src="/sponsors/unsw_logo.jpg" alt="UNSW Engineering" fill/>
          </AspectRatio>
        </Grid>
      </Grid>
      <Box width='95%' mx='auto' mb={15}>
        <SponsorSection title='Premium Sponsors'/>
        <SponsorRows images={premiumSponsors1}></SponsorRows>
        <SponsorRows images={premiumSponsors2}></SponsorRows> 
      </Box>
      <Box width='95%' mx='auto' mb={15}>
        <SponsorSection title='Advanced Sponsors'/>
        <SponsorRows images={advancedSponsors1}></SponsorRows>
        <SponsorRows images={advancedSponsors2}></SponsorRows>
        <SponsorRows images={advancedSponsors3}></SponsorRows>
      </Box>
      <Box width='95%' mx='auto' mb={15}>
        <SponsorSection title='Foundation Sponsors'/>
        <SponsorRows images={foundationSponsors1}></SponsorRows>
        <SponsorRows images={foundationSponsors2}></SponsorRows>
      </Box>
    </Stack>
  );
}
