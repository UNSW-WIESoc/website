import React from 'react';
import { Box, Typography } from '@mui/joy';

interface ProgramsTitleDescriptionProps {
    title: string;
    description: string;
    marginTop: number;
    marginBottom: number;
    color: string
  }

export default function ProgramsTitleDescription({title, description, marginTop, marginBottom, color}: ProgramsTitleDescriptionProps) {
  return (
    <Box sx={{ mt: marginTop, mb: marginBottom }}>
      <Typography textAlign='left' className={color} level='subtitle-lg' sx={{ mb: 1 }}>
        {title}
      </Typography>
      <Typography className={color} level='body'>
        {description}
      </Typography>
    </Box>
  )
}