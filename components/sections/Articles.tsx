'use client';
import React from 'react';
import { PinContainer } from '@/components/ui/3d-pin';
import Image from 'next/image';
import { MoveRight } from 'lucide-react';
import { Card } from '../ui/card';

export default function Articles() {

  const articles = [
    {
      title: 'Debounce',
      description: 'Optimizing search with debouncing: fewer API calls, faster results!',
      imageUrl: '/article2.png',
      link: 'https://www.linkedin.com/pulse/days-2425180-building-tutx-debounce-supril-singh-tnvrf/'
    },
    {
      title: 'TanStack',
      description: "After all, it's all about intelligent state management.",
      imageUrl: '/article1.jpeg',
      link: 'https://www.linkedin.com/pulse/day-7-8180-building-tutx-supril-singh-uvzxf/'
    }
  ];

  return (
    <div id="articles" className="mx-auto flex w-full flex-col items-center justify-center px-12 py-32 lg:max-w-7xl lg:flex-row">
      <div className="flex-1 pb-8">
        <div className="text-4xl font-extrabold leading-tight">More from Tutx</div>
        <div className="group flex cursor-pointer items-center text-primary">
          Browse articles
          <MoveRight
            className="ml-3 inline transform transition-transform duration-300 ease-in-out group-hover:translate-x-2"
            strokeWidth={1}
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        {articles.map((article, idx) => (
          <div className="hidden xl:block mb-16" key={idx}>
            <PinContainer key={article.title} title="/linkedin.com" href={article.link}>
              <div className="flex h-[20rem] w-[20rem] basis-full flex-col p-4 tracking-tight text-black dark:text-white/50 sm:basis-1/2">
                <h3 className="!m-0 max-w-xs !pb-2 text-base font-bold text-black dark:text-white">{article.title}</h3>
                <div className="!m-0 !p-0 text-base font-normal">
                  <span className="text-muted-foreground">{article.description}</span>
                </div>
                <div className="mt-4 flex h-48 w-full flex-1 items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-primary via-primary to-primary sm:rounded-tl-lg sm:rounded-tr-lg">
                  <Image width={200} height={200} alt="" src={article.imageUrl} className="h-full w-full object-cover object-center" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}

        {articles.map((article, idx) => (
          <div className="block xl:hidden mb-8" key={idx}>
            <Card className='mx-4 p-4 rounded-xl'>
              <div className="flex h-[20rem] w-[20rem] basis-full flex-col p-4 tracking-tight text-black dark:text-white/50 sm:basis-1/2">
                <h3 className="!m-0 max-w-xs !pb-2 text-base font-bold text-black dark:text-white">{article.title}</h3>
                <div className="!m-0 !p-0 text-base font-normal">
                  <span className="text-muted-foreground">{article.description}</span>
                </div>
                <div className="mt-4 flex h-48 w-full flex-1 items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-primary via-primary to-primary sm:rounded-tl-lg sm:rounded-tr-lg">
                  <Image width={200} height={200} alt="" src={article.imageUrl} className="h-full w-full object-cover object-center" />
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
