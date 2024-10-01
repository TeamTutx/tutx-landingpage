'use client';

import * as React from 'react';
import { useThemeContext } from '@/context/theme-data-provider';
import { useTheme } from 'next-themes';
import { cn } from '@/lib/utils';
import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FloatingDock } from '@/components/ui/floating-dock';

export default function Dock() {
  const { themeColor, setThemeColor } = useThemeContext();
  const { setTheme, theme } = useTheme();
  const links = [
    {
      title: 'Theme',
      icon: (
        <Button
          variant="ghost"
          className="rounded-full px-2"
          size="icon"
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} // Toggle theme between light and dark
        >
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      ),
      href: '#',
      color: 'text-zinc-900 dark:text-zinc-100'
    },

    {
      title: 'Zinc',
      icon: (
        <Button
          variant="ghost"
          className={cn('rounded-full', 'mx-2', 'px-2', themeColor === 'Zinc' ? 'border' : 'border-none')}
          onClick={() => setThemeColor('Zinc')}
        >
          <div>
            <div className={cn('rounded-full', 'w-[20px]', 'h-[20px]', theme === 'light' ? 'bg-zinc-900' : 'bg-zinc-700')} />
          </div>
        </Button>
      ),
      href: '#',
      color: 'text-zinc-900 dark:text-zinc-100'
    },
    {
      title: 'Rose',
      icon: (
        <Button
          variant="ghost"
          className={cn('rounded-full', 'mx-2', 'px-2', themeColor === 'Rose' ? 'border' : 'border-none')}
          onClick={() => setThemeColor('Rose')}
        >
          <div>
            <div className={cn('rounded-full', 'w-[20px]', 'h-[20px]', theme === 'light' ? 'bg-rose-600' : 'bg-rose-700')} />
          </div>
        </Button>
      ),
      href: '#',
      color: 'text-rose-600 dark:text-rose-700'
    },
    {
      title: 'Blue',
      icon: (
        <Button
          variant="ghost"
          className={cn('rounded-full', 'mx-2', 'px-2', themeColor === 'Blue' ? 'border' : 'border-none')}
          onClick={() => setThemeColor('Blue')}
        >
          <div>
            <div className={cn('rounded-full', 'w-[20px]', 'h-[20px]', theme === 'light' ? 'bg-blue-600' : 'bg-blue-700')} />
          </div>
        </Button>
      ),
      href: '#',
      color: 'text-blue-600 dark:text-blue-700'
    },
    {
      title: 'Green',
      icon: (
        <Button
          variant="ghost"
          className={cn('rounded-full', 'mx-2', 'px-2', themeColor === 'Green' ? 'border' : 'border-none')}
          onClick={() => setThemeColor('Green')}
        >
          <div>
            <div className={cn('rounded-full', 'w-[20px]', 'h-[20px]', theme === 'light' ? 'bg-green-600' : 'bg-green-500')} />
          </div>
        </Button>
      ),
      href: '#',
      color: 'text-green-600 dark:text-green-500'
    },

    {
      title: 'Orange',
      icon: (
        <Button
          variant="ghost"
          className={cn('rounded-full', 'mx-2', 'px-2', themeColor === 'Orange' ? 'border' : 'border-none')}
          onClick={() => setThemeColor('Orange')}
        >
          <div>
            <div className={cn('rounded-full', 'w-[20px]', 'h-[20px]', theme === 'light' ? 'bg-orange-500' : 'bg-orange-700')} />
          </div>
        </Button>
      ),
      href: '#',
      color: 'text-orange-500 dark:text-orange-700'
    }
  ];
  return (
    <div className="flex w-full scale-90 items-center justify-center">
      <FloatingDock mobileClassName="translate-y-20" items={links} />
    </div>
  );
}
