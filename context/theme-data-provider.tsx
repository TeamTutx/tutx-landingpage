'use client';
import setGlobalColorTheme from '@/lib/theme-colors';
import { useTheme } from 'next-themes';
import { ThemeProviderProps } from 'next-themes/dist/types';
import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext<ThemeColorStateParams>({} as ThemeColorStateParams);

export default function ThemeDataProvider({ children }: ThemeProviderProps) {
  const getSavedThemeColor = () => {
    try {
      return (localStorage.getItem('themeColor') as ThemeColors) || 'Zinc';
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      'Zinc' as ThemeColors;
    }
  };

  const [themeColor, setThemeColor] = useState<ThemeColors>(getSavedThemeColor() as ThemeColors);
  const [isMounted, setIsMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    localStorage.setItem('themeColor', themeColor);
    setGlobalColorTheme(theme as 'light' | 'dark', themeColor);

    if (!isMounted) {
      setIsMounted(true);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [themeColor, theme]);

  if (!isMounted) {
    return null;
  }

  return <ThemeContext.Provider value={{ themeColor, setThemeColor }}>{children}</ThemeContext.Provider>;
}

export function useThemeContext() {
  return useContext(ThemeContext);
}
