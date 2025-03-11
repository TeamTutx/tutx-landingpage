import Footer from '@/components/sections/Fotter';
import { Navbar } from '@/components/sections/Navbar';

import Information from '@/components/sections/Information';
import Process from '@/components/sections/Process';
import Dashboard from '@/components/sections/Dashboard';
import Themes from '@/components/sections/Themes';
import OtherRequirement from '@/components/sections/OtherRequirement';

import Tagline from '@/components/sections/Tagline';
import Contact from '@/components/sections/Contact';
import Payments from '@/components/sections/Payments';
import Courses from '@/components/sections/Courses';
import Hero2 from '@/components/sections/Hero2';
import Features from '@/components/sections/Features';
import Pricing2 from '@/components/sections/Pricing2';

export default function Home() {
  return (
    <div className="max-w-screen min-h-screen">
      <Navbar />
      <div className="overflow-x-hidden">
        <Hero2 />
        {/* <Improvements /> */}
        <Features />
        <Information />
        <Process />
        <Payments />
        <Dashboard />
        <Courses />
        <Themes />
        <OtherRequirement />
        <Pricing2 />
        {/* <About/> */}
        {/* <Articles/> */}
        <Tagline />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
