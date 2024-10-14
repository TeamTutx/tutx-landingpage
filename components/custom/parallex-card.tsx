'use client';

import Image from 'next/image';
import React from 'react';
import { CardBody, CardContainer, CardItem } from '../ui/3d-card';

interface ParallexCardProps {
  src: string;
}

export default function ParallexCard({ src }: ParallexCardProps) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="group/card relative sm:p-6 bg-dot-black/[0.20] dark:bg-dot-white/[0.40]">
        <CardItem translateZ="100" className="sm:mt-4">
          <Image
            src={src}
            height="1000"
            width="1000"
            className="rounded-lg border border-zinc-100 object-cover shadow-sm group-hover/card:shadow-xl dark:border-zinc-900"
            alt="thumbnail"
          />
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
