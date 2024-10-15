import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

export default function Contact() {
  const subheading = 'Reach out to our team to see how your agency can benefit from Tutx.';
  return (
    <div className="mx-auto flex flex-col md:flex-row max-w-7xl my-24 sm:px-6" id="demo">
      <div className="space-y-10 w-full md:w-1/2 p-4 text-center md:text-left">
        <div className="font-bold text-primary">BOOK A DEMO</div>

        <div className="leading-tighter text-6xl font-extrabold">
          Questions? <br />
          We&apos;ve Got <br />
          <span className="text-primary">Answers</span>
        </div>
        <div className="text-sm text-muted-foreground">{subheading}</div>
        <div className="text-bold text-primary text-center md:text-left">
          <MessageCircle className="mr-3 mb-1 inline" size={20} strokeWidth={1.5} />
          hello@teamtutx.com
        </div>
      </div>
      <div className="flex-1 items-center pt-8 p-4 w-full md:w-1/2">
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

          <Button type="submit" className="w-full text-background">
            Book a Demo
          </Button>
        </form>
      </div>
    </div>
  );
}
