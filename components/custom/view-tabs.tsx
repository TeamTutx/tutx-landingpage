import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Smartphone, TvMinimal } from 'lucide-react';
import Image from 'next/image';

export default function ViewTabs() {
  return (
    <Tabs defaultValue="web" className="flex h-full w-full flex-col items-center justify-center">
      <TabsList className="w-1/4 space-x-6 pb-8">
        <TabsTrigger value="web" className="flex flex-col space-y-1 pb-4">
          <TvMinimal />
          <span className="text-xs">WEB</span>
        </TabsTrigger>
        <TabsTrigger value="mobile" className="flex flex-col space-y-1 pb-4">
          <Smartphone />
          <span className="text-xs">MOBILE</span>
        </TabsTrigger>
      </TabsList>

      <div className="h-[500px] p-8">
        <TabsContent value="web">
          <div className="mt-4 w-full">
            <Image
              src="/web.png"
              height="1000"
              width="1000"
              className="h-full w-full rounded-lg border border-muted-foreground/20 object-cover group-hover/card:shadow-xl dark:border-zinc-900"
              alt="thumbnail"
            />
          </div>
        </TabsContent>

        <TabsContent value="mobile" className="flex h-full space-x-8">
          <Image
            src="/mobile-light.png"
            height="1000"
            width="1000"
            className="max-h-full w-auto rounded-3xl object-cover group-hover/card:shadow-xl dark:border dark:border-zinc-700"
            alt="thumbnail"
          />
          <Image
            src="/mobile-dark.png"
            height="1000"
            width="1000"
            className="max-h-full w-auto rounded-3xl object-cover group-hover/card:shadow-xl dark:border dark:border-zinc-700"
            alt="thumbnail"
          />
        </TabsContent>
      </div>
    </Tabs>
  );
}
