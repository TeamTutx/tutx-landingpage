import React from 'react';
import { Cover } from '@/components/ui/cover';

export default function TemplateJ() {
  return (
    <div>
      <h1 className="relative z-20 mx-auto mt-6 max-w-7xl bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 bg-clip-text py-6 text-center text-4xl font-semibold text-transparent dark:from-neutral-800 dark:via-white dark:to-white md:text-4xl lg:text-6xl">
        Manage your institute <br /> at your <Cover>fingertips</Cover>
      </h1>
    </div>
  );
}
