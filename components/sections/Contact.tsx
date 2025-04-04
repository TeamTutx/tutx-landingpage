'use client';
import { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import { submitForm } from '@/app/actions/contact';
import { LoadingSpinner } from '../custom/loading-spinner';

export default function Contact() {
  const [result, setResult] = useState('');
  const [textColor, setTextColor] = useState('');
  const [loading, setLoading] = useState(false);

  const subheading = 'Reach out to our team to see how your agency can benefit from Tutx.';

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    console.log('Form data is - ',formData);
    const firstName = formData.get('firstName') as string;
    const lastName = formData.get('lastName') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;

    if (!firstName || firstName.length <= 2) {
      setResult('First Name must be more than 2 characters.');
      setTextColor('text-red-500');
      return;
    }

    if (!lastName || lastName.length <= 2) {
      setResult('Last Name must be more than 2 characters.');
      setTextColor('text-red-500');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      setResult('Enter a valid email address.');
      setTextColor('text-red-500');
      return;
    }

    if (!message || message.length <= 5) {
      setResult('Message must be more than 5 characters.');
      setTextColor('text-red-500');
      return;
    }

    formData.set('message', message);

    setLoading(true);

    try {
      const result = await submitForm(formData);

      if (result.success) {
        setResult('Message sent successfully. We will get back to you shortly.');
        setTextColor('text-green-600');
        form.reset();
      } else {
        setResult('Something went wrong. Please try again later.');
        setTextColor('text-red-500');
      }
    } catch (error) {
      console.error(error);
      setResult('Something went wrong. Please try again later.');
      setTextColor('text-red-500');
    }

    setLoading(false);
  };

  return (
    <div  className="mx-auto my-24 flex min-h-[450px] max-w-7xl flex-col sm:px-6 md:flex-row" id="demo">
      <div className="w-full space-y-10 p-4 text-center md:w-1/2 md:text-left">
        <div className="font-bold text-primary">BOOK A DEMO</div>
        <div className="leading-tighter text-6xl font-extrabold">
          Questions? <br />
          We&apos;ve Got <br />
          <span className="text-primary">Answers</span>
        </div>
        <div className="text-sm text-muted-foreground">{subheading}</div>
        <div className="text-bold text-center text-primary md:text-left">
          <Link href="mailto:support@tutx.co.in">
            <MessageCircle className="mb-1 mr-3 inline" size={20} strokeWidth={1.5} />
            support@tutx.co.in
          </Link>
        </div>
      </div>
      <div className="w-full flex-1 items-center p-4 pt-8 md:w-1/2">
        <form className="space-y-6" onSubmit={onSubmit}>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <Label htmlFor="firstName" className="text-muted-foreground">
                First Name
              </Label>
              <Input type="text" id="firstName" name="firstName" placeholder="John" className="mt-2" />
            </div>
            <div>
              <Label htmlFor="lastName" className="text-muted-foreground">
                Last Name
              </Label>
              <Input type="text" id="lastName" name="lastName" placeholder="Doe" className="mt-2" />
            </div>
          </div>

          <div>
            <Label htmlFor="email" className="text-muted-foreground">
              Email
            </Label>
            <Input type="email" id="email" name="email" placeholder="John.Doe@gmail.com" className="mt-2" />
          </div>

          <div>
            <Label htmlFor="message" className="text-muted-foreground">
              Message
            </Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Tell us your challenges, requirements or ask a question"
              className="mt-2 placeholder:text-opacity-5"
            />
          </div>

          <Button type="submit" className="w-full text-background" disabled={loading}>
            {loading ? <LoadingSpinner /> : 'Book a Demo'}
          </Button>
          <span className={`mt-2 block text-sm ${textColor}`}>{result}</span>
        </form>
      </div>
    </div>
  );
}
