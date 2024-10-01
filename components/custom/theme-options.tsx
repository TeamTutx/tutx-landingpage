'use client';
import * as React from 'react';

import { useThemeContext } from '@/context/theme-data-provider';
import { useTheme } from 'next-themes';
import { cn } from '@/lib/utils';
import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';

const availableThemeColors = [
  { name: 'Zinc', light: 'bg-zinc-900', dark: 'bg-zinc-700' },
  { name: 'Rose', light: 'bg-rose-600', dark: 'bg-rose-700' },
  { name: 'Blue', light: 'bg-blue-600', dark: 'bg-blue-700' },
  { name: 'Green', light: 'bg-green-600', dark: 'bg-green-500' },
  { name: 'Orange', light: 'bg-orange-500', dark: 'bg-orange-700' }
];

export function ThemeOptions() {
  const { themeColor, setThemeColor } = useThemeContext();
  const { setTheme, theme } = useTheme();

  const createButtons = () => {
    return availableThemeColors.map(({ name, light, dark }) => (
      <Button
        variant="ghost"
        key={name}
        className={cn('rounded-full', 'mx-2', 'px-2', name === themeColor ? 'border' : 'border-none')}
        onClick={() => setThemeColor(name as ThemeColors)}
      >
        <div>
          <div className={cn('rounded-full', 'w-[20px]', 'h-[20px]', theme === 'light' ? light : dark)}></div>
        </div>
      </Button>
    ));
  };

  return (
    <div className="flex justify-center">
      <Button
        variant="ghost"
        className="ml-2 mr-1 rounded-full px-2"
        size="icon"
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} // Toggle theme between light and dark
      >
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle theme</span>
      </Button>
      {createButtons()}
    </div>
  );
}
