'use client';

import React, { useState, useEffect } from 'react'
import { Card, CardContent } from '../ui/card'
import { CheckCircle } from 'lucide-react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { Slider } from '../ui/slider'

// Define the pricing tiers based on student count
const pricingOptions = [
  {
    students: 100,
    price: "₹2,000",
    features: ["Manage Students", "Create Courses & Subjects", "Basic Fee Management", "Attendance Tracking", "Email Notifications", "Basic Analytics"],
    cta: "Get started",
    href: "/signup",
  },
  {
    students: 500,
    price: "₹3,500",
    features: ["Everything in Basic", "Advanced Fee Management", "WhatsApp Reminders", "Advanced Filters", "Batch Management", "Enhanced Analytics", "Priority Support"],
    cta: "Get started",
    href: "/signup",
    popular: true,
  },
  {
    students: 1000,
    price: "₹5,000",
    features: ["Everything in Standard", "Advanced Reporting", "Custom Dashboards", "API Access", "Data Export", "Dedicated Support", "Custom Integrations"],
    cta: "Get started",
    href: "/signup",
  },
  {
    students: 1001,
    price: "Custom",
    features: ["Everything in Premium", "Enterprise Support", "Dedicated Account Manager", "Custom Development", "White-labeling", "On-premise Option", "Training Sessions"],
    cta: "Contact us",
    href: "#contact",
  }
]

// Student count markers for the slider
const studentMarkers = [100, 500, 1000, 2000, 3000, 4000, 5000]

export function Pricing2() {
  const [studentCount, setStudentCount] = useState(500)
  const [selectedTier, setSelectedTier] = useState(pricingOptions[1])
  
  // Update the selected tier based on student count
  useEffect(() => {
    for (let i = pricingOptions.length - 1; i >= 0; i--) {
      if (studentCount >= pricingOptions[i].students) {
        setSelectedTier(pricingOptions[i])
        break
      }
    }
  }, [studentCount])

  // Handle slider change
  const handleSliderChange = (value: number[]) => {
    setStudentCount(value[0])
  }

  // Find the closest marker value for display
  // const getClosestMarker = () => {
  //   return studentMarkers.reduce((prev, curr) => {
  //     return (Math.abs(curr - studentCount) < Math.abs(prev - studentCount) ? curr : prev)
  //   })
  // }

  // Format number with commas
  const formatNumber = (num: number) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  }

  return (
    <section id="pricing" className="py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2 w-full">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Pricing</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Pay As You Scale</h2>
            <p className="text-muted-foreground md:text-xl/relaxed lg:text-center mx-auto w-full max-w-full sm:max-w-3xl">
              Flexible pricing plans that grow with your coaching institute. No hidden fees, no surprises.
            </p>
          </div>
        </div>
        
        {/* Slider Section */}
        <div className="mt-12 mb-16 max-w-4xl mx-auto">
          <div className="mb-8">
    
            <Slider 
              defaultValue={[studentCount]} 
              max={2000} 
              min={0} 
              step={10} 
              onValueChange={handleSliderChange}
              className="mb-8"
            />
            <div className="flex justify-between text-xs text-muted-foreground mt-2">
              {studentMarkers.filter(marker => marker <= 2000).map((marker, index) => (
                <span key={index} className="relative">
                  {marker >= 1000 ? `${marker/1000}K` : formatNumber(marker)}
                </span>
              ))}
            </div>
          </div>
          
          <div className="text-center mb-8">
            <p className="text-lg text-muted-foreground">
              {studentCount > 1000 ? 
                "Custom plan for 1,000+ students" : 
                `${formatNumber(studentCount)} students`}
            </p>
          </div>
        </div>
        
        {/* Pricing Cards */}
        <div className="mx-auto grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pricingOptions.map((tier, index) => (
            // Update the card highlighting logic
            <Card
              key={index}
              className={`border transition-all duration-300 hover:translate-y-[-8px] ${
                (studentCount > 1000 && tier.students > 1000) || 
                (studentCount <= 1000 && studentCount > 500 && tier.students === 1000) ||
                (studentCount <= 500 && studentCount > 100 && tier.students === 500) ||
                (studentCount <= 100 && tier.students === 100)
                  ? "border-primary shadow-lg relative" 
                  : "shadow-md hover:shadow-lg opacity-75"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-0 right-0 mx-auto w-fit rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                  Recommended
                </div>
              )}
              <CardContent className="p-4 sm:p-6 flex flex-col space-y-4 h-full">
                <div className="space-y-1">
                  <h3 className="text-xl sm:text-2xl font-bold">
                    {tier.students > 1000 ? "Enterprise" : 
                     tier.students > 500 ? "Premium" : 
                     tier.students > 100 ? "Standard" : "Basic"}
                  </h3>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl sm:text-3xl font-bold">{tier.price}</span>
                  {tier.price !== "Custom" && <span className="text-muted-foreground">/mo</span>}
                </div>
                <p className="text-sm text-muted-foreground">
                  {tier.students > 1000 ? "A plan based on your specific needs" : 
                   `Up to ${formatNumber(tier.students)} students`}
                </p>
                <ul className="space-y-2 py-4">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 flex-shrink-0 text-primary" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href={tier.href} className="mt-auto w-full">
                  <Button
                    className={`w-full ${
                      tier.students === selectedTier.students ? "" : "bg-primary/90 hover:bg-primary"
                    }`}
                    variant={tier.students === selectedTier.students ? "default" : "outline"}
                  >
                    {tier.cta}
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mx-auto w-full sm:max-w-3xl text-center mt-8">
          <p className="text-muted-foreground text-sm sm:text-base">
            All plans include a 14-day free trial. No credit card required. Cancel anytime. Need a custom plan for
            your specific requirements?{" "}
            <Link href="#contact" className="font-medium text-primary hover:underline">
              Contact our sales team
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  )
}

export default Pricing2