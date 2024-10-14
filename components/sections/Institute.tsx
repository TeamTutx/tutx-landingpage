import { MoveRight, Building, BookMarked, TrendingUp, GraduationCap } from 'lucide-react';
import StepTabs from '../custom/step-tabs';

export default function Institute() {
  const heading = 'Build and Customize Your Institute Profile';
  const subheading = "Easily create and customize your institute's profile. Manage courses, subjects, and batches all in one place.";

  // Points and their corresponding icon components
  const points = [
    { icon: Building, text: 'Add institute details, name, address, contact information.' },
    { icon: BookMarked, text: 'Define subjects and courses with descriptions.' },
    { icon: GraduationCap, text: 'Organize and manage batches for your courses.' },
    { icon: TrendingUp, text: 'Update information as your institute grows.' }
  ];

  return (
    <div id="institute" className="mx-auto mt-32 flex flex-col-reverse lg:flex-row max-w-7xl min-h-[460px] lg:max-h-[460px]">
      <div className="w-full lg:w-7/12">
        <StepTabs />
      </div>
      <div className="flex w-full flex-col items-center lg:items-start lg:w-5/12 p-4 ">
        <div className="text-3xl md:text-4xl font-extrabold leading-tight text-center lg:text-left">{heading}</div>
        <div className="mt-4 text-sm text-muted-foreground text-center lg:text-left">{subheading}</div>

        <div className="my-8 space-y-4 text-sm">
          {points.map((point, index) => {
            const IconComponent = point.icon;
            return (
              <div key={index} className="flex items-center">
                <IconComponent className="mr-3 h-[20px] max-h-[20px] min-h-[20px] w-[20px] min-w-[20px] inline text-primary" size={20} />
                {point.text}
              </div>
            );
          })}
        </div>

        <div className="group flex cursor-pointer items-center text-primary mt-4 mb-12">
          Get Started
          <MoveRight
            className="ml-3 inline transform transition-transform duration-300 ease-in-out group-hover:translate-x-2"
            strokeWidth={1}
          />
        </div>
      </div>
    </div>
  );
}
