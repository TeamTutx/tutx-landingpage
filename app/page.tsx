import Footer from '@/components/sections/Fotter';
import Hero from '@/components/sections/Hero';
import { Navbar } from '@/components/sections/Navbar';
import Improvements from '@/components/sections/Improvements';
// import TemplateB from '@/components/sections/TemplateB';
import Information from '@/components/sections/Information';
import Institute from '@/components/sections/Institute';
import Courses from '@/components/sections/Courses';
import Payments from '@/components/sections/Payments';
import Dashboard from '@/components/sections/Dashboard';
import Themes from '@/components/sections/Themes';
import Story from '@/components/sections/Story';
import { About } from '@/components/sections/About';
import Articles from '@/components/sections/Articles';
import Tagline from '@/components/sections/Tagline';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <div className="min-h-screen max-w-screen">
      <Navbar />
      <div className="overflow-x-hidden">
        <Hero />
        <Improvements />
        {/* <TemplateB /> */}
        <Information />
        <Institute />
        <Courses />
        <Payments />
        <Dashboard />
        <Themes />
        <Story />
        <About />
        <Articles />
        <Tagline />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
