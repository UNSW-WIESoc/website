import React, { useState, useEffect } from 'react';
import { Box } from '@mui/joy';

interface TypingProps {
  text: string;
  delay: number;
  infinite?: boolean;
  pause?: number; // Optional delay before restarting
}

export default function TypingAnimation({ text, delay, infinite, pause }: TypingProps) {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (isPaused) {
      timeout = setTimeout(() => {
        setIsPaused(false);
        setCurrentIndex(0);
        setCurrentText('');
      }, pause);
    } else if (currentIndex < text.length) {
      timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);
    } else if (infinite) {
      setIsPaused(true);
    }

    return () => clearTimeout(timeout);
  }, [currentIndex, delay, infinite, text, isPaused, pause]);

  return <Box minHeight={100}>{currentText}</Box>;
};