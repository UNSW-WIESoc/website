import {Box, Stack, Typography} from '@mui/joy';
import PageHeaderCard from "@/components/PageHeaderCard";

export default function ProtegeProgram() {

  return (
    <Box>
      <PageHeaderCard imagePath={'/programs/header.jpg'} pageTitle={'Protege Program'}/>
      <Stack direction='column' alignItems='center' spacing={10} pb={10}>
        <Stack>
          <Typography level='h1' pt={3}>Protege Programs</Typography>
          <Typography level='body'>
            Can you see this? Test!
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
}
