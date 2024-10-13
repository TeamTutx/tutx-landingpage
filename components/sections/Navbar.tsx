'use client';

import * as React from 'react';
import Link from 'next/link';
import TutxBlack from '@/components/custom/tutx';
import { ThemeToggle } from '@/components/custom/theme-toggle';
import { Menu, X } from 'lucide-react';

import { cn } from '@/lib/utils';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu';
import RocketButton from '@/components/custom/rocket-button';
import { useState, useEffect } from 'react';
import Doodle from '../custom/doodle';

const components: { title: string; href: string; description: string }[] = [
  {
    title: 'Manage Institute with Ease',
    href: '#institute',
    description: 'Take control of your institution records, automate fee tracking, and simplify administration for effective teaching.'
  },
  {
    title: 'Course Management',
    href: '#courses',
    description: 'Easily create, manage, and update courses with a few clicks.'
  },
  {
    title: 'Student Enrollment',
    href: '#courses',
    description: 'Streamline student enrollment with automated processes and notifications.'
  },
  {
    title: 'Payment Tracking',
    href: '#payments',
    description: 'Track student payments in real-time for better financial management.'
  },
  {
    title: 'Automated Fee Reminders',
    href: '#dashboard',
    description: 'Send timely fee collection reminders to students and parents to ensure prompt payments.'
  },
  {
    title: 'Personalized Platform Experience',
    href: '#dashboard',
    description: "Customize your platform with unique themes and colors that reflect your institute's branding."
  }
];

export function Navbar() {
  const [isClick, setisClick] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="sticky top-0 z-[100] border-b border-primary/5 px-4 py-4 backdrop-blur-[25px] sm:px-8">
      <div className="mx-auto flex justify-between md:max-w-7xl">
        <div className="">
          <TutxBlack className="h-10" showText={true}></TutxBlack>
        </div>
        <div className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Use cases</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          href="/"
                        >
                          <div className="mb-4 text-lg font-medium">
                            <TutxBlack className="h-8" showText={true}></TutxBlack>
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Tutx simplifies institute management with efficient tools for course, payment, and student tracking.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href="#institute" title="For Institutes">
                      Efficient class management and real-time financial tracking.
                    </ListItem>
                    <ListItem href="#courses" title="For Students">
                      Easy enrollment process and accessible payment portal.
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Features</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {components.map((component) => (
                      <ListItem key={component.title} title={component.title} href={component.href}>
                        {component.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="#themes" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Themes</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="#story" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Our Story</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem className="hidden lg:block">
                <Link href="#about" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>About Us</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="hidden md:flex">
          <RocketButton />
          <ThemeToggle />
        </div>
        <div className="flex items-center space-x-4 md:hidden">
          <ThemeToggle />
          <button onClick={() => setisClick(!isClick)} className="transition-all hover:scale-125">
            {!isClick ? <Menu /> : <X />}
          </button>
        </div>
      </div>
      {isClick && (
        <div className="animate-slideInDown absolute z-10 flex w-full flex-col items-end space-y-2 overflow-hidden pr-8 pt-2 text-sm md:hidden">
          <Link href="#institue">Use Cases</Link>
          <Link href="#courses">Features</Link>
          <Link href="#themes">Themes</Link>
          <Link href="#story">Our Story</Link>
          <Link href="#about">About Us</Link>
          <Link href="#demo">Book a Demo</Link>
        </div>
      )}

      <div className="animate-move-up">
        <div className={`top-15 absolute right-10 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <Doodle />
        </div>
      </div>
    </div>
  );
}

const ListItem = React.forwardRef<React.ElementRef<'a'>, React.ComponentPropsWithoutRef<'a'>>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = 'ListItem';
