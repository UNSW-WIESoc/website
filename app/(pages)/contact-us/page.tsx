import { Box, Stack, FormControl, Input, Button, Textarea } from '@mui/joy';
import PageHeaderCard from '@/components/PageHeaderCard';
import HeadingBodyText from '@/components/HeadingBodyText';

export default function ContactUs() {
  const bodyText = `If you would like to get in touch with us, please complete the details in the form below and our team will get back to you as soon as possible.`
  
  return (
    <Stack>
      <PageHeaderCard imagePath={'/contact-us/header.jpg'} pageTitle={'Contact Us'}/>
      <HeadingBodyText heading='Contact Us' body={bodyText} color='graphite'/>
      <Stack spacing={5} pb={4} alignItems='center'>
        <Box display='flex' justifyContent='center' sx={{width:'70%', height:'4em', gap:2, flexDirection: { xs: 'column', sm: 'row' }}}>
            <Input className='medium-blue' placeholder='First Name' variant='outlined' sx={{color:'blue', width:'100%', paddingLeft: '4%', fontSize:'0.9em'}}/>
            <Input className='medium-blue' placeholder='Last Name' variant='outlined' sx={{color:'blue', width:'100%', paddingLeft: '4%', fontSize:'0.9em'}}/>
        </Box>
        <Box display='flex' justifyContent='center' sx={{width:'70%', height:'4em', gap:2, flexDirection: { xs: 'column', sm: 'row' }}}>
            <Input className='medium-blue' placeholder='Email Address' variant='outlined' sx={{color:'medium-blue', width:'100%', paddingLeft: '4%', fontSize:'0.9em'}}/>
            <Input className='medium-blue' placeholder='Contact Number' variant='outlined' sx={{width:'100%', paddingLeft: '4%', fontSize:'0.9em'}}/>
        </Box>
        <Textarea
          className='medium-blue'
          placeholder="Message"
          minRows={15}
          style={{
            width: '70%',
            resize: 'vertical',
            paddingTop: '2.5%', 
            paddingLeft: '3%',
            fontSize:'0.9em'
          }}
        />
        <Button className='medium-blue' variant="outlined" sx={{width:'19%', fontSize: '1em', fontWeight:'bold', padding:'1% 0', borderRadius:'20px', borderWidth:'2px'}}>Send Message</Button>        
      </Stack>
    </Stack>
  );
}
