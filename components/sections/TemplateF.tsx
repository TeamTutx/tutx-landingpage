import { ThemeOptions } from '@/components/custom/theme-options';

export default function TemplateF() {
  return (
    <div className="min-h-[400px] mt-32 bg-primary/5 flex flex-col items-center py-20">
      <div className="text-center w-full text-5xl font-extrabold leading-tight">
        <span>Make the complex, </span>

        <span className="relative inline-block text-primary/80">
              <span className="absolute inset-x-0 bottom-0 h-1/2 bg-primary/20"></span>
              simple
            </span>
      </div>
      <div className="text-center w-full text-sm pt-2 text-muted-foreground">Delivering a great experience, no matter how complex your product, has never been simpler.</div>
      <div className='pt-4'>
          <ThemeOptions />
      </div>
      <div className='h-96 w-1/2 bg-white dark:bg-black mt-16 rounded-2xl'></div>
    </div>
  );
}
