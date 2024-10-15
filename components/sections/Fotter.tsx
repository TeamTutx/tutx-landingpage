import TutxBlack from '@/components/custom/tutx';
import { Linkedin, Mail, Heart } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  type LinkItem = {
    name: string;
    href: string;
  };

  type FooterSection = {
    heading: string;
    links: LinkItem[];
  };

  const footerLinks: FooterSection[] = [
    {
      heading: 'Product',
      links: [
        { name: 'Use case', href: '/product/use-case' },
        { name: 'Why Tutx', href: '/product/why-tutx' },
        { name: 'UI/UX', href: '/product/ui-ux' },
        { name: 'Themes', href: '/product/themes' },
        { name: 'Team', href: '/product/team' }
      ]
    },
    {
      heading: 'Use Case',
      links: [
        { name: 'Institutes', href: '/use-case/institutes' },
        { name: 'Teachers', href: '/use-case/teachers' },
        { name: 'Students', href: '/use-case/students' }
      ]
    },
    {
      heading: 'Features',
      links: [
        { name: 'Institutes', href: '/features/institutes' },
        { name: 'Subjects', href: '/features/subjects' },
        { name: 'Students', href: '/features/students' },
        { name: 'Batches', href: '/features/batches' },
        { name: 'Payments', href: '/features/payments' }
      ]
    },
    {
      heading: 'Company',
      links: [
        { name: 'About Us', href: '/company/about-us' },
        { name: 'Our Team', href: '/company/our-team' },
        { name: 'Contact', href: '/company/contact' }
      ]
    }
  ];

  const renderFooterLinks = () => {
    return footerLinks.map((section) => (
      <div key={section.heading} className="space-y-4 text-sm text-white text-opacity-70">
        <div className="pb-2 text-base font-semibold text-white text-opacity-90">{section.heading}</div>
        {section.links.map((link) => (
          <Link key={link.name} href={link.href} className="block">
            {link.name}
          </Link>
        ))}
      </div>
    ));
  };

  return (
    <div className="bg-zinc-900 p-16 pb-0 dark:bg-background">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col sm:flex-row">
          {/* Updated Grid */}
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4 justify-center mx-auto flex-1">
            {renderFooterLinks()}
          </div>
          <div className="w-full sm:w-32 pt-10 sm:pt-0">
            <div className="flex flex-col items-center justify-center">
              <TutxBlack className="h-10" showText={true} white={true}></TutxBlack>
              <div className="pt-4 text-sm text-white text-opacity-70">© 2024 Tutx.</div>
              <div className="flex space-x-4 pt-4 text-white">
                <Linkedin strokeWidth={1.2} size={20} />
                <Mail strokeWidth={1.2} size={20} />
              </div>
            </div>
          </div>
        </div>
        <div className="pb-4 pt-12 text-center text-sm text-white text-opacity-70">
          <span>Brought to you with</span>
          <span>
            {' '}
            <Heart className="inline" size={15} strokeWidth={3}></Heart>{' '}
          </span>
          <span>by friendly folks at @Tutx.</span>
        </div>
      </div>
    </div>
  );
}
