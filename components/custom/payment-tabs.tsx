import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BadgeDollarSign, Receipt } from 'lucide-react';
import ParallexCard from './parallex-card';

export default function  Payments() {
  const images = ['/enroll-pay.png', '/Receipt.png'];
  return (
    <Tabs defaultValue="/enroll-pay.png" className="flex h-full w-full flex-col items-center">
      <TabsList className="w-1/4 space-x-12 mb-4">
        <TabsTrigger value="/enroll-pay.png" className="flex flex-col space-y-1 pb-4">
        <BadgeDollarSign />
          <span className="text-xs">Payments</span>
        </TabsTrigger>
        <TabsTrigger value="/Receipt.png" className="flex flex-col space-y-1 pb-4">
        <Receipt />
          <span className="text-xs">Receipt</span>
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
