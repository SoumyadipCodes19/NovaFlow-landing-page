"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Zap, Brain, Lock, Gauge, BarChart3, Users } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Instant Automation",
    description:
      "Set up workflows in minutes without writing a single line of code. Our intuitive builder handles complexity.",
  },
  {
    icon: Brain,
    title: "AI-Powered Intelligence",
    description:
      "Leverage advanced AI to predict patterns, optimize workflows, and make smarter decisions automatically.",
  },
  {
    icon: Lock,
    title: "Enterprise Security",
    description: "Bank-level encryption and compliance with SOC 2, GDPR, and HIPAA to keep your data protected.",
  },
  {
    icon: Gauge,
    title: "Real-Time Performance",
    description: "Monitor and optimize every workflow with detailed analytics and performance insights.",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Gain actionable insights with comprehensive dashboards and custom reporting.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Work seamlessly with your team with built-in collaboration tools and permission management.",
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
          Powerful Features Built for Teams
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Everything you need to automate your workflows and scale your operations efficiently.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => {
          const Icon = feature.icon
          return (
            <Card
              key={index}
              className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group"
            >
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Icon className="h-6 w-6 text-accent" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </section>
  )
}
