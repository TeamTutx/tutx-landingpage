'use client';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';

const words = `The Ultimate Institute Management Solution`;

export default function TemplateC() {
  const paragraphs = [
    `Our comprehensive platform simplifies the complexities of managing tuition centers, allowing you to create classes, assign teachers, and manage student enrollment effortlessly. `,
    `With real-time payment tracking and automated fee management, you can easily oversee outstanding fees and generate insightful reports, all from a user-friendly interface.`,
    `By reducing manual errors and streamlining operations, our innovative software saves you valuable time and helps you focus on delivering quality education.`
  ];

  return (
    <div className="flex min-h-[400px] bg-primary/5">
      <div className="flex w-2/5">
        <div className="flex items-center justify-center text-5xl font-extrabold leading-tight">
          <div className="w-3/4 text-center">
            <TextGenerateEffect words={words} className="text-5xl font-extrabold leading-tight" highlights={['Ultimate', 'Solution']} />
          </div>
        </div>
      </div>
      <div className="flex w-3/5 items-center justify-center text-muted-foreground">
        <div className="w-3/4 space-y-6">
          {paragraphs.map((paragraph, index) => (
            <div key={index}>{paragraph}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
