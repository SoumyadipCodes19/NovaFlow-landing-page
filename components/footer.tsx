"use client"

import Link from "next/link"
import { Mail, Linkedin, Twitter } from "lucide-react"

import Image from "next/image"

export default function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="relative w-8 h-8">
                <Image src="/logo.png" alt="NovaFlow Logo" fill className="object-contain" />
              </div>
              <span className="font-bold text-lg">NovaFlow</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Automate your workflows and transform how your team works with our intelligent platform.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold text-foreground text-sm">Product</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-accent transition-colors duration-200 block hover:translate-x-1 transform">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-accent transition-colors duration-200 block hover:translate-x-1 transform">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-accent transition-colors duration-200 block hover:translate-x-1 transform">
                  Documentation
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold text-foreground text-sm">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-accent transition-colors duration-200 block hover:translate-x-1 transform">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-accent transition-colors duration-200 block hover:translate-x-1 transform">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-accent transition-colors duration-200 block hover:translate-x-1 transform">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold text-foreground text-sm">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-accent transition-colors duration-200 block hover:translate-x-1 transform">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-accent transition-colors duration-200 block hover:translate-x-1 transform">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-accent transition-colors duration-200 block hover:translate-x-1 transform">
                  Security
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/40 pt-8 space-y-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">© 2025 NovaFlow. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <Link
                href="#"
                className="w-10 h-10 rounded-lg bg-muted hover:bg-accent/20 flex items-center justify-center text-muted-foreground hover:text-accent transition-all duration-300 hover:scale-110"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 rounded-lg bg-muted hover:bg-accent/20 flex items-center justify-center text-muted-foreground hover:text-accent transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 rounded-lg bg-muted hover:bg-accent/20 flex items-center justify-center text-muted-foreground hover:text-accent transition-all duration-300 hover:scale-110"
              >
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
