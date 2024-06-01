import {Box, Stack, Typography} from '@mui/joy';
import Image from 'next/image';

export interface IconTextProps {
  icon: string;
  text: string;
}

export default function LabelledIcon({icon, text}: IconTextProps) {
  return (<Stack>
      <Box width={110} textAlign='center' px='10px'>
        <Image src={icon} alt='icon' height={60} width={60}/>
        <Typography level='body' className='dark-blue' lineHeight={1}>{text}</Typography>
      </Box>
    </Stack>)
}