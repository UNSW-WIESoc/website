import {AspectRatio, Card, CardContent, CardOverflow, Stack, Typography} from '@mui/joy';
import Image from 'next/image';
import LabelledIcon, {IconTextProps} from '@/components/LabelledIcon';
import OutlineButton from '@/components/OutlineButton';


interface ProgramsCardProps {
  imagePath: string;
  cardTitle: string;
  description: string;
  icon1: IconTextProps;
  icon2: IconTextProps;
  icon3: IconTextProps;
  icon4: IconTextProps;
  link: string
}

export default function ProgramsCard({
                                       imagePath,
                                       cardTitle,
                                       description,
                                       icon1,
                                       icon2,
                                       icon3,
                                       icon4,
                                       link
                                     }: ProgramsCardProps) {
  return (
    <Card variant='outlined' className='shadow' sx={{'width': '65%'}}>
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
        <Stack direction='column' alignItems='center' pb={2}>
          <Typography level='h2'>
            {cardTitle}
          </Typography>
          <Typography level='body'>
            {description}
          </Typography>
          <Stack direction='row' alignItems='center' spacing={4} py={4}>
            <LabelledIcon icon={icon1.icon} text={icon1.text}/>
            <LabelledIcon icon={icon2.icon} text={icon2.text}/>
            <LabelledIcon icon={icon3.icon} text={icon3.text}/>
            <LabelledIcon icon={icon4.icon} text={icon4.text}/>
          </Stack>
          <OutlineButton text='Learn More' link={link}/>
        </Stack>
      </CardContent>
    </Card>
  );
}