'use client';
import * as React from 'react';

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
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

export function ThemeToggle() {
  const { themeColor, setThemeColor } = useThemeContext();
  const { setTheme, theme } = useTheme();

  const createSelectItems = () => {
    return availableThemeColors.map(({ name, light, dark }) => (
      <SelectItem key={name} value={name}>
        <div className="">
          <div className={cn('rounded-full', 'w-[20px]', 'h-[20px]', theme === 'light' ? light : dark)}></div>
        </div>
      </SelectItem>
    ));
  };

  return (
    <>
      <Button variant="ghost" className="px-2 ml-2 mr-1" size="icon" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle theme</span>
      </Button>
      <Select value={themeColor} onValueChange={(value) => setThemeColor(value as ThemeColors)} defaultValue={themeColor}>
        <SelectTrigger className="ml-1 border-none p-0 ring-offset-transparent focus:ring-transparent" rightIcon={false}>
          <SelectValue />
        </SelectTrigger>
        <SelectContent className="min-w-0 border-muted z-[110] -translate-x-2">{createSelectItems()}</SelectContent>
      </Select>
    </>
  );
}
