import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BadgeDollarSign, Receipt } from 'lucide-react';
import ParallexCard from './parallex-card';

export default function Payments() {
  const images = ['/payments.png', '/invoices.png'];
  return (
    <Tabs defaultValue="/payments.png" className="flex h-full w-full flex-col items-center">
      <TabsList className="w-1/4 space-x-12 mb-4">
        <TabsTrigger value="/payments.png" className="flex flex-col space-y-1 pb-4">
        <BadgeDollarSign />
          <span className="text-xs">Payments</span>
        </TabsTrigger>
        <TabsTrigger value="/invoices.png" className="flex flex-col space-y-1 pb-4">
        <Receipt />
          <span className="text-xs">Invoices</span>
        </TabsTrigger>
      </TabsList>

        {images.map((image) => {
          return (
            <TabsContent value={image} key={image} className='flex justify-center'>
              <div className="animate-appear w-3/4 sm:w-2/3 md:w-1/2">
                <ParallexCard src={image} />
              </div>
            </TabsContent>
          );
        })}
    </Tabs>
  );
}
