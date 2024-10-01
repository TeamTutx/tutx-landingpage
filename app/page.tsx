import Footer from '@/components/sections/Fotter';
import Hero from '@/components/sections/Hero';
import { Navbar } from '@/components/sections/Navbar';
import TemplateA from '@/components/sections/TemplateA';
import TemplateB from '@/components/sections/TemplateB';
import TemplateC from '@/components/sections/TemplateC';
import TemplateD from '@/components/sections/TemplateD';
import TemplateE from '@/components/sections/TemplateE';
import TemplateF from '@/components/sections/TemplateF';
import TemplateG from '@/components/sections/TemplateG';
import { TemplateH } from '@/components/sections/TemplateH';
import TemplateI from '@/components/sections/TemplateI';
import TemplateJ from '@/components/sections/TemplateJ';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <TemplateA />
      <TemplateB />
      <TemplateC />
      <TemplateD />
      <TemplateE />
      <TemplateF />
      <TemplateG />
      <TemplateH />
      <TemplateI />
      <TemplateJ />
      <Footer />
    </div>
  );
}
