import {AspectRatio, Box, Stack, Typography} from "@mui/joy";
import Image from "next/image";


interface PageHeaderCardProps {
  imagePath: string;
  pageTitle: string;
}
export default function PageHeaderCard({imagePath, pageTitle} : PageHeaderCardProps) {
  return (
      <AspectRatio sx={{width: '100%', height: '300px', position: 'relative',  overflow:'hidden'}} objectFit='cover'>
        <Image src={imagePath} alt='page-header-image' fill objectFit='cover'/>
        <Box
          className='bg-dark-blue'
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '300px',
            opacity: '0.6',
          }}
        />
        <Stack
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '300px',
          }}
          alignItems='center'
          justifyContent='center'
          spacing={8}
        >
          <Typography level='title' className='light-white'>
            {pageTitle}
          </Typography>
        </Stack>
      </AspectRatio>
  )
}