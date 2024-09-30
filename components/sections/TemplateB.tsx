import { FlaskConical, Pipette, TestTube, Undo } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function TemplateB() {
  return (
    <div className="w-full bg-primary/90 px-28 pb-8 pt-16">
      <div className="text-4xl font-extrabold leading-tight text-white/80 dark:text-black/80">Build it better with Appcues</div>

      <div className="mt-16 grid h-72 grid-cols-3 gap-6">
        <div className="relative rounded-xl bg-primary/60 text-white/80 dark:text-black/80">
          <div className="absolute inset-0 flex flex-col items-center space-y-3 rounded-xl bg-white/15 dark:bg-black/15">
            <FlaskConical size={36} className="mt-12" />
            <div className="text-center font-semibold">Getting started is a piece of cake</div>
            <div className="px-6 text-center">
              Quickly build and iterate on in-app experiences that impact user behavior — no setup friction, no engineering support, no
              hassle.
            </div>
          </div>
        </div>
        <div className="relative rounded-xl bg-primary/60 text-white/80 dark:text-black/80">
          <div className="absolute inset-0 flex flex-col items-center space-y-3 rounded-xl bg-white/15 dark:bg-black/15">
            <Pipette size={36} className="mt-12" />
            <div className="text-center font-semibold">Personalization, at scale</div>
            <div className="px-6 text-center">
              Target experiences to the right users, at the right time, with detailed reporting to measure impact on key segments, like
              trialers or new users.
            </div>
          </div>
        </div>
        <div className="relative rounded-xl bg-primary/60 text-white/80 dark:text-black/80">
          <div className="absolute inset-0 flex flex-col items-center space-y-3 rounded-xl bg-white/15 dark:bg-black/15">
            <TestTube size={36} className="mt-12" />
            <div className="text-center font-semibold">Structured for your success</div>
            <div className="px-6 text-center">
              A trusted, reliable partner with the expertise, resources, and track record to help you confidently reach your goals.
            </div>
          </div>
        </div>
      </div>

      <div className="relative mt-10 flex justify-end">
        <Undo size={64} className="mr-4 rotate-180 text-white/80 dark:text-black/80" />
        <Button className="custom-button-transition bg-white font-bold text-primary hover:bg-white dark:bg-black">
          See how easy it is
        </Button>
      </div>
    </div>
  );
}
