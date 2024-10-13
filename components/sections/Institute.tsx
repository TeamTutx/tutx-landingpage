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
    <div id="institute" className="mx-auto mt-32 flex min-h-[525px] max-w-7xl px-10">
      <div className="w-1/2">
        <StepTabs />
      </div>
      <div className="w-1/2 px-16">
        <div className="text-4xl font-extrabold leading-tight">{heading}</div>
        <div className="mt-8 text-sm text-muted-foreground">{subheading}</div>

        {/* Map over points to generate the content */}
        <div className="my-8 space-y-4 text-sm">
          {points.map((point, index) => {
            const IconComponent = point.icon;
            return (
              <div key={index} className="flex items-center">
                <IconComponent className="mr-3 inline text-primary" size={20} />
                {point.text}
              </div>
            );
          })}
        </div>

        <div className="group flex cursor-pointer items-center text-primary">
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
