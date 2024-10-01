'use client';
import { useEffect } from 'react';
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
  useEffect(() => {
    animate(
      'span',
      {
        opacity: 1,
        filter: filter ? 'blur(0px)' : 'none'
      },
      {
        duration: duration ? duration : 1,
        delay: stagger(0.2)
      }
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          console.log(word);
          const isHighlighted = highlights.includes(word); // Check if the word is in the highlights array

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
    <div className={cn('font-bold', className)}>
      <div className="mt-4">
        <div className="tracking-wide text-black dark:text-white">{renderWords()}</div>
      </div>
    </div>
  );
};
