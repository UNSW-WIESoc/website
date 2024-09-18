import { AspectRatio, Box, Stack, Typography } from '@mui/joy';
import Image from 'next/image';

interface PageHeaderCardProps {
  imagePath: string;
  pageTitle: string;
}

export default function PageHeaderCard({ imagePath, pageTitle }: PageHeaderCardProps) {
  return (
    <AspectRatio
      ratio="650/150"
      objectFit="cover"
      sx={{
        width: '100%',
        height: 'auto',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Image src={imagePath} alt="page-header-image" fill />
      <Box
        className="bg-dark-blue"
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          opacity: '0.6',
        }}
      />
      <Stack
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
        alignItems="center"
        justifyContent="center"
        spacing={2}
      >
        <Typography
          level="title"
          className="light-white"
          sx={{
            fontSize: {
              xs: '1.5rem',
              sm: '2rem',
              md: '2.5rem',
              lg: '3rem',
              xl: '3.5rem',
            },
          }}
        >
          {pageTitle}
        </Typography>
      </Stack>
    </AspectRatio>
  );
}
