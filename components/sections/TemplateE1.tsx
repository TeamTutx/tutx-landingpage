import { MoveRight, CreditCard, BadgeDollarSign, Receipt } from 'lucide-react';
import PaymentTabs from '../custom/payment-tabs';

export default function TemplateD() {
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
    <div className="mx-auto mt-32 flex min-h-[525px] max-w-7xl px-10">
      <div className="w-1/2">
        <PaymentTabs />
      </div>
      <div className="w-1/2 px-16">
        <div className="text-4xl font-extrabold leading-tight">{heading}</div>
        <div className="mt-8 text-sm text-muted-foreground">{subheading}</div>

        <div className="my-8 space-y-4 text-sm">
          {points.map((point, index) => {
            const IconComponent = point.icon;
            return (
              <div key={index} className="flex items-center">
                <IconComponent className="mr-3 inline text-primary" size={20} />
                {point.text}
              </div>
            );
          })}
        </div>

        <div className="group flex cursor-pointer items-center text-primary">
          Jump In
          <MoveRight
            className="ml-3 inline transform transition-transform duration-300 ease-in-out group-hover:translate-x-2"
            strokeWidth={1}
          />
        </div>
      </div>
    </div>
  );
}
