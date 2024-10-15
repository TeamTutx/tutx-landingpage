import { FlaskConical, Pipette, TestTube, Undo } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Template() {
  return (
    <div className="w-full bg-primary/90 px-28 pb-8 pt-16">
      <div className="text-4xl font-extrabold leading-tight text-background/80">Build it better with Tutx</div>

      <div className="mt-16 grid h-72 grid-cols-3 gap-6">
        <div className="relative rounded-xl bg-primary/60 text-background/80">
          <div className="absolute inset-0 flex flex-col items-center space-y-3 rounded-xl bg-white/15 dark:bg-black/15">
            <FlaskConical size={36} className="mt-12" />
            <div className="text-center font-semibold">Getting started is a piece of cake</div>
            <div className="px-6 text-center">
              Lorem ipsum odor amet, consectetuer adipiscing elit. Ex sollicitudin nullam sed vivamus at convallis malesuada convallis a.
              Tortor inceptos neque quis ex.
            </div>
          </div>
        </div>
        <div className="relative rounded-xl bg-primary/60 text-background/80">
          <div className="absolute inset-0 flex flex-col items-center space-y-3 rounded-xl bg-white/15 dark:bg-black/15">
            <Pipette size={36} className="mt-12" />
            <div className="text-center font-semibold">Personalization, at scale</div>
            <div className="px-6 text-center">
              Lorem Ipsum consequat eu euismod curabitur cubilia, ullamcorper lorem suscipit sapien. Eget pretium fermentum viverra ligula
              odio purus. Justo class netus varius finibus id.
            </div>
          </div>
        </div>
        <div className="relative rounded-xl bg-primary/60 text-background/80">
          <div className="absolute inset-0 flex flex-col items-center space-y-3 rounded-xl bg-white/15 dark:bg-black/15">
            <TestTube size={36} className="mt-12" />
            <div className="text-center font-semibold">Structured for your success</div>
            <div className="px-6 text-center">
              Lorem Ipsum Iaculis tempus convallis consectetur vitae efficitur cubilia lorem. Penatibus aliquam condimentum lectus vel
              dignissim, vulputate diam vestibulum nec.
            </div>
          </div>
        </div>
      </div>

      <div className="relative mt-10 flex justify-end">
        <Undo size={64} className="mr-4 rotate-180 text-background/80" />
        <Button className="custom-button-transition bg-white font-bold text-primary hover:bg-white dark:bg-black">
          See how easy it is
        </Button>
      </div>
    </div>
  );
}
