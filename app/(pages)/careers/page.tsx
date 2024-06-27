import {Box, Stack, Typography} from '@mui/joy';
import PageHeaderCard from "@/components/PageHeaderCard";

export default function Careers() {

   return (
    <Box>
      <PageHeaderCard imagePath={'/careers/header.jpg'} pageTitle={'Careers'}/>
        <Box mt={2} textAlign="center">
          <Typography level="h1">
            Jobs and Opportunities
          </Typography>

          <Typography level="HeadingBodyText">
            Discover corporate sponsored events and activities to expand your professional networks and skills.
          </Typography>
            
        </Box>
    </Box>
  );

}
