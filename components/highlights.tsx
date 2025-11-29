"use client"
import { CheckCircle2 } from "lucide-react"

const highlights = [
  {
    metric: "98% Faster",
    description: "Time to market compared to traditional solutions",
    benefits: ["Reduced Development Time", "Quick Integration", "Immediate ROI"],
  },
  {
    metric: "300+ Apps",
    description: "Pre-built integrations with your favorite tools",
    benefits: ["Seamless Connectivity", "No Custom Code", "Growing Ecosystem"],
  },
  {
    metric: "$2.4M+",
    description: "Average annual savings for enterprise customers",
    benefits: ["Cost Reduction", "Efficiency Gains", "Revenue Growth"],
  },
]

export default function Highlights() {
  return (
    <section id="highlights" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-border/40 bg-muted/30 rounded-3xl my-10">
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">Why Teams Choose NovaFlow</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Join thousands of teams automating their workflows and achieving remarkable results.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {highlights.map((highlight, index) => (
          <div key={index} className="space-y-4 p-6 rounded-2xl bg-background border border-border/50 hover:border-accent/50 transition-colors">
            <div className="space-y-2">
              <h3 className="text-4xl md:text-5xl font-bold text-accent tracking-tight">{highlight.metric}</h3>
              <p className="text-muted-foreground font-medium">{highlight.description}</p>
            </div>
            <div className="space-y-3 pt-4 border-t border-border/40">
              {highlight.benefits.map((benefit, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="text-sm text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
