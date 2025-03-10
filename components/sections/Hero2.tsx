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
              className="scale-75 sm:scale-90 md:scale-100 bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              <span className='p-1 mx-1 text-sm sm:text-base'>Coaching Management Made Simple</span>
            </MovingBorderButton>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6">
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
              <InteractiveHoverButton  className='rounded-md' text='See Demo'> 
              <Link href="#demo">See Demo</Link>
              </InteractiveHoverButton>
            </div>
          </div>
        }
      >
        <Image
          src="/Dashboard.png"
          alt="hero"
          width={1400}
          height={780}
          className="mx-auto rounded-2xl object-fill h-full w-full sm:w-[90%] md:w-[85%] lg:w-full"
          style={{
            maxWidth: '100%',
            height: 'auto',
            objectFit: 'contain'
          }}
          sizes="(max-width: 640px) 95vw, (max-width: 768px) 90vw, (max-width: 1024px) 85vw, 1400px"
          draggable={false}
          priority
        />
      </ContainerScroll>
    </div>
  );
}