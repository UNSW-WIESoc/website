"use client";

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
        fontSize: '6.5rem',
        fontWeight: '600',
        color: '#33373D',
        textAlign: 'center',
        letterSpacing: '0.6px',
        lineHeight: '1.7',
        margin: '40px'
      },
      title: { 
        fontSize: '4rem',
        fontWeight: '700',
        color: '#33373D',
        textAlign: 'center',
        letterSpacing: '0.6px',
        lineHeight: '1.7',
        margin: '40px'
      },
      h1: {
        fontSize: '2.5rem',
        fontWeight: '700',
        color: '#33373D',
        textAlign: 'center',
        letterSpacing: '0.6px',
        lineHeight: '1.7',
        margin: '30px'
      },
      h2: {
        fontSize: '2.5rem',
        fontWeight: '400',
        color: '#33373D',
        textAlign: 'center',
        letterSpacing: '0.6px',
        lineHeight: '1.7',
        margin: '30px'
      },
      'body-lg': {
        fontSize: '1.2rem',
        fontWeight: '400',
        color: '#33373D',
        textAlign: 'justify',
        letterSpacing: '0.6px',
        lineHeight: '1.7'
      },
      'subtitle-lg': {
        fontSize: '1.2rem',
        fontWeight: '600',
        color: '#33373D',
        textAlign: 'center',
        letterSpacing: '0.6px',
        lineHeight: '1.7',
        margin: '20px'
      },
      body: {
        fontSize: '1rem',
        fontWeight: '400',
        color: '#33373D',
        textAlign: 'justify',
        letterSpacing: '0.6px',
        lineHeight: '1.7'
      },
      subtitle: {
        fontSize: '1rem',
        fontWeight: '600',
        color: '#33373D',
        textAlign: 'center',
        letterSpacing: '0.6px',
        lineHeight: '1.7',
        margin: '10px'
      }
    },
  });
  
  return (
    <CssVarsProvider theme={theme}>
      <CssBaseline />
      {children}
    </CssVarsProvider>
  );
}