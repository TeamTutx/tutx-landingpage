import { BookCopy,  MoveRight, Filter,  Bell } from 'lucide-react';
import SubjectTabs from '../custom/courses-tabs';
import Link from 'next/link';

export default function Courses() {
  const heading = 'Powerful Insights & Advanced Class Management';
  const subheading =
    'Gain deep insights into student performance while easily managing your curriculum from one centralized dashboard. Use advanced filters to analyze data, track progress, and communicate with parents.';

  const points = [
    { icon: BookCopy, text: 'Easily edit courses and subjects in real-time, without delays.' },
    { icon: Filter, text: 'Advanced filtering to get comprehensive insights on everything.' },
    { icon: Bell, text: 'Send personalized notifications and updates directly to parents.' },
  ];

  return (
    <div id="courses" className="mx-auto mt-20 lg:mt-28 flex min-h-[450px] max-w-7xl flex-col lg:max-h-[550px] lg:flex-row">
      <div className="flex w-full flex-col items-center px-4 py-4 lg:w-5/12 lg:items-start lg:pl-16 lg:pr-0">
        <div className="text-center text-3xl font-extrabold leading-tight md:text-4xl lg:text-left">{heading}</div>
        <div className="mt-4 text-center text-sm text-muted-foreground lg:text-left">{subheading}</div>

        {/* Map over points to generate the content */}
        <div className="my-8 space-y-6 text-sm">
          {points.map((point, index) => {
            const IconComponent = point.icon;
            return (
              <div key={index} className="flex items-center rounded-lg hover:bg-slate-50 transition-colors duration-200 group">
                <div className="mr-3 p-2 rounded-full bg-primary/10 text-primary">
                  <IconComponent size={20} />
                </div>
                <span className="font-medium group-hover:text-primary transition-colors duration-200">
                  {point.text}
                </span>
              </div>
            );
          })}
        </div>

        <Link href={'#demo'} className="group mb-12 mt-4 flex cursor-pointer items-center text-primary rounded-md p-4">
          See how it works
          <MoveRight
            className="ml-3 inline transform transition-transform duration-300 ease-in-out group-hover:translate-x-2"
            strokeWidth={1}
          />
        </Link>
      </div>
      <div className="w-full lg:w-7/12">
        <SubjectTabs />
      </div>
    </div>
  );
}
