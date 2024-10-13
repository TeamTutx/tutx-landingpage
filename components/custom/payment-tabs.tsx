import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BadgeDollarSign, Receipt } from 'lucide-react';
import ParallexCard from '../custom/parallex-card';

export default function PaymentTabs() {
  const images = ['/payments.png', '/invoices.png'];
  return (
    <Tabs defaultValue="/payments.png" className="flex h-full w-full flex-col items-center justify-center">
      <TabsList className="w-1/4 space-x-12">
        <TabsTrigger value="/payments.png" className="flex flex-col space-y-1 pb-4">
          <BadgeDollarSign />
          <span className="text-xs">Payments</span>
        </TabsTrigger>
        <TabsTrigger value="/invoices.png" className="flex flex-col space-y-1 pb-4">
          <Receipt />
          <span className="text-xs">Invoices</span>
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
