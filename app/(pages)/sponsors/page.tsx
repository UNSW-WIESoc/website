import { Stack, Typography } from '@mui/joy';
import PageHeaderCard from '@/components/PageHeaderCard';
import HeadingBodyText from '@/components/HeadingBodyText';

export default function Sponsors() {
  return (
    <Stack>
      <PageHeaderCard imagePath={'/sponsors/header.jpg'} pageTitle={'Sponsors'}/>
      <HeadingBodyText heading='Annual Programs' body='testing' color='graphite'/>
      <Typography level='h2-blue'>
        Premium Sponsors
      </Typography>
    </Stack>
  );
}
