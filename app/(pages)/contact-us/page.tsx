import { Stack } from '@mui/joy';
import PageHeaderCard from "@/components/PageHeaderCard";

export default function ContactUs() {
  return (
    <Stack>
      <PageHeaderCard imagePath={'/contact-us/header.jpg'} pageTitle={'Contact Us'}/>
    </Stack>
  );
}
