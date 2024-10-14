import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { LibraryBig, Book } from 'lucide-react';
import ParallexCard from './parallex-card';


export default function SubjectTabs() {
  const images = ['/course.png', '/subject.png'];
  return (
    <Tabs defaultValue="/course.png" className="flex h-full w-full flex-col items-center">
      <TabsList className="w-1/4 space-x-12 mb-4">
        <TabsTrigger value="/course.png" className="flex flex-col space-y-1 pb-4">
          <LibraryBig />
          <span className="text-xs">Courses</span>
        </TabsTrigger>
        <TabsTrigger value="/subject.png" className="flex flex-col space-y-1 pb-4">
        <Book />
          <span className="text-xs">Subjects</span>
        </TabsTrigger>
      </TabsList>

        {images.map((image) => {
          return (
            <TabsContent value={image} key={image} className='flex justify-center'>
              <div className="animate-appear w-full md:w-3/4">
                <ParallexCard src={image} />
              </div>
            </TabsContent>
          );
        })}
    </Tabs>
  );
}
