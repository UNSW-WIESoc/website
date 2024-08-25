import {Box, Stack, Typography} from '@mui/joy';
import Card from '@mui/joy/Card';
import DarkOutlineButton from './DarkOutlineButton';
import Image from 'next/image';

export default function ProtegeProgramCard({ icon, type, description }: any) {
  return (
    <Card
      variant='outlined'
      className='border-round'
      sx={{
        width: {xs: '300px', lg: '350px'},
        height: 'auto',
        border: '2px solid #93AED3',
        backgroundColor: 'white',
        transition: 'all 0.2s ease',
        '&:hover': {
          boxShadow: '0px 4px 8px rgba(38, 38, 38, 0.2)',
          top: '-4px',
          border: '2px solid #93AED3',
        }
      }}
    >
      <Box sx={{
          position: 'absolute',
          top: '-50px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: {xs: '90px', sm: '100px'},
          height: {xs: '90px', sm: '100px'},
          borderRadius: '50%',
          border: '2px solid #93AED3',
          backgroundColor: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
      }}>
        <Image src={icon} alt="" width={70} height={70}/>
      </Box>
      <Stack direction="column" spacing={5} alignItems='center' pt={8} pb={4}>
        <Typography level='subtitle-lg'>
          {type}
        </Typography>
        <Typography level='body' textAlign='center' px={{xs: 2, sm: 3, md: 4, lg: 5}}>
          {description}
        </Typography>
        <DarkOutlineButton text='Apply Now' link='sth'/>
      </Stack>
    </Card>
  );
}