"use client";
import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'next-themes';

const ThemeContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, [])

  if(!mounted) {
    return <>{children}</>
  }
  return (
    <ThemeProvider>{children}</ThemeProvider>
  )
}

export default ThemeContextProvider;