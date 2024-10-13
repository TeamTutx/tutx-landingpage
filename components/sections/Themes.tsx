'use client';
import Dock from '../custom/dock';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import Image from 'next/image';
import { useThemeContext } from '@/context/theme-data-provider';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function Themes() {
  const words = 'Personalize Your platform experience';
  const { themeColor } = useThemeContext();
  const { theme } = useTheme();
  const subheading =
    'Easily customize your platform with personalized themes and colors, ensuring your institute reflects your unique branding and style.';

  const [imageSrc, setImageSrc] = useState(`/${themeColor}-${theme}.png`);
  const [lightImageSrc, setLightImageSrc] = useState(`/Zinc-${theme}.png`); // Assuming you have a light theme image

  useEffect(() => {
    setImageSrc(`/${themeColor}-${theme}.png`);
    setLightImageSrc(`/Zinc-${theme}.png`); // Update light image as well
  }, [themeColor, theme]);

  return (
    <div id="themes" className="mt-32 flex flex-col items-center bg-primary/5 py-20">
      <div className="w-full text-center text-5xl font-extrabold leading-tight">
        <TextGenerateEffect words={words} className="text-5xl font-extrabold leading-tight" highlights={['experience']} />
      </div>
      <div className="w-full pt-2 text-center text-sm text-muted-foreground">{subheading}</div>
      <div className="pb-10 pt-4">
        <Dock />
      </div>
      <div className="relative h-[400px] w-[700px]">
        {' '}
        {/* Adjust width and height as necessary */}
        {/* Light Image */}
        <Image
          src={lightImageSrc}
          height={700}
          width={700}
          className="absolute inset-0 rounded-md border border-muted-foreground/10 object-cover opacity-50" // Light image with reduced opacity
          alt="thumbnail light"
        />
        {/* Actual Image */}
        <Image
          src={imageSrc}
          height={700}
          width={700}
          className="absolute inset-0 rounded-md border border-muted-foreground/10 object-cover transition-opacity duration-500 ease-in-out" // Actual image
          alt="thumbnail"
        />
      </div>
    </div>
  );
}
