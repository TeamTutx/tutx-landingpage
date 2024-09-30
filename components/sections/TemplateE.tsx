import { MonitorCheck, MessageCircle, Lightbulb, MoveRight } from 'lucide-react';

export default function TemplateE() {
  return (
    <div className="mx-auto mt-32 flex min-h-[525px] max-w-7xl px-10">
      <div className="w-1/2 pr-16">
        <div className="text-4xl font-extrabold leading-tight">Set priorities based on user feedback and insight</div>
        <div className="mt-8 text-sm text-muted-foreground">
        Improve your product and user experience using insights collected from in-app surveys and NPS—there’s no better place to capture feedback!
        </div>

        <div className="my-8 space-y-4 uppercase text-sm">
          <div className="flex items-center">
            <MonitorCheck className="mr-3 inline text-primary" size={20} />
            improve nps
          </div>
          <div className="flex items-center">
            <MessageCircle className="mr-3 inline text-primary" size={20} />
            Increase feedback
          </div>
          <div className="flex items-center">
            <Lightbulb className="mr-3 inline text-primary" size={20} />
            Collect insights
          </div>
        </div>

        <div className="group flex cursor-pointer items-center text-primary">
          Collect Feedback
          <MoveRight
            className="ml-3 inline transform transition-transform duration-300 ease-in-out group-hover:translate-x-2"
            strokeWidth={1}
          />
        </div>
      </div>
      <div className="w-1/2 px-16">
        <div className="h-full bg-primary/15"></div>
      </div>
    </div>
  );
}
