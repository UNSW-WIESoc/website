import {Stack, Typography} from "@mui/joy";


interface HeadingBodyTextProps {
  heading: string;
  body: string;
}
export default function HeadingBodyText({heading, body}: HeadingBodyTextProps) {
  return (
    <Stack direction='column' alignItems='center' spacing={5} py={5}>
      <Typography level='h1' pt={3}>
        {heading}
      </Typography>
      <Typography level='body' px={3} sx={{'text-wrap': 'wrap'}}>
        {body}
      </Typography>
    </Stack>
  )
}