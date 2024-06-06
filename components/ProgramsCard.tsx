import {AspectRatio, Card, CardContent, CardOverflow, Grid, Stack, Typography} from '@mui/joy';
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
                                       imagePath, cardTitle, description, icon1, icon2, icon3, icon4, link
                                     }: ProgramsCardProps) {
  return (
    <Card variant='outlined' className='shadow-hover' sx={{ 'width': {xs: '90%', md: '65%'} }}>
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
          <Typography level='h2' textAlign='center'>
            {cardTitle}
          </Typography>
          <Typography level='body' textAlign='center'>
            {description}
          </Typography>
          <Grid container spacing={2} py={3} display='flex'
                justifyContent='center'
                alignItems='center' sx={{flexGrow: 1}}>
            <Grid xs={6} md={3} display='flex'
                  justifyContent='center'
                  alignItems='center'>
              <LabelledIcon icon={icon1.icon} text={icon1.text}/>
            </Grid>
            <Grid xs={6} md={3} display='flex'
                  justifyContent='center'
                  alignItems='center'>
              <LabelledIcon icon={icon2.icon} text={icon2.text}/>
            </Grid>
            <Grid xs={6} md={3} display='flex'
                  justifyContent='center'
                  alignItems='center'>
              <LabelledIcon icon={icon3.icon} text={icon3.text}/>
            </Grid>
            <Grid xs={6} md={3} display='flex'
                  justifyContent='center'
                  alignItems='center'>
              <LabelledIcon icon={icon4.icon} text={icon4.text}/>
            </Grid>
          </Grid>
          <OutlineButton text='Learn More' link={link}/>
        </Stack>
      </CardContent>
    </Card>
  );
}