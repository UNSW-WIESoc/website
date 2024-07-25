'use client';

import React, { useState } from 'react';
import { Box, Typography } from '@mui/joy';
import OutlineButton from './OutlineButton';


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

  const flipContainerStyle = {
    perspective: '1000px',
    width: '375px',
    height: '425px',
  };

  const flipperStyle = {
    position: 'relative',
    width: '100%',
    height: '100%',
    transition: 'transform 0.6s',
    transformStyle: 'preserve-3d',
    transform: isFlipped ? 'rotateY(180deg)' : 'none',
  };

  const frontBackStyle = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backfaceVisibility: 'hidden',
    boxShadow: isFlipped
      ? '0 15px 8px rgb(6, 55, 118, 0.25)'
      : '0 4px 8px rgb(6, 55, 118, 0.25)',
    borderRadius: '10px',
    overflow: 'hidden',
  };

  const backStyle = {
    ...frontBackStyle,
    transform: 'rotateY(180deg)',
  };

  return (
    <Box
      style={flipContainerStyle}
      onClick={toggleComponent}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <Box style={flipperStyle}>
        <Box style={frontBackStyle}>
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
        <Box style={backStyle}>
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
              <Typography className={'graphite'} level='body' style={{ textAlign: 'center', lineHeight: '1.2', }}>{description}</Typography>
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
              <OutlineButton text='Learn More' link={link} />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}