import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Building, Book } from 'lucide-react';
import ParallexCard from '../custom/parallex-card';

export default function SubjectTabs() {
  const images = ['/course.png', '/subject.png'];
  return (
    <Tabs defaultValue="/course.png" className="flex h-full w-full flex-col items-center justify-center">
      <TabsList className="w-1/4 space-x-12">
        <TabsTrigger value="/course.png" className="flex flex-col space-y-1 pb-4">
          <Building />
          <span className="text-xs">Courses</span>
        </TabsTrigger>
        <TabsTrigger value="/subject.png" className="flex flex-col space-y-1 pb-4">
          <Book />
          <span className="text-xs">Subjects</span>
        </TabsTrigger>
      </TabsList>

      <div className="p-1">
        {images.map((image) => {
          return (
            <TabsContent value={image} key={image}>
              <div className="w-full">
                <ParallexCard src={image} />
              </div>
            </TabsContent>
          );
        })}
      </div>
    </Tabs>
  );
}
