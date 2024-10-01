"use client";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";

export default function TemplateG() {
  const words = [
    {
      text: "Build",
    },
    {
      text: "awesome",
    },
    {
      text: "apps",
    },
    {
      text: "with",
    },
    {
      text: "Tutx.",
      className: "text-primary",
    },
  ];

  return (
    <div className="flex flex-col items-center space-y-10 py-16 min-h-[400px]">
      <div className="flex">
        <div className="flex items-center justify-center text-5xl font-extrabold leading-tight">
          {/* <div className="w-3/4 text-center">
            <span>Your </span>
            <span className="relative inline-block text-primary/80">
              <span className="absolute inset-x-0 bottom-0 h-1/2 bg-primary/20"></span>
              product
            </span>
            <span> </span>
            <span className="relative inline-block text-primary/80">
              <span className="absolute inset-x-0 bottom-0 h-1/2 bg-primary/20"></span>
              experience
            </span>
            <span> is being judged</span>
          </div> */}
          <TypewriterEffectSmooth words={words} />
        </div>
      </div>
      <div className="flex items-center justify-center text-muted-foreground">
        <div className="w-2/3 text-center space-y-6">
          <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>
      </div>
    </div>
  );
}
