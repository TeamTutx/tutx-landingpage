import { Users, BookOpen, Receipt, CalendarCheck, MessageSquare, Filter, BarChart2, Scale } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Features() {
  const heading = "Tutx provides a comprehensive suite of tools designed specifically for coaching institutes of all sizes.";
  const subheading = "Classes, Courses, Payments? \nWe Handle the Tech, You Do the Teaching! 🎯";

  const features = [
    { 
      icon: Users, 
      name: 'Scale Without Limits', 
      description: "Manage your coaching institute with ease, whether it's 50 or 50,000+ students."
    },
    { 
      icon: BookOpen, 
      name: 'Course Management', 
      description: 'Create courses, subjects, and assign students to batches with just a few clicks.' 
    },
    { 
      icon: Receipt, 
      name: 'Fee Management', 
      description: 'Track payments, manage fees, and get a clear overview of your financial status.' 
    },
    { 
      icon: CalendarCheck, 
      name: 'Attendance Tracking', 
      description: 'Mark and monitor student attendance with our intuitive interface.' 
    },
    { 
      icon: MessageSquare, 
      name: 'Automated Reminders', 
      description: 'Send payment reminders to students via WhatsApp or email automatically.' 
    },
    { 
      icon: Filter, 
      name: 'Advanced Filtering', 
      description: "Find exactly what you're looking for with our powerful filtering system."
    },
    { 
      icon: BarChart2, 
      name: 'Deep Analytics', 
      description: 'Gain insights into your business performance with comprehensive charts and reports.' 
    },
    { 
      icon: Scale, 
      name: 'Pay As You Scale', 
      description: 'Our flexible pricing ensures you only pay for what you use as your institute grows.' 
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-3">
            {subheading}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {heading}
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="relative overflow-hidden rounded-lg border bg-gradient-to-br from-background to-primary/5 p-6 shadow-sm transition-all hover:shadow-md hover:border-primary/50 hover:from-background hover:to-primary/10"
            >
              <div className="flex items-center text-primary mb-4">
                <div className="p-2 rounded-full bg-primary/10">
                  <feature.icon size={24} />
                </div>
              </div>
              
              <h3 className="text-lg font-semibold text-foreground mb-2">{feature.name}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
              
              <div className="absolute -bottom-1 -right-1 h-16 w-16 opacity-5">
                <feature.icon size={64} />
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            Join hundreds of coaching institutes already transforming their operations with Tutx
          </p>
        </div>
      </div>
    </section>
  );
}