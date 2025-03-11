'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { CardBody, CardContainer, CardItem } from '../ui/3d-card';
import { Loader2 } from 'lucide-react';

interface ParallexCardProps {
  src: string;
}

export default function ParallexCard({ src }: ParallexCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <CardContainer className="inter-var">
        <CardBody className="group/card max-w-lg sm:p-6 bg-dot-black/[0.20] dark:bg-dot-white/[0.40]">
          <CardItem 
            translateZ="100" 
            className="sm:mt-4 cursor-pointer" 
            onClick={openModal}
          >
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

      {/* Image Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div className="relative w-auto max-w-3xl mx-auto">
            <button 
              className="absolute -top-10 right-0 text-white p-2 rounded-full hover:bg-white/10"
              onClick={closeModal}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <div className="bg-white dark:bg-zinc-900 rounded-lg overflow-hidden relative">
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-white dark:bg-zinc-900">
                  <Loader2 className="h-8 w-8 animate-spin text-primary" />
                </div>
              )}
              <Image
                src={src}
                height={800}
                width={800}
                className="object-contain"
                alt="zoomed image"
                onLoad={() => setIsLoading(false)}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
