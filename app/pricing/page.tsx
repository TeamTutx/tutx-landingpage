import { PricingSectionDemo } from '@/components/sections/Pricing';
import { Navbar } from '@/components/sections/Navbar';
import Footer from '@/components/sections/Fotter';

export default function PricingPage() {
  return (
    <div className="max-w-screen min-h-screen">
      <Navbar />
      <div className="overflow-x-hidden py-16">
        <h1 className="mb-8 text-center text-4xl font-bold">Our Pricing Plans</h1>
        <PricingSectionDemo />
      </div>
      <Footer />
    </div>
  );
}
