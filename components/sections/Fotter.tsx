"use client";
import TutxBlack from '@/components/custom/tutx';
import { Linkedin, Mail, Heart,  Twitter, Phone } from 'lucide-react';
import Link from 'next/link';

import React from "react";

// Indian Flag SVG component
const IndianFlag = ({ className = "h-4 w-6 inline mx-1" }) => (
  <svg className={className} viewBox="0 0 900 600" xmlns="http://www.w3.org/2000/svg">
    <rect width="900" height="200" fill="#FF9933" />
    <rect width="900" height="200" y="200" fill="#FFFFFF" />
    <rect width="900" height="200" y="400" fill="#138808" />
    <circle cx="450" cy="300" r="60" fill="#000080" />
    <circle cx="450" cy="300" r="50" fill="#FFFFFF" />
    <circle cx="450" cy="300" r="8.74" fill="#000080" />
    <g fill="#000080">
      {[...Array(24)].map((_, i) => (
        <line 
          key={i}
          x1="450"
          y1="300"
          x2={450 + 40 * Math.cos(i * Math.PI / 12)}
          y2={300 + 40 * Math.sin(i * Math.PI / 12)}
          strokeWidth="2"
          stroke="#000080"
        />
      ))}
    </g>
  </svg>
);

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
        { name: 'Use case', href: '#institute' },
        { name: 'Why Tutx', href: '#information' },
        // { name: 'Team', href: '#about' }
      ]
    },
    {
      heading: 'Use Case',
      links: [
        { name: 'Institutes', href: '#institutes' },
        { name: 'Teachers', href: '#courses' },
        { name: 'Students', href: '#courses' }
      ]
    },
    {
      heading: 'Features',
      links: [
        { name: 'Institutes', href: '#institutes' },
        { name: 'Subjects', href: '#courses' },
        { name: 'Students', href: '#courses' },
        { name: 'Batches', href: '#institutes' },
        { name: 'Payments', href: '#payments' }
      ]
    },
    {
      heading: 'Company',
      links: [
        // { name: 'About Us', href: '#about' },
        // { name: 'Our Team', href: '#story' },
        { name: 'Contact', href: '#contact' },
        { name: 'Privacy Policy', href: '/privacy-policy' }
      ]
    }
  ];

  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/company/tutx-app/", label: "LinkedIn" },
    { icon: Twitter, href: "https://x.com/singh_supril", label: "Twitter" },
    { icon: Mail, href: "mailto:support@tutx.co.in", label: "Email" },
    { icon: Phone, href: "tel:+917972057832", label: "Phone" },
  ];

  const renderFooterLinks = () => {
    return footerLinks.map((section) => (
      <div key={section.heading} className="space-y-4 text-sm">
        <h3 className="text-base font-semibold text-white">{section.heading}</h3>
        <ul className="space-y-3">
          {section.links.map((link) => (
            <li key={link.name}>
              <Link 
                href={link.href} 
                className="text-gray-300 hover:text-white transition-colors duration-200 ease-in-out hover:underline"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    ));
  };

  return (
   
    <footer className="bg-gradient-to-br from-zinc-900 to-zinc-800 dark:from-zinc-900 dark:to-black">
      <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        {/* Top section */}
        <div className="relative pb-10">
          {/* Removed the gradient border line that was here */}
          
          <div className="grid grid-cols-1 gap-y-10 gap-x-8 pt-10 lg:grid-cols-5">
            {/* Logo and company info */}
            <div className="lg:col-span-1">
              <div className="flex flex-col items-start">
                <TutxBlack className="h-12" showText={true} white={true} />
                <p className="mt-4 text-sm text-gray-300 max-w-xs">
                  Empowering education through innovative management solutions for tutoring institutes.
                </p>
                
                {/* Social links */}
                <div className="mt-6 flex space-x-4">
                  {socialLinks.map((social) => (
                    <Link 
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                      aria-label={social.label}
                    >
                      <social.icon strokeWidth={1.5} size={20} />
                    </Link>
                  ))}
                 
                </div>
              </div>
            </div>
            
            {/* Links sections */}
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-4">
              {renderFooterLinks()}
            </div>
          </div>
        </div>
      
        {/* Bottom section */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-400">
            © {new Date().getFullYear()} Tutx. All rights reserved.
            <div className="mt-2 text-sm text-gray-400">
                    <Link href="tel:+917972057832" className="hover:text-white transition-colors duration-200">
                      +91 7972 057 832
                    </Link>
                  </div>
          </div>
          
          

          <span className="text-sm text-gray-400 ml-2 flex items-center">
              Proudly made in <IndianFlag /> India
            </span>

          <div className="mt-4 md:mt-0 flex items-center">
            <span className="text-sm text-gray-400 flex items-center">
              Crafted with <Heart className="inline mx-1 text-red-500" size={14} strokeWidth={2} fill="currentColor" /> by the folks at Tutx
            </span>
           
          </div>
        </div>
      </div>
    </footer>
    
  );
}
