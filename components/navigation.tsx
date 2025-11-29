"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

import Image from "next/image"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed w-full top-0 z-50 border-b border-border/40 backdrop-blur-md bg-background/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className="relative w-8 h-8">
              <Image src="/logo.png" alt="NovaFlow Logo" fill className="object-contain" />
            </div>
            <span className="font-bold text-lg hidden sm:inline">NovaFlow</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#features" className="text-sm text-muted-foreground hover:text-foreground transition">
              Features
            </Link>
            <Link href="#highlights" className="text-sm text-muted-foreground hover:text-foreground transition">
              Why NovaFlow
            </Link>
            <Link href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition">
              Pricing
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 hover:bg-muted rounded-lg transition">
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          <Button className="hidden md:block bg-accent text-accent-foreground hover:bg-accent/90">Get Started</Button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-3 border-t border-border/40 pt-4">
            <Link href="#features" className="block text-sm text-muted-foreground hover:text-foreground">
              Features
            </Link>
            <Link href="#highlights" className="block text-sm text-muted-foreground hover:text-foreground">
              Why NovaFlow
            </Link>
            <Link href="#pricing" className="block text-sm text-muted-foreground hover:text-foreground">
              Pricing
            </Link>
            <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">Get Started</Button>
          </div>
        )}
      </div>
    </nav>
  )
}
