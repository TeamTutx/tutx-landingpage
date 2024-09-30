import Hero from "@/components/sections/Hero";
import{  Navbar } from "@/components/sections/Navbar"

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto">
        <Navbar />
        <Hero />
      </div>
    </div>
  );
}
