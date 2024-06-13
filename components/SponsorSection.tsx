import { Box, Typography } from '@mui/joy';

interface SectionTitle {
  title: string;
}

export default function SponsorSection({ title }: SectionTitle) {
  return (
    <Box mt={7}>
      <Typography level='h2-blue' >
        {title}
      </Typography>
      <Box
        component="hr"
        sx={{
          border: 0,
          borderTop: '2px solid #93AED3',
          mt: 2,
          mb: 5,
          width: '100%'
        }}
      />
    </Box>
  )
}