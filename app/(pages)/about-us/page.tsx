'use client';

import {AspectRatio, Card, CardContent, CardOverflow, Grid, Sheet, Stack, Typography, Container, Button, ButtonGroup, Box} from '@mui/joy';
import Image from 'next/image';
import { useState } from 'react';
import PageHeaderCard from '@/components/PageHeaderCard';
import HeadingBodyText from '@/components/HeadingBodyText';
import OutlineButton from '@/components/OutlineButton';
import { LinkedInIcon, FacebookIcon, EmailIcon } from '@/components/SocialMediaIcons';
import Link from 'next/link';

interface cardProps {
  image: string;
  cardName: string;
  cardText: string;
  link: string;
}

const team2025Roles = ['President', 'Treasurer', 'Admin Officer', 'VP of Events', 'VP of Industry Relations', 'VP of IT', 'VP of HR', 'VP of Programs', 'VP of Marketing'];
const team2025Names = ['Trisha Chari', 'Saniya Gadekar', 'Amar Kayyal', 'Adele Kim', 'Sabrina Zantua', 'Priya Leedman', 'Sheekha Chalise', 'Akanksha Sood', 'Adi Shah'];

const team2026Roles = ['President', 'Treasurer', 'Admin Officer', 'VP of Events', 'VP of Industry Relations', 'VP of IT', 'VP of HR', 'VP of Programs', 'VP of Marketing'];
const team2026Names = ['Saii Yashaa', 'Jade Yang', 'Daisy Xu', 'Haiqa Qazi', 'Shahd Rawas', 'Yumna Zaheed', 'Khyati Walia', 'Janet Chow', 'Afsheen Hossain'];

// Social media links for 2026 team - to be filled in
const team2026Socials = [
  { linkedin: 'https://www.linkedin.com/in/saii-yashaa-gopinath-rao-122b97201/', facebook: 'https://www.facebook.com/saii.yashaa', email: 'president@wiesoc.com' },
  { linkedin: 'https://www.linkedin.com/in/jade-y-75725a2b8/', facebook: 'https://www.facebook.com/jade.yang.3344', email: 'treasurer@wiesoc.com' }, 
  { linkedin: 'https://www.linkedin.com/in/daisy-xu67/', facebook: 'https://www.facebook.com/daisy.xu.467469', email: 'admin@wiesoc.com' }, 
  { linkedin: 'https://www.linkedin.com/in/haiqa-qazi-469b102b7/', facebook: 'https://www.facebook.com/haiqa21', email: 'vicepresidentevents@wiesoc.com' },
  { linkedin: 'https://www.linkedin.com/in/shahd-rawas-b816472b3/', facebook: 'https://www.facebook.com/shahd.rawas', email: 'vicepresidentindustryrelations@wiesoc.com' },
  { linkedin: 'https://www.linkedin.com/in/yumna-zaheed/', facebook: 'https://www.facebook.com/yumna.zaheed', email: 'vicepresidentit@wiesoc.com' },
  { linkedin: 'https://www.linkedin.com/in/khyati-w-96b1b3312/', facebook: 'https://www.facebook.com/khyati.walia.2025', email: 'vicepresidenthr@wiesoc.com' },
  { linkedin: 'https://www.linkedin.com/in/janet-chow15/', facebook: 'https://www.facebook.com/janet.chow.995530', email: 'vicepresidentprograms@wiesoc.com' },
  { linkedin: 'https://www.linkedin.com/in/afsheen-h-5b199722b/', facebook: 'https://www.facebook.com/afsheen.hossain.39', email: 'vicepresidentmarketing@wiesoc.com' },
];

function AboutUsCard({image, cardName, cardText, link}: cardProps) {
  return (<Card className='shadow-hover' variant='plain'
                sx={{width: '100%', height: {sm: '540px', md: '540px', lg: '600px', xl: 'auto'}}}>
      <CardOverflow>
        <AspectRatio ratio='2'>
          <Image
            src={image}
            alt='people'
            fill
          />
        </AspectRatio>
      </CardOverflow>

      <CardContent>
        <Stack direction='column' alignItems='center' sx={{height: '100%'}} px={1}>
          <Typography level='h2' my={3} textAlign='center'>
            {cardName}
          </Typography>
          <Typography level='body' textAlign='center'>
            {cardText}
          </Typography>
          <Stack py={3} direction='column' justifyContent='flex-end' sx={{height: '100%'}}>
            <OutlineButton text='Learn More' link={link}/>
          </Stack>
        </Stack>
      </CardContent>
    </Card>);
}

function OurTeamProfiles() {
  const [teamYear, setTeamYear] = useState<string>('2026');

  const currentRoles = teamYear === '2026' ? team2026Roles : team2025Roles;
  const currentNames = teamYear === '2026' ? team2026Names : team2025Names;
  const currentSocials = teamYear === '2026' ? team2026Socials : [];

  return(
    <Container sx={{width: '80%', paddingBottom: '5%'}}>
      <Stack direction='row' justifyContent='center' sx={{mb: 4}}>
        <ButtonGroup variant='outlined' size='sm'>
          <Button 
            onClick={() => setTeamYear('2025')} 
            variant={teamYear === '2025' ? 'solid' : 'outlined'}
          >
            2025 Team
          </Button>.
          <Button 
            onClick={() => setTeamYear('2026')} 
            variant={teamYear === '2026' ? 'solid' : 'outlined'}
          >
            2026 Team
          </Button>
        </ButtonGroup>
      </Stack>
      <Grid
      container
      spacing={{ xs: 2, md: 2 }}  
      columns={{ xs: 1, sm: 2, md: 3 }}
      sx={{ flexGrow: 1, dipslay: 'flex', alignItems:'center', justifyContent:'center'}}
    >
      {Array.from(Array(9)).map((_, index) => (
        <Grid xs={1} sm={1} md={1} key={index}>
          <Container sx={{width: '90%'}}>
            <AspectRatio variant='outlined' ratio='1' objectFit='cover' sx={{borderRadius: '50%'}}>
              <Image
                src={`/about-us/${teamYear} Team/${currentNames[index]}.${teamYear === '2025' ? 'png' : 'JPG'}`}
                alt='member-profile-picture'
                fill
              />
            </AspectRatio>
          </Container> 
          <Container
            sx={{
              pt: '5%',
              pb: '20%',
              width:'100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}>
            <Typography level='subtitle' textAlign='center' pt={3}>
              {currentRoles[index]}
            </Typography>
            <Typography level='subtitle-light' textAlign='center'>
              {currentNames[index]}
            </Typography>
            {teamYear === '2026' && currentSocials[index] && (
              <Stack direction='row' spacing={1} sx={{mt: 1}}>
                {currentSocials[index].linkedin && (
                  <Link href={currentSocials[index].linkedin} target='_blank' rel='noopener noreferrer'>
                    <Box sx={{ borderRadius: '50%', overflow: 'hidden', width: 24, height: 24, display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: '#1a365d' }}>
                      <LinkedInIcon color='#fff' width={14} height={14} />
                    </Box>
                  </Link>
                )}
                {currentSocials[index].facebook && (
                  <Link href={currentSocials[index].facebook} target='_blank' rel='noopener noreferrer'>
                    <Box sx={{ borderRadius: '50%', overflow: 'hidden', width: 24, height: 24, display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: '#1a365d' }}>
                      <FacebookIcon color='#fff' width={14} height={14} />
                    </Box>
                  </Link>
                )}
                {currentSocials[index].email && (
                  <Link href={`mailto:${currentSocials[index].email}`}>
                    <Box sx={{ borderRadius: '50%', overflow: 'hidden', width: 24, height: 24, display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: '#1a365d' }}>
                      <EmailIcon color='#fff' width={14} height={14} />
                    </Box>
                  </Link>
                )}
              </Stack>
            )}
          </Container>
        </Grid>
      ))}
    </Grid>
    </Container>
  );
}

export default function AboutUs() {

  const aboutWIEsocText = 'We are a UNSW student-run society that facilitates members from all \
                          disciplines of engineering. Our aim is to empower women and gender-diverse students throughout their time at university. Our initiatives are specifically designed to connect, engage and empower women as they continue to navigate their way through engineering.  This includes many social and industry events \
                          throughout the year as well as two programs dedicated to mentoring \
                          and interpersonal development. Our society provides a supportive network \
                          for all our members, whether past, present or future students, to advocate \
                          gender acceptance and equality in all facets of the engineering industry.'

  return (<Sheet>
      <Stack justifyContent='center'>
        <PageHeaderCard imagePath={'/about-us/header.jpg'} pageTitle={'About Us'}/>
      </Stack>
      <HeadingBodyText heading='About WIESoc' body={aboutWIEsocText} color='graphite'/>
      <Sheet>
        <Stack className='bg-medium-blue' sx={{height: '100%', width: '100%'}} alignItems='center' pb={10}>
          <Typography level='h1' className='white' textAlign='center' py={2}>
            What We Do
          </Typography>
          <Grid container
                spacing={{xs: 10, sm: 5, md: 10}}
                justifyContent='flex-end'
                sx={{width: {xs: '100%', md: '90%'}}}
                alignItems='center'
          >
            <Grid
              xs={24} sm={6} md={6}
              display='flex'
              justifyContent='center'
              pb={5}
            >
              <AboutUsCard image='/eventsCard.png'
                           cardName='Events'
                           cardText='WIESoc hosts a variety of events throughout the year
                            with a great mix of industry and social activities. Come and 
                            join us for our upcoming events.'
                           link='/events'
              />
            </Grid>
            <Grid
              xs={24} sm={6} md={6}
              display='flex'
              justifyContent='center'
              alignItems='center'
              pb={5}
            >
              <AboutUsCard image='/programsCard.png'
                           cardName='Programs'
                           cardText='Our Industry Mentoring Program and Protege Program
                           caters to your personal and professional development with support from experienced mentors.'
                           link='/programs'
              />
            </Grid>
          </Grid>
        </Stack>
      </Sheet>
      <Sheet>
        <HeadingBodyText heading='Our Team' body='Meet the team behind the magic!' color='graphite'/>
        <OurTeamProfiles/>
      </Sheet>
    </Sheet>
  );
}
