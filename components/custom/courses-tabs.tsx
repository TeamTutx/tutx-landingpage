import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { LibraryBig,  Users, BarChart2 } from 'lucide-react';
import ParallexCard from './parallex-card';


export default function SubjectTabs() {
  const images = ['/Courses.png', '/Batches.png', '/StudentInsights.png'];
  return (
    <Tabs defaultValue="/Courses.png" className="flex h-full w-full flex-col items-center">
      <TabsList className="w-full md:w-3/4 space-x-4 md:space-x-8 mb-4">
        <TabsTrigger value="/Courses.png" className="flex flex-col space-y-1 pb-4">
          <LibraryBig />
          <span className="text-xs">Courses</span>
        </TabsTrigger>
       
        <TabsTrigger value="/Batches.png" className="flex flex-col space-y-1 pb-4">
          <Users />
          <span className="text-xs">Batches</span>
        </TabsTrigger>
        <TabsTrigger value="/StudentInsights.png" className="flex flex-col space-y-1 pb-4">
          <BarChart2 />
          <span className="text-xs">Student Insights</span>
        </TabsTrigger>
      </TabsList>

        {images.map((image) => {
          return (
            <TabsContent value={image} key={image} className='flex justify-center'>
              <div className="animate-appear w-full md:w-[95%] lg:w-[90%] xl:w-[95%]">
                <ParallexCard src={image} />
              </div>
            </TabsContent>
          );
        })}
    </Tabs>
  );
}
