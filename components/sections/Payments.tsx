import { MoveRight,  MessageCircleDashedIcon, BadgeDollarSign, Receipt } from 'lucide-react';
import PaymentTabs from '../custom/payment-tabs';
import Link from 'next/link';

export default function Payments() {
  const heading = 'Track Payments Falwlessly and Generate Receipts';
  const subheading =
    'Track payments and fees in real time, automated invoicing to reduce manual work.';

  // Points and their corresponding icon components
  const points = [
    { icon: BadgeDollarSign, text: 'Easily track student payments and manage them in real-time.' },
    { icon: Receipt, text: 'Automatically generate detailed receipt for each transaction made.' },
    { icon: MessageCircleDashedIcon, text: 'Send timely WhatsApp/email reminders that boost payment collection for upcoming & overdue fees.' }
  ];

  return (
    <div id="payments" className="mx-auto mt-20 lg:mt-28 flex min-h-[520px] max-w-7xl flex-col-reverse lg:max-h-[520px] lg:flex-row">
      <div className="w-full lg:w-7/12">
        <PaymentTabs />
      </div>
      <div className="flex w-full flex-col items-center p-4 lg:w-5/12 lg:items-start lg:pr-8 lg:pt-8">
        <div className="ml-4 text-center text-3xl font-extrabold leading-tight md:text-4xl lg:text-left">{heading}</div>
        <div className="ml-4 mt-4 text-center text-sm text-muted-foreground lg:text-left">{subheading}</div>

        {/* Map over points to generate the content */}
        <div className="ml-4 my-8 space-y-6 text-sm">
          {points.map((point, index) => {
            const IconComponent = point.icon;
            return (
              <div key={index} className="flex items-center rounded-lg transition-colors duration-200 group">
                <div className="mr-3 p-2 rounded-full bg-primary/10 text-primary">
                  <IconComponent size={20} />
                </div>
                <span className="font-medium transition-colors duration-200">
                  {point.text}
                </span>
              </div>
            );
          })}
        </div>

        <Link href={'#demo'} className="group mb-12 m-4 flex cursor-pointer items-center text-primary rounded-md p-4">
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
