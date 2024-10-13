import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ChartColumn } from 'lucide-react';
import ParallexCard from '../custom/parallex-card';

export default function DashboardTabs() {
  const images = ['/dashboard.png'];
  return (
    <Tabs defaultValue="/dashboard.png" className="flex h-full w-full flex-col items-center justify-center">
      <TabsList className="w-1/4 space-x-12">
        <TabsTrigger value="/dashboard.png" className="flex flex-col space-y-1 pb-4">
          <ChartColumn />
          <span className="text-xs">Dashboard</span>
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
