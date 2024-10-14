import { BadgeCheck } from 'lucide-react';
import StepLoader from '@/components/custom/loader';
import ViewTabs from '@/components/custom/view-tabs';

export default function Hero() {
  const heading = 'Manage Institute with Ease';
  const subheading =
    'Take control of your institute records, automate fee tracking, and simplify administration so you can focus on teaching.';
  const features: string[] = [
    'Create and manage classes and subjects with ease.',
    'Track student payments and outstanding fees',
    'Get clear insights into your finances.'
  ];
  return (
    <div className="mx-auto mt-8 md:mt-24 max-w-7xl px-4 sm:px-10 lg:flex lg:h-[500px]">
      <div className="flex w-full flex-col items-center lg:items-start pt-4 lg:w-2/5">
        <div className="text-center text-[50px] font-extrabold leading-tight lg:text-left">{heading}</div>
        <div className="mt-8 text-center text-sm text-muted-foreground lg:text-left">{subheading}</div>
        <div className="my-8 space-y-2 text-sm">
          {features.map((bullet) => (
            <div className="flex items-center" key={bullet}>
              <BadgeCheck
                className="mr-3 inline h-[20px] max-h-[20px] min-h-[20px] w-[20px] min-w-[20px] text-primary"
                strokeWidth={1.2}
              />
              {bullet}
            </div>
          ))}
        </div>
        <div className="flex mb-12 items-center space-x-6">
          <StepLoader />
        </div>
      </div>
      <div className="flex w-full items-center justify-center lg:w-3/5">
        <ViewTabs />
      </div>
    </div>
  );
}
