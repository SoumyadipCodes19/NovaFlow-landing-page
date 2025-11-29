"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-accent/20 blur-[100px] rounded-full -z-10 opacity-50 pointer-events-none" />
      
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="space-y-3">
            <div className="inline-block px-3 py-1 bg-accent/10 rounded-full text-xs font-semibold text-accent border border-accent/20">
              Welcome to NovaFlow
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
              Automate Your Work, Amplify Your Impact
            </h1>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed text-balance max-w-lg">
            Meet the AI-powered platform that transforms how teams work. Automate repetitive tasks, streamline
            workflows, and focus on what truly matters.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90 text-base h-12 px-8 group shadow-lg shadow-accent/20 transition-all hover:scale-105">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" className="text-base h-12 px-8 gap-2 bg-background/50 backdrop-blur-sm hover:bg-accent/10 border-accent/20 transition-all hover:scale-105">
              <Play className="h-5 w-5 fill-current" />
              Watch Demo
            </Button>
          </div>
        </div>

        <div className="relative group perspective-1000">
          <div className="bg-gradient-to-tr from-accent/20 to-accent/5 rounded-2xl border border-accent/20 overflow-hidden shadow-2xl transition-transform duration-500 group-hover:rotate-y-2 group-hover:rotate-x-2">
            <Image 
              src="/hero-dashboard.png" 
              alt="NovaFlow Dashboard" 
              width={1200}
              height={800}
              className="w-full h-auto opacity-90 hover:opacity-100 transition-opacity duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
