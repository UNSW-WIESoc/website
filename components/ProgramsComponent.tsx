"use client";

import React, { useState } from 'react';
import { Box, Typography } from '@mui/joy';

interface ProgramsComponentProps {
  frontTitle: string;
  frontImageSrc: string;
  backContent: string;
}

export default function ProgramsComponent({ frontTitle, frontImageSrc, backContent }: ProgramsComponentProps) {
	const [isFlipped, setIsFlipped] = useState(false);

  const toggleComponent = () => {
		setIsFlipped(!isFlipped);
	};

  return (
    <Box
      onClick={toggleComponent}
      className={'shadow border-round'}
      style={{ 
        width: '375px',
        height: '450px',
        overflow: 'hidden',
      }}
    >
      {isFlipped ? (
        <div style={{ textAlign: 'center' }}>
          {backContent}
        </div>
      ) : (
        <Box>
          <img
            style={{
              paddingBottom: '30px',
            }}
            src={frontImageSrc}
					/>
          <Typography
            className={'graphite'}
            level='body-lg' //is this the right typography? looks different to figma
            style={{
              textAlign: 'center',
            }}
          >
            {frontTitle}
          </Typography>
        </Box>
      )}
    </Box>
  );
}
