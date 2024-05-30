import {AspectRatio, Card, CardContent, CardOverflow, Stack, Typography} from '@mui/joy';
import Image from 'next/image';

interface ProgramsCardProps {
  imagePath: string;
  cardTitle: string;
  description: string;
}
export default function ProgramsCard({imagePath, cardTitle, description} : ProgramsCardProps) {
  return (
    <Card variant='outlined' sx={{ width: '60%' }}>
      <CardOverflow>
        <AspectRatio ratio='3'>
          <Image
            src={imagePath}
            alt=''
            fill
          />
        </AspectRatio>
      </CardOverflow>
      <CardContent>
        <Stack direction='column' alignItems='center'>
          <Typography fontSize='30px' pb={3} pt={2} fontWeight={450}>
            {cardTitle}
          </Typography>
          <Typography fontSize="16px">
            {description}
          </Typography>
          <Stack direction='row' alignItems='center' spacing={1}>
          </Stack>
        </Stack>
      </CardContent>
      <CardOverflow variant='soft' sx={{ bgcolor: 'background.level1' }}>
      </CardOverflow>
    </Card>
  );
}