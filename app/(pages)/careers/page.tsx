import {Grid, Stack, Box} from '@mui/joy';
import PageHeaderCard from "@/components/PageHeaderCard";
import HeadingBodyText from '@/components/HeadingBodyText';

export default function Careers() {
   return (
    <Stack alignItems='center'>
    <PageHeaderCard imagePath={'/careers/header.jpg'} pageTitle={'Careers'}/>
    <HeadingBodyText heading='Jobs and Opportunities' body='Discover corporate 
      sponsored events and activities to expand your professional networks and skills.' color='graphite'/>
    </Stack>
  );
}


