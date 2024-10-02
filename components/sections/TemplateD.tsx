import { Megaphone, ChartColumnStacked, UserPlus, MoveRight } from 'lucide-react';
import ParallexCard from '../custom/parallex-card';

export default function TemplateD() {
  return (
    <div className="mx-auto mt-32 flex min-h-[525px] max-w-7xl px-10">
      <div className="w-1/2 pr-16">
        <div className="scale-125">
          <ParallexCard type="grid" src="/web.png" />
        </div>
      </div>
      <div className="w-1/2 px-16">
        <div className="text-4xl font-extrabold leading-tight">Lorem ipsum odor amet, consectetuer adipiscing.</div>
        <div className="mt-8 text-sm text-muted-foreground">
          Lorem ipsum odor amet, consectetuer adipiscing elit. Hac integer in condimentum nisl, sociosqu vivamus nullam ullamcorper. Quisque
          netus elementum euismod ullamcorper dictum. Porta aptent porttitor nibh efficitur morbi volutpat nunc.
        </div>

        <div className="my-8 space-y-4 text-sm uppercase">
          <div className="flex items-center">
            <Megaphone className="mr-3 inline text-primary" size={20} />
            LOREM IPSUM ODOR
          </div>
          <div className="flex items-center">
            <ChartColumnStacked className="mr-3 inline text-primary" size={20} />
            LOREM IPSUM dictum
          </div>
          <div className="flex items-center">
            <UserPlus className="mr-3 inline text-primary" size={20} />
            LOREM IPSUM
          </div>
        </div>

        <div className="group flex cursor-pointer items-center text-primary">
          Improve Feature Adoption
          <MoveRight
            className="ml-3 inline transform transition-transform duration-300 ease-in-out group-hover:translate-x-2"
            strokeWidth={1}
          />
        </div>
      </div>
    </div>
  );
}
