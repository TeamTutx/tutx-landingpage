import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

export default function Templatek() {
  return (
    <div className="mx-auto flex max-w-7xl px-16 py-36">
      <div className="w-1/2 space-y-10 pr-20">
        <div className="font-bold text-primary">BOOK A DEMO</div>

        <div className="leading-tighter text-6xl font-extrabold">
          Questions? <br />
          We&apos;ve Got <br />
          <span className="text-primary">Answers</span>
        </div>
        <div className="text-sm text-muted-foreground">Reach out to our team to see how your agency can benefit from Productive.</div>
        <div className="text-bold flex items-center text-primary">
          <MessageCircle className="mr-3 inline" size={20} strokeWidth={1.5} />
          hello@teamtutx.com
        </div>
      </div>
      <div className="flex w-1/2 items-center px-10">
        <form className="space-y-4">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <Label htmlFor="firstName" className="text-muted-foreground">
                First Name
              </Label>
              <Input type="text" id="firstName" placeholder="John" className="mt-2" />
            </div>
            <div>
              <Label htmlFor="lastName" className="text-muted-foreground">
                Last Name
              </Label>
              <Input type="text" id="lastName" placeholder="Doe" className="mt-2" />
            </div>
          </div>

          <div>
            <Label htmlFor="email" className="text-muted-foreground">
              Email
            </Label>
            <Input type="email" id="email" placeholder="John.Doe@gmail.com" className="mt-2" />
          </div>

          <div>
            <Label htmlFor="message" className="text-muted-foreground">
              Message
            </Label>
            <Textarea
              id="message"
              placeholder="Tell us your challenges, requirements or ask a question"
              className="mt-2 placeholder:text-opacity-5"
            />
          </div>

          <Button type="submit" className="w-full">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}
