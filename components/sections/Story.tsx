'use client';
import { TypewriterEffectSmooth } from '@/components/ui/typewriter-effect';
import Image from 'next/image';

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
  
  const additionalInfo = 
    "If you have any other requirements like you want to take live classes, sell courses, or any other requirement related to running your coaching institute, just say hi or call us... we can help.";
    
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
      
      {/* Additional info section with SVG */}
      <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-6 w-full lg:w-3/4">
        <div className="w-full md:w-1/3 flex justify-center">
          <div className="w-48 h-48 relative grayscale hover:grayscale-0 transition-all duration-300">
            <Image 
              src="/Hi.svg" 
              alt="Say Hi" 
              fill
              className="object-contain"
              style={{ filter: 'brightness(1.1) contrast(1.2)' }}
            />
          </div>
        </div>
        <div className="w-full md:w-2/3 text-center md:text-left text-sm md:text-base lg:text-lg">
          <p className="text-muted-foreground">{additionalInfo}</p>
          <div className="mt-4 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
            <a href="mailto:contact@tutx.com" className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
              Say Hi
            </a>
            <a href="tel:+1234567890" className="px-4 py-2 border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-md transition-colors">
              Call Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
