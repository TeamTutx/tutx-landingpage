'use client';
import { TypewriterEffectSmooth } from '@/components/ui/typewriter-effect';

export default function Story() {
  const words = [
    {
      text: 'Build'
    },
    {
      text: 'your'
    },
    {
      text: 'own'
    },
    {
      text: 'institute'
    },
    {
      text: 'with'
    },
    {
      text: 'Tutx.',
      className: 'text-primary dark:text-primary'
    }
  ];

  const story =
    "We're three friends united by a bold idea: to revolutionize how institutions manage their operations. Along the way, we realized many small to mid-sized centers were still stuck in the past, using pen and paper or basic Excel sheets to handle student records and payments. That sparked our mission to create a smarter, digital solution. Our goal? To give educators back their time, so they can focus on teaching, not paperwork. We're building a platform that cuts through the admin chaos, and we're just getting started—our vision is unfolding, and we can't wait to see where it takes us!";
  return (
    <div id="story" className="flex flex-col items-center mb-4 lg:mb-10 py-16 px-4 sm:px-10">
      <div className="flex">
        <div className="flex items-center justify-center text-5xl font-extrabold leading-tight">
          <TypewriterEffectSmooth words={words} />
        </div>
      </div>
      <div className="flex items-center justify-center text-muted-foreground">
        <div className="w-full lg:w-2/3 text-center text-xs sm:text-sm lg:text-base">
          <div>{story}</div>
        </div>
      </div>
    </div>
  );
}
