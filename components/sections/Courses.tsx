import { BookCopy, User, Users, MoveRight } from 'lucide-react';
import SubjectTabs from '../custom/subject-tabs';

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
    <div id="courses" className="mx-auto mt-32 flex min-h-[525px] max-w-7xl px-10">
      <div className="w-1/2 pr-16">
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
          See how it works
          <MoveRight
            className="ml-3 inline transform transition-transform duration-300 ease-in-out group-hover:translate-x-2"
            strokeWidth={1}
          />
        </div>
      </div>
      <div className="w-1/2">
        <SubjectTabs></SubjectTabs>
      </div>
    </div>
  );
}
