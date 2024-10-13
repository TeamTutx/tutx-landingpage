import { BadgeCheck } from 'lucide-react';
import StepLoader from '@/components/custom/loader';
import ViewTabs from '@/components/custom/view-tabs';

export default function Hero() {
  const heading = 'Manage Institute with Ease';
  const subheading =
    'Take control of your tuition records, automate fee tracking, and simplify administration so you can focus on teaching.';
  const features: string[] = [
    'Create and manage classes and subjects with ease.',
    'Track student payments and outstanding fees',
    'Get clear insights into your finances.'
  ];
  return (
    <div className="mx-auto mt-20 flex min-h-[525px] max-w-7xl px-10">
      <div className="w-2/5">
        <div className="text-[50px] font-extrabold leading-tight">{heading}</div>
        <div className="mt-8 pr-20 text-sm text-muted-foreground">{subheading}</div>

        <div className="my-8 space-y-2 text-sm">
          {features.map((bullet) => (
            <div className="flex items-center" key={bullet}>
              <BadgeCheck className="mr-3 inline text-primary" strokeWidth={1.2} size={20} />
              {bullet}
            </div>
          ))}
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
