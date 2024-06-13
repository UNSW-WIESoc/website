import {Stack, Typography} from '@mui/joy';


interface HeadingBodyTextProps {
  heading: string;
  body: string;
  color: string // uses colours from globals.css
}
export default function HeadingBodyText({heading, body, color}: HeadingBodyTextProps) {
  return (
    <Stack direction='column' alignItems='center' spacing={3} pt={4} pb={10} px={{ sm: 0, md: 5, lg: 10 }}>
      <Typography className={color} level='h1' pt={3}>
        {heading}
      </Typography>
      <Typography className={color} level='body' textAlign='center' px={3} sx={{textWrap: 'wrap'}}>
        {body}
      </Typography>
    </Stack>
  )
}