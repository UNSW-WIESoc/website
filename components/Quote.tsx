import { Stack, Typography } from '@mui/joy';

interface QuoteProps {
  quote: string;
  author: string;
  color: string
}

export default function Quote({quote, author, color}: QuoteProps) {
  return (
    <Stack direction='column' alignItems='center' spacing={2} px={3}>
      <Typography className={color} level='body'>
        "{quote}"
      </Typography>
      <Typography className={color} level='subtitle' textAlign='center'>
        "{author}"
      </Typography>
    </Stack>
  )
}