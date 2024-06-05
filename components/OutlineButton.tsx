import {Button, Typography} from '@mui/joy';
import Link from 'next/link';

interface OutlineButtonProps {
  text: string;
  link: string;
}

export default function OutlineButton({text, link}: OutlineButtonProps) {
  return (<Link href={link} passHref>
      <Button variant='outlined' className='medium-blue button-border-round'
              sx={{'borderColor': '#93AED3', 'borderWidth': '2px'}}>
        <Typography level='subtitle' className='medium-blue' px={1}>
          {text}
        </Typography>
      </Button>
    </Link>)
}