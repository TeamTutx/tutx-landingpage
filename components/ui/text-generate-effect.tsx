'use client';
import { useEffect, useRef } from 'react';
import { motion, stagger, useAnimate } from 'framer-motion';
import { cn } from '@/lib/utils';

export const TextGenerateEffect = ({
  words,
  highlights = [],
  className,
  filter = true,
  duration = 0.5
}: {
  words: string;
  highlights?: string[];
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(' ');
  const ref = useRef<HTMLDivElement>(null); // Reference to the component

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Start animation when the component comes into view
          animate(
            'span',
            {
              opacity: 1,
              filter: filter ? 'blur(0px)' : 'none'
            },
            {
              duration: duration,
              delay: stagger(0.2)
            }
          );
          observer.unobserve(ref.current!); // Stop observing after animation starts
        }
      },
      {
        threshold: 0.1 // Trigger when 10% of the component is in view
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(ref.current); // Cleanup observer on component unmount
      }
    };
  }, [animate, filter, duration]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          const isHighlighted = highlights.includes(word);

          return (
            <motion.span
              key={word + idx}
              className="text-black opacity-0 dark:text-white"
              style={{
                filter: filter ? 'blur(10px)' : 'none'
              }}
            >
              {isHighlighted ? (
                <span className="relative inline-block text-primary/80">
                  <span className="absolute inset-x-0 bottom-0 h-1/2 bg-primary/20" />
                  {word}
                </span>
              ) : (
                <span>{word}</span>
              )}{' '}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn('font-bold', className)} ref={ref}>
      <div className="mt-4">
        <div className="tracking-wide text-black dark:text-white">{renderWords()}</div>
      </div>
    </div>
  );
};
