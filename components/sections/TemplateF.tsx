// import { ThemeOptions } from '@/components/custom/theme-options';
import { Button } from '@/components/ui/button';
import Dock from '../custom/dock';

export default function TemplateF() {
  return (
    <div className="mt-32 flex min-h-[400px] flex-col items-center bg-primary/5 py-20">
      <div className="w-full text-center text-5xl font-extrabold leading-tight">
        <span>Make the complex, </span>

        <span className="relative inline-block text-primary/80">
          <span className="absolute inset-x-0 bottom-0 h-1/2 bg-primary/20"></span>
          simple
        </span>
      </div>
      <div className="w-full pt-2 text-center text-sm text-muted-foreground">
        Delivering a great experience, no matter how complex your product, has never been simpler.
      </div>
      <div className="pt-4">
        {/* <ThemeOptions /> */}
        <Dock />
      </div>
      <div className="mt-16 flex h-96 w-1/2 items-center justify-center rounded-2xl bg-white dark:bg-black">
        <Button className="text-white dark:text-black">Themes</Button>
      </div>
    </div>
  );
}
