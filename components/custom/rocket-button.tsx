'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import { LogIn } from 'lucide-react';

export default function RocketButton() {
  return (
    <div className="flex items-center justify-center">
      <a href="https://app.tutx.co.in" target="_blank" rel="noopener noreferrer">
        <Button className="group relative flex justify-center overflow-hidden bg-primary text-background">
          <span className="text-center transition duration-500 group-hover:translate-x-40">Login</span>
          <div className="absolute inset-0 z-20 flex -translate-x-40 items-center justify-center transition duration-500 group-hover:translate-x-0">
            <LogIn className="text-background" size={20} strokeWidth={1.5} />
          </div>
        </Button>
      </a>
    </div>
  );
}
