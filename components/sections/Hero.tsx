import { Button } from '@/components/ui/button';
import { BadgeCheck, MoveRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="mx-auto mt-20 flex min-h-[525px] max-w-7xl px-10">
      <div className="w-2/5">
        <div className="text-[50px] font-extrabold leading-tight">Product adoption made easy</div>
        <div className="mt-8 text-muted-foreground">Design, deploy, and test captivating onboarding experiences in minutes, not weeks.</div>

        <div className="my-8 space-y-2 text-sm">
          <div className="flex items-center">
            <BadgeCheck className="mr-3 inline text-primary" strokeWidth={1.2} size={20} />
            BOOST ACTIVATION WITH TAILORED ONBOARDING
          </div>
          <div className="flex items-center">
            <BadgeCheck className="mr-3 inline text-primary" strokeWidth={1.2} size={20} />
            IMPROVE CONVERSION BY REDUCING TIME TO VALUE
          </div>
          <div className="flex items-center">
            <BadgeCheck className="mr-3 inline text-primary" strokeWidth={1.2} size={20} />
            CREATE STICKINESS WITH FEATURE ADOPTION
          </div>
        </div>

        <div className="mt-12 flex items-center space-x-6">
          <Button className="custom-button-transition dark:text-black">Start Building for Free</Button>
          <div className="group flex cursor-pointer items-center text-primary">
            Get a demo
            <MoveRight
              className="ml-3 inline transform transition-transform duration-300 ease-in-out group-hover:translate-x-2"
              strokeWidth={1}
            />
          </div>
        </div>
      </div>
      <div className="w-3/5 bg-primary/15"></div>
    </div>
  );
}
