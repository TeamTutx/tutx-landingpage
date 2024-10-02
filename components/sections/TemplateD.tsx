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
        <div className="text-4xl font-extrabold leading-tight">Drive growth through sticky, engaged users</div>
        <div className="mt-8 text-sm text-muted-foreground">
          Use slideouts, tooltips, and hotspots to drive awareness and adoption of new features or nudge users to discover features they
          have yet to try. And you can improve adoption and see your impact directly in Appcues—again, no engineering needed!
        </div>

        <div className="my-8 space-y-4 text-sm uppercase">
          <div className="flex items-center">
            <Megaphone className="mr-3 inline text-primary" size={20} />
            Announce features
          </div>
          <div className="flex items-center">
            <ChartColumnStacked className="mr-3 inline text-primary" size={20} />
            Increase usage
          </div>
          <div className="flex items-center">
            <UserPlus className="mr-3 inline text-primary" size={20} />
            Improve retention
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
