import Hero from "@/components/sections/Hero";
import{  Navbar } from "@/components/sections/Navbar"
import TemplateA from "@/components/sections/TemplateA";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto">
        <Navbar />
        <Hero />
        <TemplateA />
      </div>
    </div>
  );
}
