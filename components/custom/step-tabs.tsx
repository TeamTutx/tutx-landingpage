import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Building, BookMarked, LibraryBig, GraduationCap } from 'lucide-react';
import ParallexCard from '../custom/parallex-card';

export default function StepTabs() {
  const images = ['/step1.png', '/step2.png', '/step3.png', '/step4.png'];
  return (
    <Tabs defaultValue="/step1.png" className="flex h-full w-full flex-col items-center">
      <TabsList className="w-1/4 space-x-12 mb-4">
        <TabsTrigger value="/step1.png" className="flex flex-col space-y-1 pb-4">
          <Building />
          <span className="text-xs">Step 1</span>
        </TabsTrigger>
        <TabsTrigger value="/step2.png" className="flex flex-col space-y-1 pb-4">
          <BookMarked />
          <span className="text-xs">Step 2</span>
        </TabsTrigger>
        <TabsTrigger value="/step3.png" className="flex flex-col space-y-1 pb-4">
          <LibraryBig />
          <span className="text-xs">Step 3</span>
        </TabsTrigger>
        <TabsTrigger value="/step4.png" className="flex flex-col space-y-1 pb-4">
          <GraduationCap />
          <span className="text-xs">Step 4</span>
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
