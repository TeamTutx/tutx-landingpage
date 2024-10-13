import { BellRing, ChartColumn, MoveRight } from 'lucide-react';
import DashboardTabs from '../custom/dashboard-tabs';

export default function TemplateE() {
  const heading = 'Financial Reporting for Informed Decisions';
  const subheading = "Gain insights into your institute's financial health with detailed reports and analyses that keep you on track.";

  // Points and their corresponding icon components
  const points = [
    { icon: BellRing, text: 'Send timely fee collection reminders to students and parents.' },
    { icon: ChartColumn, text: 'Monitor financial status and cash flow with real-time tracking.' }
  ];

  return (
    <div className="mx-auto mt-32 flex min-h-[525px] max-w-7xl px-10">
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
          See in Action
          <MoveRight
            className="ml-3 inline transform transition-transform duration-300 ease-in-out group-hover:translate-x-2"
            strokeWidth={1}
          />
        </div>
      </div>
      <div className="w-1/2">
        <DashboardTabs></DashboardTabs>
      </div>
    </div>
  );
}
