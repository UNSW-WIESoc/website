import EventsCard from '../../../components/EventsCard';

import { Stack } from '@mui/joy';
import PageHeaderCard from "@/components/PageHeaderCard";

export default function Events() {
  return (
    <Stack>
      <PageHeaderCard imagePath={'/events/header.jpg'} pageTitle={'Events'}/>
      <EventsCard/>
    </Stack>
  );
}
