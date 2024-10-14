import { BookCopy, User, Users, MoveRight } from 'lucide-react';
import SubjectTabs from '../custom/courses-tabs';


export default function Courses() {
  const heading = 'Intuitive and Simple Class Management';
  const subheading =
    'Easily manage your entire curriculum from one centralized dashboard. Make quick updates, add new entries, and stay on top of your student and teacher assignments.';

  const points = [
    { icon: BookCopy, text: 'Easily edit courses and subjects in real-time, without delays.' },
    { icon: User, text: 'Quickly enroll and manage student records for each class.' },
    { icon: Users, text: 'Assign teachers and update their details with ease.' }
  ];

  return (
    <div id="institute" className="mx-auto mt-28 flex min-h-[500px] max-w-7xl flex-col lg:max-h-[500px] lg:flex-row">
      <div className="flex w-full flex-col items-center py-4 px-4 lg:pr-0 lg:pl-16 lg:w-5/12 lg:items-start">
        <div className="text-center text-3xl font-extrabold leading-tight md:text-4xl lg:text-left">{heading}</div>
        <div className="mt-4 text-center text-sm text-muted-foreground lg:text-left">{subheading}</div>

        {/* Map over points to generate the content */}
        <div className="my-8 space-y-4 text-sm">
          {points.map((point, index) => {
            const IconComponent = point.icon;
            return (
              <div key={index} className="flex items-center">
                <IconComponent className="mr-3 inline h-[20px] max-h-[20px] min-h-[20px] w-[20px] min-w-[20px] text-primary" size={20} />
                {point.text}
              </div>
            );
          })}
        </div>

        <div className="group mb-12 mt-4 flex cursor-pointer items-center text-primary">
          See how it works
          <MoveRight
            className="ml-3 inline transform transition-transform duration-300 ease-in-out group-hover:translate-x-2"
            strokeWidth={1}
          />
        </div>
      </div>
      <div className="w-full lg:w-7/12">
        <SubjectTabs />
      </div>
    </div>
  );
}
