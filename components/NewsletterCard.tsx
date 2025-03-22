import React from 'react';
import { Card, Typography, Button } from '@mui/material';

interface NewsletterCardProps {
  newsletter: {
    title: string;
    date: string;
    pdfUrl: string;
  };
}

export default function NewsletterCard({ newsletter }: NewsletterCardProps) {
  if (!newsletter) {
    return null;
  }

  const { title, date, pdfUrl } = newsletter;

  return (
    <Card
      variant='outlined'
      className='shadow-hover border-round'
      sx={{
        minWidth: 300,
        maxWidth: 400,
        p: 2,
        textAlign: 'center',
      }}
    >
      <Typography variant='h5' fontWeight='bold'>{title}</Typography>
      <Typography variant='body2' color='textSecondary'>{date}</Typography>
      <Button
        component='a'
        href={pdfUrl}
        target='_blank'
        rel='noopener noreferrer'
        variant='contained'
        sx={{ mt: 2 }}
      >
        View
      </Button>
    </Card>
  );
}