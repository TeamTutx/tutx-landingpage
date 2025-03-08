import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ChartColumn } from 'lucide-react';
import ParallexCard from './parallex-card';


export default function DashboardTabs() {
  const images = ['/dashboard.png'];
  return (
    <Tabs defaultValue="/dashboard.png" className="flex h-full w-full flex-col items-center">
      <TabsList className="w-1/4 space-x-12 mb-4">
        <TabsTrigger value="/dashboard.png" className="flex flex-col space-y-1 pb-4">
          <ChartColumn />
          <span className="text-xs">Dashboard</span>
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
