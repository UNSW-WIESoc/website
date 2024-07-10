import React from 'react';
import { Box, Typography } from '@mui/material';

interface ProgramsTitleDescriptionProps {
    title: string;
    description: string;
    marginTop: number;
    marginBottom: number;
    color: string // uses colours from globals.css
  }

export default function ProgramsTitleDescription({title, description, marginTop, marginBottom, color}: ProgramsTitleDescriptionProps) {
  return (
    <Box sx={{ mt: marginTop, mb: marginBottom }}>
      <Typography className={color} variant='h4' sx={{ mb: 1 }}>
        {title}
      </Typography>
      <Typography className={color} variant='body1'>
        {description}
      </Typography>
    </Box>
  )
}