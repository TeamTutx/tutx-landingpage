'use client';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';

const words = `All in One Institute Management`;

export default function Information() {
  const paragraphs = [
    `Our comprehensive platform simplifies the complexities of managing institution centers, allowing you to create classes, assign teachers, and manage student enrollment effortlessly. `,
    `With real-time payment tracking and automated fee management, you can easily oversee outstanding fees and generate insightful reports, all from a user-friendly interface.`,
    `By reducing manual errors and streamlining operations, our innovative software saves you valuable time and helps you focus on delivering quality education.`
  ];

  return (
    <div className="flex flex-col md:flex-row py-16 bg-primary/5">
      <div className="flex w-full md:w-2/5 pb-12 md:pb-0">
        <div className="flex items-center justify-center text-5xl font-extrabold leading-tight">
          <div className="text-center pl-4">
            <TextGenerateEffect words={words} className="text-5xl font-extrabold leading-tight" highlights={['All','Institute']} />
          </div>
        </div>
      </div>
      <div className="flex w-full md:w-3/5 items-center justify-center text-muted-foreground">
        <div className="w-3/4 space-y-6 text-center md:text-left text-sm md:text-base">
          {paragraphs.map((paragraph, index) => (
            <div key={index}>{paragraph}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
