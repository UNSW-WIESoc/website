'use client';

import React, { useState } from 'react';
import { Box, Typography } from '@mui/joy';
import OutlineButton from './OutlineButton';
import Image from "next/image";
import AspectRatio from "@mui/joy/AspectRatio";


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
      <Box sx={flipperStyle}>
        <Box sx={frontBackStyle}>
          <AspectRatio ratio='8/7'>
            <Image fill src={frontImageSrc} alt="programs-card-image"/>
          </AspectRatio>
          <Typography
            mt={3}
            className='graphite'
            level='body-lg'
            textAlign='center'
          >
            {frontTitle}
          </Typography>
        </Box>
        <Box sx={backStyle}>
          <Box
            sx={{
              padding: '40px',
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
            }}
          >
            <Box
              sx={{
                display: 'flex', 
                justifyContent: 'center',
              }}
            >
              <Typography className='graphite' level='body' textAlign='center' lineHeight='1.2'>{description}</Typography>
            </Box>
            <Box 
              sx={{
                display: 'flex', 
                flexWrap: 'wrap', 
                justifyContent: 'center', 
                transform: 'scale(0.9)',
                marginTop: 'auto',
              }}
            >
              {backContent.map((item, index) => (
                <Box key={index} sx={{ maxWidth: '50%', padding: '15px', }}>
                  {item}
                </Box>
              ))}
            </Box>        
            <Box
              sx={{
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