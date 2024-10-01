'use client';

import Image from 'next/image';
import React from 'react';
import { CardBody, CardContainer, CardItem } from '../ui/3d-card';
// import Link from "next/link";
interface ParallexCardProps {
  type: 'grid-small' | 'grid' | 'dot';
  src: string;
}

export default function ParallexCard({ type, src }: ParallexCardProps) {
  const backgroundClass = {
    'grid-small': 'dark:bg-grid-small-white/[0.35] bg-grid-small-black/[0.3] border border-zinc-100 dark:border-zinc-900',
    grid: 'dark:bg-grid-white/[0.35] bg-grid-black/[0.2] border border-zinc-100 dark:border-zinc-900',
    dot: 'dark:bg-dot-white/[0.35] bg-dot-black/[0.35]'
  }[type];

  return (
    <CardContainer className="inter-var">
      <CardBody className={`group/card relative h-auto w-auto p-6 sm:w-[30rem] ${backgroundClass}`}>
        <CardItem translateZ="100" className="mt-4 w-full">
          <Image
            src={src}
            height="1000"
            width="1000"
            className="h-60 w-full rounded-xl border border-zinc-100 object-cover group-hover/card:shadow-xl dark:border-zinc-900"
            alt="thumbnail"
          />
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
