import React, { useState, useEffect } from 'react';
import { Box } from '@mui/joy';

interface TypingProps {
  text: string;
  delay: number;
  infinite?: boolean;
}

export default function TypingAnimation({ text, delay, infinite }: TypingProps) {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (currentIndex < text.length) {
      timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);
    } else if (infinite) {
      timeout = setTimeout(() => {
        setCurrentIndex(0);
        setCurrentText('');
      }, delay);
    }

    return () => clearTimeout(timeout);
  }, [currentIndex, delay, infinite, text]);

  return <Box minHeight={100} >{currentText}</Box>;
};