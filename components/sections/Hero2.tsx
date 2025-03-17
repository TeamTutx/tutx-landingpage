'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Button as MovingBorderButton } from "../ui/moving-border";
import { ContainerScroll } from "../ui/container-scroll-animation";
import AnimatedCounter from '../ui/animated-counter';
import { Cover } from "@/components/ui/cover";
import {InteractiveHoverButton} from '../ui/interactive-hover-button';
export default function Hero2() {
  return (
    
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center mb-8 sm:mb-12 sm:mt-12 md:mb-24 lg:mb-32 pt-6 md:pt-16">
            <MovingBorderButton
              borderRadius="1.75rem"
              className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              <span className='p-1 mx-1 text-sm sm:text-sm'>Coaching Management Made Simple</span>
            </MovingBorderButton>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6">
              <span className="block">Manage your coaching</span>
              <span className="block">business <span className="text-primary"><Cover>at scale</Cover></span></span>
            </h1>
            
            <p className="max-w-2xl mx-auto text-lg text-muted-foreground mb-10">
              Whether you have <AnimatedCounter value={50} className="text-base mx-1" /> or{' '}
              <AnimatedCounter value={50000} className="text-base mx-1" /> students, 
              Tutx gives you all the tools you need to effectively manage your coaching institute from
              anywhere.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
             
              
              <Button asChild variant="outline" size="lg" className="px-8 py-6 text-base">
                <Link href="#demo">Start Free Trial</Link>
              </Button>
              <InteractiveHoverButton  className='rounded-md' text='Book Demo'> 
              <Link href="#contact">Book Demo</Link>
              </InteractiveHoverButton>
            </div>
          </div>
        }
      >
        <Image
          src="/dashboard.png"
          alt="hero"
          width={1400}
          height={780}
          className="absolute inset-0 w-full h-full object-contain object-center p-2 sm:p-4"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
          draggable={false}
          priority
        />
      </ContainerScroll>
    </div>
  );
}