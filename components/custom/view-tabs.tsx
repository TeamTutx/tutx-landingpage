import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Smartphone, TvMinimal } from 'lucide-react';
import Image from 'next/image';

export default function ViewTabs() {
  return (
    <Tabs defaultValue="web" className="flex h-full w-full flex-col items-center">
      <TabsList className="w-1/4 space-x-6">
        <TabsTrigger value="web" className="flex flex-col space-y-1 pb-4">
          <TvMinimal />
          <span className="text-xs">WEB</span>
        </TabsTrigger>
        <TabsTrigger value="mobile" className="flex flex-col space-y-1 pb-4">
          <Smartphone />
          <span className="text-xs">MOBILE</span>
        </TabsTrigger>
      </TabsList>

      <div className='px-0 sm:px-4 md:px-12 w-full'>
        <TabsContent value="web" className="flex justify-center">
            <Image
              src="/zinc-light.png"
              height="625"
              width="625"
              className="rounded-md border border-muted-foreground/20 object-cover mt-12 shadow-xl dark:border-zinc-900"
              alt="thumbnail"
            />
        </TabsContent>

        <TabsContent value="mobile" className="flex justify-center space-x-8 scale-75 sm:scale-100 mt-0 sm:mt-12">
          <Image
            src="/mobile-light.png"
              height="575"
              width="200"
            className="rounded-3xl object-cover shadow-xl"
            alt="thumbnail"
          />
          <Image
            src="/mobile-dark.png"
              height="575"
              width="200"
            className="rounded-3xl object-cover shadow-xl dark:border dark:border-zinc-700"
            alt="thumbnail"
          />
        </TabsContent>
      </div>
    </Tabs>
  );
}
