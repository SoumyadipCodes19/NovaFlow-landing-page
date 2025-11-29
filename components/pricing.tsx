"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Starter",
    price: "$99",
    period: "/month",
    description: "Perfect for small teams just getting started",
    highlighted: false,
    features: [
      "Up to 10 workflows",
      "100 automation runs/month",
      "Basic integrations",
      "Email support",
      "7-day data retention",
    ],
  },
  {
    name: "Professional",
    price: "$299",
    period: "/month",
    description: "For growing teams with advanced needs",
    highlighted: true,
    features: [
      "Unlimited workflows",
      "Unlimited automation runs",
      "300+ integrations",
      "Priority support",
      "90-day data retention",
      "Advanced analytics",
      "Team collaboration",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "pricing",
    description: "For large organizations with custom requirements",
    highlighted: false,
    features: [
      "Everything in Professional",
      "Custom integrations",
      "24/7 dedicated support",
      "Unlimited data retention",
      "Advanced security features",
      "SLA guarantees",
      "On-premise deployment",
    ],
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-border/40">
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">Simple, Transparent Pricing</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Choose the plan that fits your team. Upgrade or downgrade anytime, no hidden fees.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 items-start">
        {plans.map((plan, index) => (
          <Card
            key={index}
            className={`relative overflow-hidden transition-all duration-300 ${
              plan.highlighted
                ? "border-accent bg-card shadow-xl shadow-accent/10 scale-105 z-10"
                : "border-border/50 bg-card hover:border-border/80 hover:shadow-md"
            }`}
          >
            {plan.highlighted && (
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-accent to-accent/50"></div>
            )}
            <CardHeader className="space-y-4">
              {plan.highlighted && (
                <div className="inline-block w-fit px-3 py-1 bg-accent/20 rounded-full text-xs font-semibold text-accent mb-2">
                  Most Popular
                </div>
              )}
              <CardTitle className="text-2xl">{plan.name}</CardTitle>
              <CardDescription className="text-base">{plan.description}</CardDescription>
              <div className="space-y-1 pt-2">
                <div className="text-4xl font-bold text-foreground">{plan.price}</div>
                <p className="text-sm text-muted-foreground">{plan.period}</p>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <Button
                className={`w-full h-11 transition-all ${
                  plan.highlighted
                    ? "bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg shadow-accent/20"
                    : "bg-muted text-foreground hover:bg-muted/80"
                }`}
              >
                Get Started
              </Button>
              <div className="space-y-3">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
