"use client";

import React from 'react';
import { usePathname } from 'next/navigation';
import { CssVarsProvider, extendTheme } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';

declare module '@mui/joy/styles' {
  interface TypographySystemOverrides {
    title: true;
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
    // colorSchemes: {
    //   light: {
    //     palette: {
    //       // background: {
    //       //   body: path === "/" ? "var(--joy-palette-neutral-800, #171A1C)" : undefined
    //       // },
    //       // primaryBlue: {
    //       //   primary: '#93AED3'
    //       // }
    //     }
    //   }
    // },
    typography: {
      title: {
        fontSize: '7rem',
        fontWeight: '700',
        color: '#33373D',
        textAlign: 'center',
      },
      h1: {
        fontSize: '50pt',
        fontWeight: '700',
        color: '#33373D',
        textAlign: 'center',
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