import { AspectRatio, Box, Stack, Grid, Link } from '@mui/joy';
import PageHeaderCard from '@/components/PageHeaderCard';
import HeadingBodyText from '@/components/HeadingBodyText';
import SponsorSection from '@/components/SponsorSection';
import Image from 'next/image';

interface imageData {
  src: string;
  alt: string;
  link: string;
}

interface sponsorRows {
  images: imageData[];
}

const premiumSponsors = [
  { src: '/sponsors/Premium/SydneyWaters.jpg', alt: 'Sydney Waters', link:"https://www.sydneywater.com.au/" },
  { src: '/sponsors/Premium/Cochlear.png', alt: 'Cochlear', link:"https://www.cochlear.com/au/en/home" },
  { src: '/sponsors/Premium/JaneStreet.png', alt: 'Jane Street', link:"https://www.janestreet.com/" },

];

const advancedSponsors1 = [
  { src: '/sponsors/Advanced/AECOM.png', alt: 'AECOM', link:"https://aecom.com/" },
  { src: '/sponsors/Advanced/Atlassian.svg.png', alt: 'Atlassian', link:"https://www.atlassian.com/" },
  { src: '/sponsors/Advanced/Jacobs.png', alt: 'Jacobs', link:"https://www.jacobs.com/" },
];

const advancedSponsors2 = [
  { src: '/sponsors/Advanced/BC.webp', alt: 'Bouygues Construction', link:"https://www.bouygues-construction.com/en" },
  { src: '/sponsors/Advanced/Dolby.webp', alt: 'Dolby', link:"https://www.dolby.com/" },
  { src: '/sponsors/Advanced/Neara.png', alt: 'Neara', link:"https://neara.com/" },
];

const advancedSponsors3 = [
  { src: '/sponsors/Advanced/Egis.png', alt: 'Egis', link:"https://www.egis-group.com/" },
  { src: '/sponsors/Advanced/HPE.png', alt: 'HPE', link:"https://www.hpeps.com/" },
  { src: '/sponsors/Advanced/McKinsey.png', alt: 'McKinsey and Co', link:"https://www.mckinsey.com/" },

];

const advancedSponsors5 = [
  { src: '/sponsors/Advanced/Stantec.png', alt: 'Stantec', link:"https://www.stantec.com/en" },
  { src: '/sponsors/Advanced/Unilever.svg.png', alt: 'Unilever', link:"https://www.unilever.com.au/" },
  { src: '/sponsors/Advanced/GHD.png', alt: 'GHD', link:"https://www.ghd.com/en-au/" },

];


const foundationSponsors1 = [
  { src: '/sponsors/Foundation/EngineersAustralia.png', alt: 'EngineersAustralia', link: "https://www.engineersaustralia.org.au/"},
  { src: '/sponsors/Foundation/Arcadis.svg', alt: 'Arcadis', link:"https://www.arcadis.com/en" },
  { src: '/sponsors/Foundation/Honeywell.svg.png', alt: 'Honeywell', link:"https://www.honeywell.com/us/en" },
  { src: '/sponsors/Foundation/Lendlease.svg', alt: 'Lendlease', link:"https://www.lendlease.com/au/" },
];

function SponsorRows ({ images }: sponsorRows) {
  return(
    <Grid container spacing={8} justifyContent='center' mx='auto'>
      {images.map((image, index) => (
        <Grid xs={6} sm={4} md={2} lg={2} key={index}>
          <AspectRatio variant='plain' objectFit='contain'>
            <Link href={image.link}> <Image src={image.src} alt={image.alt} fill/></Link>
        </AspectRatio>
      </Grid>
      ))}
    </Grid>
  )
}

export default function Sponsors() {
  return (
    <Stack>
      <PageHeaderCard imagePath={'/sponsors/header.png'} pageTitle={'Sponsors'}/>
      <HeadingBodyText heading='Our Sponsors' body='WIESoc is proudly supported by the UNSW Faculty of Engineering and our industry partners.' color='graphite'/>
      <Grid container justifyContent='center'>
        <Grid xs={7} sm={6} md={4} lg={3} pb={10}>  
          <AspectRatio variant='plain' objectFit='contain' ratio={26/6}>
            <Image src="/sponsors/unsw_logo.jpg" alt="UNSW Engineering" fill/>
          </AspectRatio>
        </Grid>
      </Grid>
      <Box width='95%' mx='auto' mb={15}>
        <SponsorSection title='Premium Sponsors'/>
        <SponsorRows images={premiumSponsors}></SponsorRows>
      </Box>
      <Box width='95%' mx='auto' mb={15}>
        <SponsorSection title='Advanced Sponsors'/>
        <SponsorRows images={advancedSponsors1}></SponsorRows>
        <SponsorRows images={advancedSponsors2}></SponsorRows>
        <SponsorRows images={advancedSponsors3}></SponsorRows>
        <SponsorRows images={advancedSponsors5}></SponsorRows>
      </Box>
      <Box width='95%' mx='auto' mb={15}>
        <SponsorSection title='Foundation Sponsors'/>
        <SponsorRows images={foundationSponsors1}></SponsorRows>
      </Box>
    </Stack>
  );
}
