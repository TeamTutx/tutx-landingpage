import { BadgePercent, TrendingUp, AlarmClock, BadgeDollarSign, CircleAlert, DatabaseZap } from 'lucide-react';

export default function TemplateA() {
  const heading = "Digitalize your tuition center's operations and eliminate the hassle of manual record-keeping.";

  const stats = [
    { icon: BadgePercent, name: 'Efficiency', percentage: '55%', label: 'Increase Efficiency' },
    { icon: AlarmClock, name: 'Time', percentage: '100%', label: 'Reduce Admin Time' },
    { icon: BadgeDollarSign, name: 'Payments', percentage: '20%', label: 'Improve Payment Tracking' },
    { icon: CircleAlert, name: 'Errors', percentage: '39 Hrs', label: 'Reduce Admin Errors' },
    { icon: DatabaseZap, name: 'Data', percentage: '112%', label: 'Faster Data Entry' }
  ];

  return (
    <div className="mx-auto my-16 max-w-7xl px-10">
      <div className="text-[11px] font-medium uppercase tracking-wider">{heading}</div>
      <div className="my-8 flex space-x-28">
        {stats.map((stat, index) => (
          <div key={index}>
            <div className="flex items-center text-lg">
              <stat.icon size={16} className="mr-2" />
              {stat.name}
            </div>
            <div className="flex items-center text-sm font-semibold">
              {stat.percentage}
              <TrendingUp size={16} className="ml-1 text-primary" />
            </div>
            <div className="text-sm text-muted-foreground">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
