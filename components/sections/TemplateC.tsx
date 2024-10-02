'use client';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';

const words = `Lorem ipsum odor amet, consectetuer`;

export default function TemplateC() {
  return (
    <div className="flex min-h-[400px] bg-primary/5">
      <div className="flex w-2/5">
        <div className="flex items-center justify-center text-5xl font-extrabold leading-tight">
          <div className="w-3/4 text-center">
            <TextGenerateEffect words={words} className="text-5xl font-extrabold leading-tight" highlights={['ipsum', 'consectetuer']} />
          </div>
        </div>
      </div>
      <div className="flex w-3/5 items-center justify-center text-muted-foreground">
        <div className="w-3/4 space-y-6">
          <div>
            Lorem ipsum odor amet, consectetuer adipiscing elit. Hac integer in condimentum nisl, sociosqu vivamus nullam ullamcorper.
            Quisque netus elementum euismod ullamcorper dictum.
          </div>
          <div>
            orta aptent porttitor nibh efficitur morbi volutpat nunc. Erat vulputate tempor nibh in convallis dui tempor dictum. Lacus
            pharetra lacinia velit eleifend litora. Pellentesque velit mauris laoreet placerat fermentum quam habitant nibh.
          </div>
          <div>Enim arcu torquent turpis maximus nulla. Neque enim maximus lacinia nibh, penatibus erat erat faucibus massa.</div>
        </div>
      </div>
    </div>
  );
}
