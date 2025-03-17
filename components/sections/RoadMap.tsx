'use client';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';

import { 
  Bell, BookOpen, Calendar, Laptop, MessageSquare, Smartphone, 
  TestTube, Users, Video, LightbulbIcon, Zap, Globe, 
  PaintBucket, BarChart, Award, Palette, VideoIcon, SpeakerIcon
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { cn } from '@/lib/utils';

export default function RoadMap() {
  const words = 'Our Product Roadmap';

  const subheading = 'We\'re constantly improving our platform with new features. Here\'s what\'s coming soon:';
  
  const [notifications, setNotifications] = useState({
    studentApp: false,
    teacherPortal: false,
    integrations: false
  });

  const toggleNotification = (feature: string) => {
    setNotifications(prev => ({
      ...prev,
      [feature as keyof typeof prev]: !prev[feature as keyof typeof prev]
    }));
  };

  const features = [
    {
      id: 'studentApp',
      title: 'Student Mobile & Web App',
      description: 'Access your education on any device with our comprehensive student platform.',
      status: 'Coming Q3 2025',
      icon: <Smartphone className="h-10 w-10 text-primary" />,
      subFeatures: [
        { name: 'Fee Payment', icon: <Laptop className="h-5 w-5" /> },
        { name: 'Live Classes', icon: <Video className="h-5 w-5" /> },
        { name: 'Course Materials', icon: <BookOpen className="h-5 w-5" /> },
        { name: 'Online Tests', icon: <TestTube className="h-5 w-5" /> },
        { name: 'Custom Branding', icon: <Palette className="h-5 w-5" /> },
        { name: 'White-labeled App', icon: <PaintBucket className="h-5 w-5" /> }
      ]
    },
    {
      id: 'teacherPortal',
      title: 'Teacher Portal',
      description: 'Empower educators with tools to deliver exceptional learning experiences.',
      status: 'Coming Q3 2025',
      icon: <Users className="h-10 w-10 text-primary" />,
      subFeatures: [
        { name: 'Live Class Hosting', icon: <Video className="h-5 w-5" /> },
        { name: 'Assignment Management', icon: <Calendar className="h-5 w-5" /> },
        { name: 'Student Progress Tracking', icon: <BarChart className="h-5 w-5" /> },
        { name: 'Direct Messaging', icon: <MessageSquare className="h-5 w-5" /> },
        { name: 'Live Broadcasting', icon: <SpeakerIcon className="h-5 w-5" /> },
        { name: 'Performance Analytics', icon: <Award className="h-5 w-5" /> }
      ]
    },
    {
      id: 'integrations',
      title: 'Third-Party Integrations',
      description: 'Seamlessly connect with your favorite tools and platforms for enhanced productivity.',
      status: 'Coming Q3 2025',
      icon: <Zap className="h-10 w-10 text-primary" />,
      subFeatures: [
        { name: 'Zoom Integration', icon: <VideoIcon className="h-5 w-5" /> },
        { name: 'Google Meet', icon: <Globe className="h-5 w-5" /> },
        { name: 'Payment Gateways', icon: <Laptop className="h-5 w-5" /> },
        { name: 'Calendar Sync', icon: <Calendar className="h-5 w-5" /> }
      ]
    }
  ];

  return (
    <div id="roadmap" className="mt-32 flex flex-col items-center bg-gradient-to-b from-primary/5 to-background py-20 px-4 sm:px-6 lg:px-8">
      <div className="w-full text-center">
        <div className="inline-block mb-2 px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
          Coming Soon
        </div>
        <TextGenerateEffect 
          words={words} 
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70" 
          highlights={['Roadmap']} 
        />
      </div>
      <div className="w-full pt-4 md:pt-2 text-center text-sm text-muted-foreground max-w-3xl mx-auto mb-12">
        {subheading}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
        {features.map((feature) => (
          <div 
            key={feature.id}
            className={cn(
              "bg-background rounded-xl border border-border p-6 shadow-sm hover:shadow-md transition-all",
              "hover:border-primary/30 hover:translate-y-[-4px]",
              "backdrop-blur-sm bg-opacity-80"
            )}
          >
            <div className="flex items-start gap-4">
              <div className={cn(
                "p-3 rounded-lg",
                "bg-gradient-to-br from-primary/20 to-primary/5"
              )}>
                {feature.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold">{feature.title}</h3>
                <p className="text-muted-foreground mt-1 text-sm">{feature.description}</p>
                <div className="mt-2 inline-block px-3 py-1 bg-primary/20 text-primary text-sm rounded-full font-medium">
                  {feature.status}
                </div>
              </div>
            </div>
            
            <div className="mt-6 grid grid-cols-2 gap-4">
              {feature.subFeatures.map((subFeature, idx) => (
                <div 
                  key={idx} 
                  className="flex items-center gap-2 text-sm p-2 rounded-lg hover:bg-primary/5 transition-colors"
                >
                  <div className="p-1 bg-primary/10 rounded-md">
                    {subFeature.icon}
                  </div>
                  <span>{subFeature.name}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-6 flex justify-end items-center">
              <Button 
                variant={notifications[feature.id as keyof typeof notifications] ? "default" : "outline"}
                size="sm"
                onClick={() => {
                  toggleNotification(feature.id);
                  window.location.href = "#demo";
                }}
                className={cn(
                  "flex items-center gap-2 rounded-full",
                  notifications[feature.id as keyof typeof notifications] ? "bg-primary hover:bg-primary/90" : ""
                )}
              >
                <Bell className="h-4 w-4" />
                {notifications[feature.id as keyof typeof notifications] ? "Notifications On" : "Notify Me"}
              </Button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-16 text-center justify-end">
        <Button 
          variant="outline" 
          className="flex items-center gap-2 rounded-full px-6 py-2 border-primary/30 hover:border-primary hover:bg-primary/10" 
          asChild
        >
          <a href="#demo">
            <LightbulbIcon className="h-4 w-4" />
            Suggest a Feature
          </a>
        </Button>
      </div>
    </div>
  );
}
