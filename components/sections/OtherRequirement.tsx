'use client';
import { TypewriterEffectSmooth } from '@/components/ui/typewriter-effect';
import Image from 'next/image';


export default function OtherRequirement() {
  
  
  const words = [
    {
      text: 'Need'
    },
    {
      text: 'help'
    },
    {
      text: 'with'
    },
    {
      text: 'something'
    },
    {
      text: 'else'
    },
    {
      text: '?',
      className: 'text-primary dark:text-primary'
    }
  ];

  const additionalInfo =
    'If you have any other requirements like you want to take live classes, sell courses, or any other requirement related to running your coaching institute, just say hi or call us... we can help.';

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('demo');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id="other-requirement" className="relative flex flex-col md:flex-row items-stretch min-h-max m-14">
      {/* Left side with image */}
      <div className="w-full md:w-1/3 h-[300px] md:h-auto relative">
        <div className="absolute inset-0 overflow-hidden">
          <Image 
            src="/Hi.svg" 
            alt="Say Hi" 
            fill
            priority
            className="object-contain grayscale transition-all duration-500 hover:grayscale-0"
            style={{ filter: 'brightness(1.1) contrast(1.2)' }} 
          />
        </div>
      </div>
      
      {/* Right side with content */}
      <div className="w-full md:w-2/3 flex flex-col justify-center">
        <div className="flex items-center justify-center md:justify-start text-4xl md:text-5xl font-extrabold leading-tight">
          <TypewriterEffectSmooth words={words} />
        </div>
        
        <div className="w-full max-w-2xl">
          <p className="text-muted-foreground text-lg mb-8">{additionalInfo}</p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#demo"
              onClick={scrollToContact}
              className="rounded-md bg-primary px-6 py-3 text-lg font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:scale-105 shadow-md"
            >
              Say Hi
            </a>
            <a
              href="tel:+1234567890"
              className="rounded-md border border-input bg-background px-6 py-3 text-lg font-medium transition-all hover:bg-accent hover:text-accent-foreground hover:scale-105 shadow-sm"
            >
              Call Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
