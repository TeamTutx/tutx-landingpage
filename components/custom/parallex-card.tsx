'use client';

import Image from 'next/image';
import React from 'react';
import { CardBody, CardContainer, CardItem } from '../ui/3d-card';
// import Link from "next/link";
interface ParallexCardProps {
  src: string;
}

export default function ParallexCard({ src }: ParallexCardProps) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="group/card relative h-auto w-auto p-6 bg-dot-black/[0.20] dark:bg-dot-white/[0.35] sm:w-[30rem]">
        <CardItem translateZ="100" className="mt-4 w-full">
          <Image
            src={src}
            height="1000"
            width="1000"
            className="h-full w-full rounded-lg border border-zinc-100 object-cover shadow-sm group-hover/card:shadow-xl dark:border-zinc-900"
            alt="thumbnail"
          />
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
