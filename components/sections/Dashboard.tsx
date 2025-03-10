import { BellRing, ChartColumn, MoveRight } from 'lucide-react';
import DashboardTabs from '../custom/dashboard-tabs';
import Link from 'next/link';

export default function Dashboard() {
  const heading = 'Financial Reporting for Informed Decisions';
  const subheading = "Gain insights into your institute's financial health with detailed reports and analyses that keep you on track.";

  // Points and their corresponding icon components
  const points = [
    { icon: BellRing, text: 'Send timely fee collection reminders to students and parents.' },
    { icon: ChartColumn, text: 'Monitor financial status and cash flow with real-time tracking.' }
  ];

  return (
    <div id="dashboard" className="mx-auto mt-20 lg:mt-28 flex min-h-[450px] max-w-7xl flex-col lg:max-h-[450px] lg:flex-row">
      <div className="flex w-full flex-col items-center px-4 py-4 lg:w-5/12 lg:items-start lg:pl-16 lg:pr-0">
        <div className="text-center text-3xl font-extrabold leading-tight md:text-4xl lg:text-left">{heading}</div>
        <div className="mt-4 text-center text-sm text-muted-foreground lg:text-left">{subheading}</div>

        {/* Map over points to generate the content */}
        <div className="my-8 space-y-6 text-sm">
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

        <Link href={'#demo'} className="group mb-12 mt-4 flex cursor-pointer items-center text-primary">
          See in Action
          <MoveRight
            className="ml-3 inline transform transition-transform duration-300 ease-in-out group-hover:translate-x-2"
            strokeWidth={1}
          />
        </Link>
      </div>
      <div className="w-full lg:w-7/12">
        <DashboardTabs />
      </div>
    </div>
  );
}
