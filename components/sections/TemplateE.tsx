import { MonitorCheck, MessageCircle, Lightbulb, MoveRight } from 'lucide-react';
import ParallexCard from '../custom/parallex-card';

export default function TemplateE() {
  return (
    <div className="mx-auto mt-32 flex min-h-[525px] max-w-7xl px-10">
      <div className="w-1/2 pr-16">
        <div className="text-4xl font-extrabold leading-tight">Lorem ipsum odor amet, consectetuer</div>
        <div className="mt-8 text-sm text-muted-foreground">
          Lorem ipsum odor amet, consectetuer adipiscing elit. Hac integer in condimentum nisl, sociosqu vivamus nullam ullamcorper. Quisque
        </div>

        <div className="my-8 space-y-4 text-sm uppercase">
          <div className="flex items-center">
            <MonitorCheck className="mr-3 inline text-primary" size={20} />
            LOREM IPSUM
          </div>
          <div className="flex items-center">
            <MessageCircle className="mr-3 inline text-primary" size={20} />
            LOREM IPSUM euismod
          </div>
          <div className="flex items-center">
            <Lightbulb className="mr-3 inline text-primary" size={20} />
            LOREM IPSUM ODOR
          </div>
        </div>

        <div className="group flex cursor-pointer items-center text-primary">
          Collect Feedback
          <MoveRight
            className="ml-3 inline transform transition-transform duration-300 ease-in-out group-hover:translate-x-2"
            strokeWidth={1}
          />
        </div>
      </div>
      <div className="w-1/2 px-16">
        <div className="scale-125">
          <ParallexCard type="dot" src="/web.png" />
        </div>
      </div>
    </div>
  );
}
