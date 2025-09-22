import { ConsultoriaHeroSection } from "@/components/consultoria-hero-section"
import { ConsultoriaServicesOverview } from "@/components/consultoria-services-overview"
import { ConsultoriaBenefitsSection } from "@/components/consultoria-benefits-section"
import { ConsultoriaDetailedServices } from "@/components/consultoria-detailed-services"
import { ConsultoriaCTASection } from "@/components/consultoria-cta-section"

export default function ConsultoriaComercioExteriorPage() {
  return (
    <main className="min-h-screen">
      <ConsultoriaHeroSection />
      <ConsultoriaServicesOverview />
      <ConsultoriaBenefitsSection />
      <ConsultoriaDetailedServices />
      <ConsultoriaCTASection />
    </main>
  )
}
