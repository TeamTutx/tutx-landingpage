import { MoveRight, CreditCard, BadgeDollarSign, Receipt } from 'lucide-react';
import TestTabs from '../custom/test-tabs copy';


export default function Payments() {
  const heading = 'Track Payments and Generate Invoices';
  const subheading =
    'Track payments and fees in real time, automate invoicing to reduce manual work, and offer students a variety of convenient payment options.';

  // Points and their corresponding icon components
  const points = [
    { icon: BadgeDollarSign, text: 'Easily track student payments and manage them in real-time.' },
    { icon: Receipt, text: 'Automatically generate detailed invoices for each transaction made.' },
    { icon: CreditCard, text: 'Set up your own payment portal to streamline collections.' }
  ];

  return (
    <div id="institute" className="mx-auto mt-28 flex flex-col-reverse lg:flex-row max-w-7xl min-h-[525px] lg:max-h-[525px]">
      <div className="w-full lg:w-7/12">
        <TestTabs />
      </div>
      <div className="flex w-full flex-col items-center lg:items-start lg:w-5/12 p-4 lg:pr-8 lg:pt-8">
        <div className="text-3xl md:text-4xl font-extrabold leading-tight text-center lg:text-left">{heading}</div>
        <div className="mt-4 text-sm text-muted-foreground text-center lg:text-left">{subheading}</div>

        {/* Map over points to generate the content */}
        <div className="my-8 space-y-4 text-sm">
          {points.map((point, index) => {
            const IconComponent = point.icon;
            return (
              <div key={index} className="flex items-center">
                <IconComponent className="mr-3 h-[20px] max-h-[20px] min-h-[20px] w-[20px] min-w-[20px] inline text-primary" size={20} />
                {point.text}
              </div>
            );
          })}
        </div>

        <div className="group flex cursor-pointer items-center text-primary mt-4 mb-12">
          Get Started
          <MoveRight
            className="ml-3 inline transform transition-transform duration-300 ease-in-out group-hover:translate-x-2"
            strokeWidth={1}
          />
        </div>
      </div>
    </div>
  );
}
