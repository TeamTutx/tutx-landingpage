import Footer from "@/components/sections/Fotter";
import Hero from "@/components/sections/Hero";
import{  Navbar } from "@/components/sections/Navbar"
import TemplateA from "@/components/sections/TemplateA";
import TemplateB from "@/components/sections/TemplateB";
import TemplateC from "@/components/sections/TemplateC";

export default function Home() {
  return (
    <div className="min-h-screen">
        <Navbar />
        <Hero />
        <TemplateA />
        <TemplateB />
        <TemplateC />
        <Footer />
    </div>
  );
}
