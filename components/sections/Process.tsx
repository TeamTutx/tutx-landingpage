import { MoveRight, BookOpen, Users, Calendar,UserPlus } from 'lucide-react';
import StepTabs from '../custom/step-tabs';
import Link from 'next/link';

export default function Institute() {
  const heading = 'Launch Your Course in Just 4 Steps';
  const subheading = "From setup to your first class - get your institute up and running in minutes, not days. Perfect for any size, from 50 to 50,000+ students.";

  // Points and their corresponding icon components
  const points = [
    { icon: BookOpen, text: 'Create courses and add subjects with detailed descriptions.' },
    { icon: Users, text: 'Easily enroll students to courses and track their payments.' },
    { icon: Calendar, text: 'Create batches, assign subjects to batch.' },
    { icon: UserPlus, text: 'Assign Students to batches and start 🚀' }
  ];

  return (
    <div id="institute" className="mx-auto mt-32 flex min-h-[460px] max-w-7xl flex-col-reverse lg:max-h-[460px] lg:flex-row mb-14">
      <div className="w-full lg:w-7/12">
        <StepTabs />
      </div>
      <div className="flex w-full flex-col items-center p-4 lg:w-5/12 lg:items-start">
        <div className="ml-4 text-center text-4xl font-extrabold leading-tight md:text-4xl lg:text-left">{heading}</div>
        <div className=" ml-4 mt-4 text-center text-sm text-muted-foreground lg:text-left">{subheading}</div>

        <div className="ml-4 my-8 space-y-6 text-sm">
          {points.map((point, index) => {
            const IconComponent = point.icon;
            return (
              <div key={index} className="flex items-center rounded-lg hover:bg-slate-50 transition-colors duration-200 group">
                <div className="mr-3 p-2 rounded-full bg-primary/10 text-primary">
                  <IconComponent  size={20} />
                </div>
                <span className="font-medium group-hover:text-primary transition-colors duration-200">
                  {point.text}
                </span>
              </div>
            );
          })}
        </div>

        <Link href={'#demo'} className="group mb-12 m-4 flex cursor-pointer items-center text-primary rounded-md p-4">
          Get Started
          <MoveRight
            className="ml-3 inline transform transition-transform duration-300 ease-in-out group-hover:translate-x-2"
            strokeWidth={1}
          />
        </Link>
      </div>
    </div>
  );
}
