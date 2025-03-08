import React from 'react'
import { Card, CardContent } from '../ui/card'
import { CheckCircle } from 'lucide-react'
import { Button } from '../ui/button'
import Link from 'next/link'

const pricingTiers = [
  {
    name: "Starter",
    price: "₹999",
    description: "Perfect for new coaching centers",
    features: ["Up to 100 students", "Basic analytics", "Fee management", "Course creation", "Email support"],
    cta: "Start Free Trial",
    href: "/signup",
  },
  {
    name: "Growth",
    price: "₹2,499",
    description: "For established coaching institutes",
    features: [
      "Up to 1000 students",
      "Advanced analytics",
      "WhatsApp reminders",
      "Attendance tracking",
      "Priority support",
    ],
    cta: "Start Free Trial",
    href: "/signup",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large-scale operations",
    features: ["Unlimited students", "Custom reporting", "API access", "Dedicated account manager", "24/7 support"],
    cta: "Contact Sales",
    href: "#contact",
  },
]

export function Pricing2() {
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
        
        <div className="mx-auto grid w-full grid-cols-1 gap-6 py-12 sm:grid-cols-2 lg:grid-cols-3">
          {pricingTiers.map((tier, index) => (
            <Card
              key={index}
              className={`border transition-all duration-300 hover:translate-y-[-8px] ${
                tier.popular ? "border-primary shadow-lg relative" : "shadow-md hover:shadow-lg"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-0 right-0 mx-auto w-fit rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                  Most Popular
                </div>
              )}
              <CardContent className="p-4 sm:p-6 flex flex-col space-y-4 h-full">
                <div className="space-y-1">
                  <h3 className="text-xl sm:text-2xl font-bold">{tier.name}</h3>
                  <p className="text-sm text-muted-foreground">{tier.description}</p>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl sm:text-3xl font-bold">{tier.price}</span>
                  {tier.price !== "Custom" && <span className="text-muted-foreground">/month</span>}
                </div>
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
                    className={`w-full ${tier.popular ? "" : "bg-primary/90 hover:bg-primary"}`}
                    variant={tier.popular ? "default" : "outline"}
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