import { Stack } from '@mui/joy';
import PageHeaderCard from '@/components/PageHeaderCard';

export default function AboutUs() {
  return (
    <Stack>
      <PageHeaderCard imagePath={'/about-us/header.jpg'} pageTitle={'About Us'}/>
    </Stack>
  );
}
