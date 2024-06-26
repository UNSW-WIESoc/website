"use client";

import React, { useState } from 'react';
import { Box, Typography } from '@mui/joy';
import OutlineButton from './OutlineButton';
import LabelledIcon from './LabelledIcon';

interface ProgramsComponentProps {
  frontTitle: string;
  frontImageSrc: string;
  backContent: React.ReactElement[];
  link: string;
  description: string;
}


export default function ProgramsComponent({ frontTitle, frontImageSrc, backContent, link, description }: ProgramsComponentProps) {
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
        height: '425px',
        overflow: 'hidden',
      }}
    >
      {isFlipped ? (
        <Box
          style={{ 
            padding: '40px',
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
          }}
        >
          <Box
            style={{ 
              display: 'flex', 
              justifyContent: 'center',
            }}
          >
            <Typography className={'graphite'} level='body' style={{ textAlign: 'left', lineHeight: '1.2', }}>{description}</Typography>
          </Box>
          <Box 
            style={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              justifyContent: 'center', 
              transform: 'scale(0.9)',
              marginTop: 'auto',
            }}
          >
            {backContent.map((item, index) => (
              <Box key={index} style={{ maxWidth: '50%', padding: '15px', }}>
                {item}
              </Box>
            ))}
          </Box>        
          <Box
            style={{ 
              marginTop: 'auto',
              display: 'flex', 
              justifyContent: 'center',
              
            }}
          >
            <OutlineButton text="Learn More" link={link} />
          </Box>
        </Box>
      ) : (
        <Box>
      <img
        style={{
          width: '100%',
          height: '350px',
          objectFit: 'cover',
          paddingBottom: '30px',
        }}
        src={frontImageSrc}
      />
      <Typography
        className={'graphite'}
        level='body-lg'
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
