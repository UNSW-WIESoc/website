import Box from '@mui/material/Box';
import Typography from '@mui/joy/Typography';

export default function Interested() {
  return (
    <Box
      sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingY: 2, paddingX: 2, mb: 5 }}
    >
      <Typography level='h1' sx={{ fontWeight: '700', fontStyle: 'italic' }}>
        Are you interested? Keep a lookout for applications!
      </Typography>
    </Box>
  );
}
