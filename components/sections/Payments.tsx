import { MoveRight, CreditCard, BadgeDollarSign, Receipt } from 'lucide-react';
import PaymentTabs from '../custom/payment-tabs';
import Link from 'next/link';

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
    <div id="payments" className="mx-auto mt-28 flex min-h-[520px] max-w-7xl flex-col-reverse lg:max-h-[520px] lg:flex-row">
      <div className="w-full lg:w-7/12">
        <PaymentTabs />
      </div>
      <div className="flex w-full flex-col items-center p-4 lg:w-5/12 lg:items-start lg:pr-8 lg:pt-8">
        <div className="text-center text-3xl font-extrabold leading-tight md:text-4xl lg:text-left">{heading}</div>
        <div className="mt-4 text-center text-sm text-muted-foreground lg:text-left">{subheading}</div>

        {/* Map over points to generate the content */}
        <div className="my-8 space-y-4 text-sm">
          {points.map((point, index) => {
            const IconComponent = point.icon;
            return (
              <div key={index} className="flex items-center">
                <IconComponent className="mr-3 inline h-[20px] max-h-[20px] min-h-[20px] w-[20px] min-w-[20px] text-primary" size={20} />
                {point.text}
              </div>
            );
          })}
        </div>

        <Link href={'#demo'} className="group mb-12 mt-4 flex cursor-pointer items-center text-primary">
          Jump In
          <MoveRight
            className="ml-3 inline transform transition-transform duration-300 ease-in-out group-hover:translate-x-2"
            strokeWidth={1}
          />
        </Link>
      </div>
    </div>
  );
}
