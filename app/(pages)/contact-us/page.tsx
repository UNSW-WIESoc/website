import { Box, Stack, FormControl, Input, Button } from '@mui/joy';
import PageHeaderCard from '@/components/PageHeaderCard';
import HeadingBodyText from '@/components/HeadingBodyText';

export default function ContactUs() {
  const bodyText = `If you would like to get in touch with us, please complete the details in the form below and our team will get back to you as soon as possible.`
  
  return (
    <Stack>
      <PageHeaderCard imagePath={'/contact-us/header.jpg'} pageTitle={'Contact Us'}/>
      <HeadingBodyText heading='Contact Us' body={bodyText} color='graphite'/>
      <Stack spacing={3.5} pb={4} alignItems='center'>
        <Box display='flex' justifyContent='center' sx={{width:'70%', height:'4em', gap:6}}>
          {/* <FormControl > */}
            <Input className='medium-blue' placeholder='First Name' variant='outlined' sx={{color:'blue', width:'100%'}}/>
            <Input className='medium-blue' placeholder='Last Name' variant='outlined' sx={{color:'blue', width:'100%'}}/>
          {/* </FormControl> */}
        </Box>
        <Box display='flex' justifyContent='center' sx={{width:'70%', height:'4em', gap:6}}>
          {/* <FormControl> */}
            <Input className='medium-blue' placeholder='Email Address' variant='outlined' sx={{color:'medium-blue', width:'100%'}}/>
            <Input className='medium-blue' placeholder='Contact Number' variant='outlined' sx={{width:'100%'}}/>
          {/* </FormControl> */}
        </Box>
        <Box justifyContent='center' sx={{width:'70%'}}>
          <FormControl>
            <Input className='medium-blue' placeholder='Message' variant='outlined' sx={{width:'100%', color:'blue', height:'17em', verticalAlign:'top'}}/>
          </FormControl>
        </Box>
        <Button className='medium-blue' variant="outlined" sx={{width:'13%'}}>Send Message</Button>        
      </Stack>
    </Stack>
  );
}
