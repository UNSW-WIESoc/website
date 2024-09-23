"use client"; 

import { Box, Stack, Input, Button, Textarea, Typography } from '@mui/joy';
import PageHeaderCard from '@/components/PageHeaderCard';
import HeadingBodyText from '@/components/HeadingBodyText';
import React, { useEffect } from 'react';
import OutlineButtonLinkless from '@/components/OutlineButtonLinkless';
import emailjs from '@emailjs/browser';

export default function ContactUs() {
  useEffect(() => emailjs.init(`${process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY}`), []);

  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [buttonText, setButtonText] = React.useState('Send Message');
  const bodyText = `If you would like to get in touch with us, please complete the details in the form below and our team will get back to you as soon as possible.`

  const clearFields = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setPhone('');
    setMessage('');
  }

  const sendEmail = () => {
    emailjs
      .send(`${process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID}`, `${process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID}`,
      {
        'first_name': firstName,
        'last_name': lastName,
        'email': email,
        'phone': phone,
        'message': message
      })
      .then(
        () => {
          console.log('SUCCESS!');
          clearFields();
          setButtonText('Message Sent');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <Stack>
      <PageHeaderCard imagePath={'/contact-us/header.jpg'} pageTitle={'Contact Us'}/>
      <HeadingBodyText heading='Contact Us' body={bodyText} color='graphite'/>
      <Stack spacing={5} pb={4} alignItems='center'>
        <Box display='flex' justifyContent='center' sx={{width:'70%', height:'4em', gap:2, flexDirection: { xs: 'column', sm: 'row' }}}>
            <Input className='dark-blue' placeholder='First Name' variant='outlined' onChange={e => setFirstName(e.target.value)} value={firstName}
            sx={{
              width:'100%',
              paddingLeft: '4%',
              fontSize:'0.9em'
            }}/>
            <Input className='dark-blue' placeholder='Last Name' variant='outlined' onChange={e => setLastName(e.target.value)} value={lastName}
            sx={{
              width:'100%',
              paddingLeft: '4%',
              fontSize:'0.9em'
            }}/>
        </Box>
        <Box display='flex' justifyContent='center' sx={{width:'70%', height:'4em', gap:2, flexDirection: { xs: 'column', sm: 'row' }}}>
            <Input className='dark-blue' placeholder='Email Address' variant='outlined' onChange={e => setEmail(e.target.value)} value={email}
            sx={{
              width:'100%',
              paddingLeft: '4%',
              fontSize:'0.9em'
            }}/>
            <Input className='dark-blue' placeholder='Contact Number' variant='outlined' onChange={e => setPhone(e.target.value)} value={phone}
            sx={{ 
              width:'100%',
              paddingLeft: '4%',
              fontSize:'0.9em'
            }}/>
        </Box>
        <Textarea
          className='dark-blue'
          placeholder="Message"
          minRows={15}
          onChange={e => setMessage(e.target.value)}
          value={message}
          style={{
            width: '70%',
            resize: 'vertical',
            paddingTop: '2.5%', 
            paddingLeft: '3%',
            fontSize:'0.9em'
          }}
        />
        <Box pb='15px'>
          <Button variant='outlined' className='medium-blue button-border-round' onClick={() => sendEmail()}
        sx={{ 'borderColor': '#93AED3', 'borderWidth': '2px', 'backgroundColor': 'white'}}>
            <Typography level='subtitle' className='medium-blue' px={1}>
              {buttonText}
            </Typography>
          </Button> 
        </Box>  
      </Stack>
    </Stack>
  );
}
