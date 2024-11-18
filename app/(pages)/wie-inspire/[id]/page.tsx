// import { Stack } from '@mui/joy';
// import { useRouter } from 'next/navigation';

"use client"; 

import { Box, Stack, Input, Button, Textarea } from '@mui/joy';
import PageHeaderCard from '@/components/PageHeaderCard';
import HeadingBodyText from '@/components/HeadingBodyText';
import React from 'react';
import OutlineButtonLinkless from '@/components/OutlineButtonLinkless';

export default function WIEInspireArticle({ params }: { params: { id: string } }) {
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [message, setMessage] = React.useState('');

  const bodyText = `If you would like to get in touch with us, please complete the details in the form below and our team will get back to you as soon as possible.`
  
  const { id } = params; 
  const decodedId = decodeURIComponent(id);

  const pdfUrl = `https://${decodedId}`;

  return (
    <div style={{ marginTop: '100px', padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <iframe
        src={pdfUrl}
        width="80%"
        height="800px"
        style={{
          border: 'none',
          margin: '20px',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
        }}
        title="PDF Viewer"
      />
    </div>
  );
}