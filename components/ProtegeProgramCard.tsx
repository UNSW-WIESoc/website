import {Box, Stack, Typography} from '@mui/joy';
import Card from '@mui/joy/Card';
// import DarkOutlineButton from './DarkOutlineButton';
import Image from 'next/image';

export default function ProtegeProgramCard({ icon, type, description }: any) {
  return (
    <Card
      variant='outlined'
      className='border-round shadow-hover'
      sx={{
        width: {xs: '300px', lg: '350px'},
        height: 'auto',
        border: '3px solid #93AED3',
        backgroundColor: 'white',
      }}
    >
      <Box sx={{
          position: 'absolute',
          top: '-55px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: {xs: '90px', sm: '100px'},
          height: {xs: '90px', sm: '100px'},
          borderRadius: '50%',
          backgroundColor: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
      }}>
        <Image src={icon} alt="" width={90} height={90}/>
      </Box>
      <Stack direction="column" spacing={5} alignItems='center' pt={7} pb={4}>
        <Typography level='subtitle-lg'>
          {type}
        </Typography>
        <Typography level='body' textAlign='center' px={{xs: 2, sm: 3, md: 4, lg: 5}}>
          {description}
        </Typography>
        {/* <DarkOutlineButton text='Apply Now' link='sth'/> */}
        <Box sx={{
          borderRadius: '999px',
          backgroundColor: '#9999d9',
          px: 3,
          py: 1,
        }}>
          <Typography level='body-sm' textAlign='center' sx={{ color: 'white', fontWeight: 'bold' }}>
            Come Back Later!
          </Typography>
        </Box>
      </Stack>
    </Card>
  );
}