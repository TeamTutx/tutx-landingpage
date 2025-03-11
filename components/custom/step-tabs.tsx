import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BookOpen, Users, Calendar, BarChart } from 'lucide-react';
import ParallexCard from '../custom/parallex-card';

export default function StepTabs() {
  const steps = [
    { 
      id: "create-course", 
      icon: BookOpen, 
      label: "Create Course", 
      image: "/create-course.png",
      description: "Create courses and add subjects with detailed descriptions"
    },
    { 
      id: "enroll-students", 
      icon: Users, 
      label: "Enroll Students", 
      image: "/create-enrollment.png",
      description: "Easily enroll students to courses and track their progress"
    },
    { 
      id: "create-batch", 
      icon: Calendar, 
      label: "Create Batch", 
      image: "/create-batch.png",
      description: "Create batches, assign subjects, and schedule classes"
    },
    { 
      id: "assign-students", 
      icon: BarChart, 
      label: "Assign Students", 
      image: "/assign-students.png",
      description: "Assign Studnent to Batches"
    }
  ];

  return (
    <Tabs defaultValue="create-course" className="flex h-full w-full flex-col items-center">
      <TabsList className="grid w-full grid-cols-4 mb-6">
        {steps.map((step) => {
          const IconComponent = step.icon;
          return (
            <TabsTrigger key={step.id} value={step.id} className="flex flex-col space-y-1 py-2">
              <IconComponent className="h-5 w-5" />
              <span className="text-xs">{step.label}</span>
            </TabsTrigger>
          );
        })}
      </TabsList>

      {steps.map((step) => (
        <TabsContent key={step.id} value={step.id} className="flex w-full flex-col items-center">
          <div className="animate-appear w-full md:w-[95%] lg:w-[90%] xl:w-[95%]">
            <ParallexCard src={step.image} />
            <p className="text-center text-sm text-muted-foreground mt-2">{step.description}</p>
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
}
