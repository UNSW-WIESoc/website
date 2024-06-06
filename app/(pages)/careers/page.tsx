import {Box, Stack, Typography} from '@mui/joy';
import PageHeaderCard from "@/components/PageHeaderCard";

export default function Careers() {

   return (
<Box>
      <Stack>
        <PageHeaderCard imagePath={'/careers/header.jpg'} pageTitle={'Careers'}/>
      </Stack>

      <Box mt={2} textAlign="center">
        <Typography level="h1" className="graphite">
          Jobs and Opportunities
        </Typography>

        <Typography level="body" className="graphite">
          Discover corporate sponsored events and activities to expand your professional networks and skills.
        </Typography>
        
      </Box>
    </Box>
  );

}
