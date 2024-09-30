import Hero from "@/components/sections/Hero";
import{  Navbar } from "@/components/sections/Navbar"
import TemplateA from "@/components/sections/TemplateA";
import TemplateB from "@/components/sections/TemplateB";

export default function Home() {
  return (
    <div className="min-h-screen">
        <Navbar />
        <Hero />
        <TemplateA />
        <TemplateB />
    </div>
  );
}
