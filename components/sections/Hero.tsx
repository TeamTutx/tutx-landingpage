import { BadgeCheck } from 'lucide-react';
import StepLoader from '../custom/loader';
import ViewTabs from '../custom/view-tabs';

export default function Hero() {
  return (
    <div className="mx-auto mt-20 flex min-h-[525px] max-w-7xl px-10">
      <div className="w-2/5">
        <div className="text-[50px] font-extrabold leading-tight">Lorem ipsum odor amet, consecte</div>
        <div className="mt-8 pr-20 text-sm text-muted-foreground">
          Lorem ipsum odor amet, consectetuer adipiscing elit. Non facilisis porttitor.
        </div>

        <div className="my-8 space-y-2 text-sm">
          <div className="flex items-center">
            <BadgeCheck className="mr-3 inline text-primary" strokeWidth={1.2} size={20} />
            LOREM IPSUM ODOR AMET, CONSECTETUER ELIT
          </div>
          <div className="flex items-center">
            <BadgeCheck className="mr-3 inline text-primary" strokeWidth={1.2} size={20} />
            LOREM IPSUM ODOR AMET, CONSECTETUER
          </div>
          <div className="flex items-center">
            <BadgeCheck className="mr-3 inline text-primary" strokeWidth={1.2} size={20} />
            LOREM IPSUM ODOR AMET, CONSECTETUER ADIPISCING
          </div>
        </div>

        <div className="mt-12 flex items-center space-x-6">
          <StepLoader />
        </div>
      </div>
      <div className="flex w-3/5 items-center justify-center">
        <ViewTabs />
      </div>
    </div>
  );
}
