import {Button, Typography} from '@mui/joy';
import Link from 'next/link';

interface DarkOutlineButtonProps {
  text: string;
  link: string;
}

export default function DarkOutlineButton({text, link}: DarkOutlineButtonProps) {
  return (<Link href={link} passHref>
    <Button className='bg-purple button-border-round'>
    	<Typography 
				level='subtitle'
				className='white'
				px={1}
			>
      	{text}
      </Typography>
    </Button>
	</Link>
	)
}