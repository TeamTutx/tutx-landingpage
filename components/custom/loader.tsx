'use client';
import React, { useState } from 'react';
import { MultiStepLoader as Loader } from '../ui/multi-step-loader';
import { MoveRight, CircleXIcon } from 'lucide-react';

const loadingStates = [
  {
    text: "Pop in your name and email. We can't wait to meet you!"
  },
  {
    text: "Tell us how you want your demo experience to be. We're all ears!"
  },
  {
    text: "Your details land directly with Sheel, who's excited to dive in."
  },
  {
    text: 'Our Tutx team is rolling up their sleeves to fine-tune everything.'
  },
  {
    text: "Once it's perfect, we'll drop you a message with all the demo details!"
  }
];

export default function StepLoader() {
  const [loading, setLoading] = useState(false);

  const startLoading = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 10000);
  };

  return (
    <div className="flex items-center justify-center">
      <Loader loadingStates={loadingStates} loading={loading} duration={2000} />

      <button onClick={startLoading} className="group flex cursor-pointer items-center text-primary">
        <a href="#demo">
          Get a demo
          <MoveRight
            className="ml-3 inline transform transition-transform duration-300 ease-in-out group-hover:translate-x-2"
            strokeWidth={1}
          />
        </a>
      </button>

      {loading && (
        <button className="fixed right-4 top-4 z-[120] text-black dark:text-white" onClick={() => setLoading(false)}>
          <CircleXIcon />
        </button>
      )}
    </div>
  );
}
