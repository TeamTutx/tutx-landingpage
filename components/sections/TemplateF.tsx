// import { ThemeOptions } from '@/components/custom/theme-options';
'use client';
import { Button } from '@/components/ui/button';
import Dock from '../custom/dock';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';

const words = `Make the complex, simple`;

export default function TemplateF() {
  return (
    <div className="mt-32 flex min-h-[400px] flex-col items-center bg-primary/5 py-20">
      <div className="w-full text-center text-5xl font-extrabold leading-tight">
        <TextGenerateEffect words={words} className="text-5xl font-extrabold leading-tight" highlights={['simple']} />
      </div>
      <div className="w-full pt-2 text-center text-sm text-muted-foreground">
        Delivering a great experience, no matter how complex your product, has never been simpler.
      </div>
      <div className="pt-4">
        {/* <ThemeOptions /> */}
        <Dock />
      </div>
      <div className="mt-16 flex h-96 w-1/2 items-center justify-center rounded-2xl bg-white dark:bg-black">
        <Button className="text-white dark:text-black">Themes</Button>
      </div>
    </div>
  );
}
