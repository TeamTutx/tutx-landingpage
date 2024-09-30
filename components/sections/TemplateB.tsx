import { FlaskConical, Pipette, TestTube, Undo } from "lucide-react";
import { Button } from "@/components/ui/button";


export default function TemplateB() {
  return (
<div className="w-full bg-primary/90 px-28 pt-16 pb-8">
  <div className="text-4xl font-extrabold leading-tight text-white/80 dark:text-black/80">
    Build it better with Appcues
  </div>

  <div className="grid h-72 grid-cols-3 gap-6 mt-16">
    <div className="relative rounded-xl bg-primary/60 text-white/80 dark:text-black/80">
      <div className="absolute inset-0 bg-white/15 dark:bg-black/15 rounded-xl flex flex-col space-y-3 items-center">
        <FlaskConical size={36} className="mt-12"/>
        <div className="text-center font-semibold">Getting started is a piece of cake</div>
        <div className="text-center px-6">Quickly build and iterate on in-app experiences that impact user behavior — no setup friction, no engineering support, no hassle.</div>
      </div>
    </div>
    <div className="relative rounded-xl bg-primary/60 text-white/80 dark:text-black/80">
      <div className="absolute inset-0 bg-white/15 dark:bg-black/15 rounded-xl flex flex-col space-y-3 items-center">
        <Pipette size={36} className="mt-12"/>
        <div className="text-center font-semibold">Personalization, at scale</div>
        <div className="text-center px-6">Target experiences to the right users, at the right time, with detailed reporting to measure impact on key segments, like trialers or new users.</div>
      </div>
    </div>
    <div className="relative rounded-xl bg-primary/60 text-white/80 dark:text-black/80">
      <div className="absolute inset-0 bg-white/15 dark:bg-black/15 rounded-xl flex flex-col space-y-3 items-center">
        <TestTube size={36} className="mt-12"/>
        <div className="text-center font-semibold">Structured for your success</div>
        <div className="text-center px-6">A trusted, reliable partner with the expertise, resources, and track record to help you confidently reach your goals.</div>
      </div>
    </div>
  </div>

  <div className="mt-10 flex justify-end relative">
    <Undo size={64} className="text-white/80 dark:text-black/80 rotate-180 mr-4"/>
    <Button className="bg-white dark:bg-black text-primary font-bold custom-button-transition hover:bg-white">See how easy it is</Button>
  </div>
</div>

  );
}
