import { Frame, TrendingUp, CodeSquare, Feather, Hexagon, ShieldHalf } from 'lucide-react';

export default function TemplateA() {
  return (
    <div className='my-16 px-10 max-w-7xl mx-auto'>
      <div className='uppercase text-[11px] tracking-wider font-medium'>Join 1,500+ other scaling product-led organizations that are leading with experience</div>
      <div className='my-8 flex space-x-28'>
        <div>
          <div className="flex items-center text-lg">
            <Frame size={16} className='mr-1'/>
            Vidyard
          </div>
          <div className="flex items-center text-sm font-semibold">
            55%
            <TrendingUp size={16} className='ml-1 text-primary'/>
          </div>
          <div className='text-sm text-muted-foreground'>User activation</div>
        </div>
        <div>
          <div className="flex items-center text-lg">
            <CodeSquare size={16} className='mr-1'/>
            AdRoll
          </div>
          <div className="flex items-center text-sm font-semibold">
            100%
            <TrendingUp size={16} className='ml-1 text-primary'/>
          </div>
          <div className='text-sm text-muted-foreground'>Feature adoption</div>
        </div>
        <div>
          <div className="flex items-center text-lg">
            <Feather size={16} className='mr-1'/>
            ProfitWell
          </div>
          <div className="flex items-center text-sm font-semibold">
            20%
            <TrendingUp size={16} className='ml-1 text-primary'/>
          </div>
          <div className='text-sm text-muted-foreground'>User retention</div>
        </div>
        <div>
          <div className="flex items-center text-lg">
            <Hexagon size={16} className='mr-1'/>
            Pirvy
          </div>
          <div className="flex items-center text-sm font-semibold">
            39 Hrs
            <TrendingUp size={16} className='ml-1 text-primary'/>
          </div>
          <div className='text-sm text-muted-foreground'>Saved a week</div>
        </div>
        <div>
          <div className="flex items-center text-lg">
            <ShieldHalf size={16} className='mr-1'/>
            Tempo
          </div>
          <div className="flex items-center text-sm font-semibold">
            112%
            <TrendingUp size={16} className='ml-1 text-primary'/>
          </div>
          <div className='text-sm text-muted-foreground'>Feature adoption</div>
        </div>
      </div>
    </div>
  );
}
