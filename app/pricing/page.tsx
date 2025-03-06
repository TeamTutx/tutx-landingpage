import { PricingSectionDemo } from '@/components/sections/Pricing';
import { Navbar } from '@/components/sections/Navbar';
import Footer from '@/components/sections/Fotter';

export default function PricingPage() {
  return (
    <div className="min-h-screen max-w-screen">
      <Navbar />
      <div className="overflow-x-hidden py-16">
        <h1 className="text-center text-4xl font-bold mb-8">Our Pricing Plans</h1>
        <PricingSectionDemo />
      </div>
      <Footer />
    </div>
  );
}