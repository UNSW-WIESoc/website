import { Stack } from '@mui/joy';
import PageHeaderCard from "@/components/PageHeaderCard";
import ProgramsCard from "@/components/ProgramsCard";

export default function Program() {
  const protegeDescription = 'This program helps new students adapt to engineering by pairing them with older student mentors.'
  return (
    <Stack>
      <PageHeaderCard imagePath={'/landing-page/2024_group_photo.JPG'} pageTitle={'Programs'}/>
      PROGRAMS
    </Stack>
  );
}
