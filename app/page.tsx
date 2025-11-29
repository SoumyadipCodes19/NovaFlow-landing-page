import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import Features from "@/components/features"
import Integrations from "@/components/integrations"
import Highlights from "@/components/highlights"
import Pricing from "@/components/pricing"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-background">
      <Navigation />
      <Hero />
      <Features />
      <Integrations />
      <Highlights />
      <Pricing />
      <Footer />
    </div>
  )
}
