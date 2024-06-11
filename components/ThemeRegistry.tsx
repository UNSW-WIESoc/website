'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { CssVarsProvider, extendTheme } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';

declare module '@mui/joy/styles' {
  interface TypographySystemOverrides {
    title: true;
    'subtitle-lg': true;
    body: true;
    subtitle: true;
    'subtitle-light': true;
    'h2-blue': true;
  }
}

type ThemeRegistryProps = {
  children: React.ReactNode;
};

// This implementation is suggested by JoyUI for working with App router
// https://mui.com/joy-ui/integrations/next-js-app-router/
export default function ThemeRegistry({
                                        children
                                      }: ThemeRegistryProps) {
  const path = usePathname();

  // default font family is Inter
  const theme = extendTheme({
    typography: {
      // removing default levels
      h3: undefined,
      h4: undefined,
      'title-md': undefined,
      'title-sm': undefined,
      'body-md': undefined,
      'body-sm': undefined,
      'body-xs': undefined,

      // defining custom levels
      'title-lg': {
        fontSize: '4.5rem',
        fontWeight: '600',
        color: '#33373D',
        textAlign: 'center',
        letterSpacing: '0.4px',
        lineHeight: '1.7',
        margin: '30px 0px'
      },
      title: { 
        fontSize: '3rem',
        fontWeight: '600',
        color: '#33373D',
        textAlign: 'center',
        letterSpacing: '0.4px',
        lineHeight: '1.7',
        margin: '30px 0px'
      },
      h1: {
        fontSize: '2rem',
        fontWeight: '700',
        color: '#33373D',
        textAlign: 'center',
        letterSpacing: '0.4px',
        lineHeight: '1.7',
        margin: '30px 0px'
      },
      h2: {
        fontSize: '2rem',
        fontWeight: '500',
        color: '#33373D',
        textAlign: 'center',
        letterSpacing: '0.4px',
        lineHeight: '1.7',
        margin: '30px 0px'
      },
      'body-lg': {
        fontSize: '1.2rem',
        fontWeight: '400',
        color: '#33373D',
        letterSpacing: '0.4px',
        lineHeight: '1.7',
        whiteSpace: 'pre-line'
      },
      'subtitle-lg': {
        fontSize: '1.2rem',
        fontWeight: '600',
        color: '#33373D',
        textAlign: 'center',
        letterSpacing: '0.4px'
      },
      body: {
        fontSize: '1rem',
        fontWeight: '400',
        color: '#33373D',
        letterSpacing: '0.4px',
        lineHeight: '1.7',
        whiteSpace: 'pre-line'
      },
      subtitle: {
        fontSize: '1rem',
        fontWeight: '600',
        color: '#33373D',
        textAlign: 'center',
        letterSpacing: '0.4px'
      },
      'subtitle-light': {
        fontSize: '1rem',
        fontWeight: '500',
        color: '#33373D',
        textAlign: 'center',
        letterSpacing: '0.4px'
      },
      'h2-blue': {
        fontSize: '45px',
        fontWeight: '550',
        color: '#3C639A',
        textAlign: 'center',
        letterSpacing: '0.43px'
      },
    },
  });
  
  return (
    <CssVarsProvider theme={theme}>
      <CssBaseline />
      {children}
    </CssVarsProvider>
  );
}