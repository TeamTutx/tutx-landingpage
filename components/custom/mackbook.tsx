// MacBookWindow.js
import React from 'react';
// import { Button } from '../ui/button';

export default function Macbook() {
  return (
    <div className="flex w-full items-center justify-center pt-16">
      <div className="relative h-96 w-1/2 overflow-hidden rounded-lg bg-background">
        {/* Title Bar */}
        <div className="flex h-8 items-center justify-start bg-zinc-800 text-white">
          <div className="ml-2 flex space-x-1">
            <div className="size-3 rounded-full bg-red-500"></div>
            <div className="size-3 rounded-full bg-yellow-400"></div>
            <div className="size-3 rounded-full bg-green-500"></div>
          </div>
        </div>
        {/* Content Area */}
        <div className="h-full items-center">
          <div className="flex h-8 w-full items-center bg-primary/15">
            <div className="mx-4 h-2/3 w-6 rounded-sm bg-background"></div>
          </div>
          <div className="flex h-full">
            <div className="w-3/12 space-y-2 p-6">
              <div className="h-6 w-1/3 rounded-sm bg-primary/15"></div>
              <div className="h-4 w-full rounded-sm bg-primary/15"></div>
              <div className="h-4 w-full rounded-sm bg-primary/15"></div>
              <div className="h-4 w-full rounded-sm bg-primary/15"></div>
              <div className="h-4 w-full rounded-sm bg-primary/15"></div>
              <div className="h-4 w-full rounded-sm bg-primary/15"></div>
              <div className="h-4 w-full rounded-sm bg-primary/15"></div>
            </div>
            <div className="h-full w-6/12">
              <div className="items-center rounded-sm p-6">
                <div className="space-y-2 rounded-sm bg-primary/15 p-2">
                  <div className="space-y-2 rounded-sm bg-background p-2 shadow-sm">
                    <div className="h-2 w-[80px] rounded-lg bg-primary/15"></div>
                    <div className="h-2 w-[100px] rounded-lg bg-primary/15"></div>
                  </div>
                  <div className="flex items-center space-x-2 rounded-sm bg-background p-2 shadow-sm">
                    <div className="h-4 w-4 rounded-full bg-primary/15"></div>
                    <div className="h-2 w-[100px] rounded-lg bg-primary/15"></div>
                  </div>
                  <div className="flex items-center space-x-2 rounded-sm bg-background p-2 shadow-sm">
                    <div className="h-4 w-4 rounded-full bg-primary/15"></div>
                    <div className="h-2 w-[100px] rounded-lg bg-primary/15"></div>
                  </div>
                  <div className="space-y-2 rounded-sm bg-background p-2 shadow-sm">
                    <div className="h-2 w-[80px] rounded-lg bg-primary/15"></div>
                    <div className="h-2 w-[100px] rounded-lg bg-primary/15"></div>
                  </div>
                  <div className="flex items-center space-x-2 rounded-sm bg-background p-2 shadow-sm">
                    <div className="h-4 w-4 rounded-full bg-primary/15"></div>
                    <div className="h-2 w-[100px] rounded-lg bg-primary/15"></div>
                  </div>
                  <div className="space-y-2 rounded-sm bg-background p-2 shadow-sm">
                    <div className="h-2 w-[80px] rounded-lg bg-primary/15"></div>
                    <div className="h-2 w-[100px] rounded-lg bg-primary/15"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-3/12 flex-col space-y-4 p-6">
              <div className="flex h-8 w-full rounded-sm">
                <div className="h-8 w-1/3 rounded-sm bg-primary/15"></div>
                <div className="h-8 w-2/3 space-y-2 rounded-sm px-2">
                  <div className="h-3 rounded-sm bg-primary/15"></div>
                  <div className="h-3 w-1/3 rounded-sm bg-primary/15"></div>
                </div>
              </div>

              <div className="mt-2 flex h-8 w-full rounded-sm">
                <div className="h-8 w-1/3 rounded-sm bg-primary/15"></div>
                <div className="h-8 w-2/3 space-y-2 rounded-sm px-2">
                  <div className="h-3 rounded-sm bg-primary/15"></div>
                  <div className="h-3 w-1/3 rounded-sm bg-primary/15"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
