import {Button, Typography} from '@mui/joy';
import Link from 'next/link';

interface DarkOutlineButtonProps {
  text: string;
  link: string;
}

export default function DarkOutlineButton({text, link}: DarkOutlineButtonProps) {
  return (<Link href={link} passHref>
    <Button variant='outlined' className='medium-blue button-border-round'
      sx={{
        'borderColor': '#93AED3',
        'borderWidth': '2px',
        'backgroundColor': 'white',
        '&:hover': {
          backgroundColor: '#93AED3',
          borderColor: '#6182B0',
					'& .hover-text': {
						color: 'white',
					}
        }
      }}
    >
    	<Typography 
				level='subtitle'
				className='hover-text'
				px={1}
				sx={{ color: '#93AED3' }}
			>
      	{text}
      </Typography>
    </Button>
	</Link>
	)
}