'use client';
import React from 'react';
import { PinContainer } from '@/components/ui/3d-pin';
import Image from 'next/image';
import { MoveRight } from 'lucide-react';

export default function TemplateI() {
  return (
    <div className="mx-auto flex max-w-7xl items-center justify-center p-16 py-32">
      <div className="flex-1 space-y-4">
        <div className="text-4xl font-extrabold leading-tight">More from Tutx</div>
        <div className="group flex cursor-pointer items-center text-primary">
          Browse articles
          <MoveRight
            className="ml-3 inline transform transition-transform duration-300 ease-in-out group-hover:translate-x-2"
            strokeWidth={1}
          />
        </div>
      </div>

      <PinContainer
        title="/ui.aceternity.com"
        href="https://www.linkedin.com/pulse/days-2425180-building-tutx-debounce-supril-singh-tnvrf/"
      >
        <div className="flex h-[20rem] w-[20rem] basis-full flex-col p-4 tracking-tight text-black dark:text-white/50 sm:basis-1/2">
          <h3 className="!m-0 max-w-xs !pb-2 text-base font-bold text-black dark:text-white">Debounce</h3>
          <div className="!m-0 !p-0 text-base font-normal">
            <span className="text-muted-foreground">Customizable Tailwind CSS and Framer Motion Components.</span>
          </div>
          <div className="mt-4 flex h-48 w-full flex-1 items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-primary via-primary to-primary sm:rounded-tl-lg sm:rounded-tr-lg">
            <Image
              width={200}
              height={200}
              alt=""
              objectFit="cover"
              src="/article2.png"
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
      </PinContainer>

      <PinContainer title="/ui.aceternity.com" href="https://www.linkedin.com/pulse/day-7-8180-building-tutx-supril-singh-uvzxf/">
        <div className="flex h-[20rem] w-[20rem] basis-full flex-col p-4 tracking-tight sm:basis-1/2">
          <h3 className="!m-0 max-w-xs !pb-2 text-base font-bold text-black dark:text-white">TanStack</h3>
          <div className="!m-0 !p-0 text-base font-normal">
            <span className="text-muted-foreground">Customizable Tailwind CSS and Framer Motion Components.</span>
          </div>
          <div className="mt-4 flex h-48 w-full flex-1 items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-primary via-primary to-primary sm:rounded-tl-lg sm:rounded-tr-lg">
            <Image
              width={200}
              height={200}
              alt=""
              objectFit="cover"
              src="/article1.jpeg"
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
      </PinContainer>
    </div>
  );
}
