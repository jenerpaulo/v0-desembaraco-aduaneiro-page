import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ServicesOverview } from "@/components/services-overview"
import { BenefitsSection } from "@/components/benefits-section"
import { DetailedServices } from "@/components/detailed-services"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function DesembaracoAduaneiroPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ServicesOverview />
      <BenefitsSection />
      <DetailedServices />
      <CTASection />
      <Footer />
    </main>
  )
}
