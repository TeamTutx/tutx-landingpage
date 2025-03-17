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
    <div id="other-requirement" className="relative flex flex-col md:flex-row items-stretch min-h-max py-20 px-8 md:px-14 bg-background dark:bg-background">
      {/* Left side with image */}
      <div className="w-full md:w-2/5 h-[400px] md:h-auto relative mb-10 md:mb-0">
        <div className="absolute inset-0 overflow-hidden flex items-center justify-center">
          <Image 
            src="/Hi.svg" 
            alt="Say Hi" 
            width={500}
            height={500}
            priority
            className="object-contain transition-all duration-500 hover:scale-105 dark:invert-[0.15]"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </div>
      </div>
      
      {/* Right side with content */}
      <div className="w-full md:w-3/5 flex flex-col justify-center">
        <div className="flex items-center justify-center md:justify-start text-5xl md:text-6xl  sm:text-3xl font-extrabold leading-tight mb-6">
          <TypewriterEffectSmooth words={words} />
        </div>
        
        <div className="w-full max-w-2xl">
          <p className="text-muted-foreground dark:text-gray-300 text-xl mb-10">{additionalInfo}</p>
          
          <div className="flex flex-col sm:flex-row gap-6">
            <a
              href="#demo"
              onClick={scrollToContact}
              className="rounded-md bg-primary px-8 py-4 text-lg font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:scale-105 shadow-md"
            >
              Say Hi
            </a>
            <a
              href="tel:+917972057832"
              className="rounded-md border border-input bg-background dark:bg-background/30 px-8 py-4 text-lg font-medium transition-all hover:bg-accent hover:text-accent-foreground hover:scale-105 shadow-sm"
            >
              Call Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
