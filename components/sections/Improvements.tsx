import { BadgePercent, TrendingUp, AlarmClock, BadgeDollarSign, CircleAlert, DatabaseZap } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Improvements() {
  const heading = "Digitalize your institute center's operations and eliminate the hassle of manual record-keeping.";
  const subheading = "Experience measurable improvements across your coaching center";

  const stats = [
    { icon: BadgePercent, name: 'Efficiency', percentage: '55%', label: 'Increase Efficiency', description: 'Streamline operations and focus more on teaching' },
    { icon: AlarmClock, name: 'Time', percentage: '100%', label: 'Reduce Admin Time', description: 'Cut administrative workload in half' },
    { icon: BadgeDollarSign, name: 'Payments', percentage: '20%', label: 'Improve Payment Tracking', description: 'Automated reminders and payment processing' },
    { icon: CircleAlert, name: 'Errors', percentage: '39 Hrs', label: 'Reduce Admin Errors', description: 'Minimize mistakes with digital record keeping' },
    { icon: DatabaseZap, name: 'Data', percentage: '112%', label: 'Faster Data Entry', description: 'Quick access to student and course information' }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-3">
            Measurable Improvements
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {heading}
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="relative overflow-hidden rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md"
            >
              <div className="flex items-center text-primary mb-2">
                <stat.icon size={24} className="mr-2" />
                <h3 className="text-lg font-semibold">{stat.name}</h3>
              </div>
              
              <div className="flex items-center text-2xl font-bold text-foreground mb-1">
                {stat.percentage}
                <TrendingUp size={20} className="ml-2 text-green-500" />
              </div>
              
              <p className="text-sm font-medium text-foreground mb-2">{stat.label}</p>
              <p className="text-xs text-muted-foreground">{stat.description}</p>
              
              <div className="absolute -bottom-1 -right-1 h-16 w-16 opacity-10">
                <stat.icon size={64} />
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            Join hundreds of coaching institutes already saving time and increasing revenue
          </p>
        </div>
      </div>
    </section>
  );
}
