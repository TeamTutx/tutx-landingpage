import Footer from '@/components/sections/Fotter';
import Hero from '@/components/sections/Hero';
import { Navbar } from '@/components/sections/Navbar';
import Improvements from '@/components/sections/Improvements';
import Information from '@/components/sections/Information';
import Process from '@/components/sections/Process';
import Dashboard from '@/components/sections/Dashboard';
import Themes from '@/components/sections/Themes';
import Story from '@/components/sections/Story';
import { About } from '@/components/sections/About';
import Articles from '@/components/sections/Articles';
import Tagline from '@/components/sections/Tagline';
import Contact from '@/components/sections/Contact';
import Payments from '@/components/sections/Payments';
import Courses from '@/components/sections/Courses';
import Hero2 from '@/components/sections/Hero2';
import Features from '@/components/sections/Features';
import Pricing2 from '@/components/sections/Pricing2';

export default function Home() {
  return (
    <div className="min-h-screen max-w-screen">
      <Navbar />
      <div className="overflow-x-hidden">
        <Hero2/>
        {/* <Improvements /> */}
        <Features />
        <Information/>
        <Process/>
        <Payments />
        <Dashboard />
        <Courses />
        <Themes/>
        <Story/>
        <Pricing2/>
        {/* <About/> */}
        {/* <Articles/> */}
        <Tagline/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  );
}
