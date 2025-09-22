import { ElegantHero } from "@/components/elegant-hero"
import { ElegantServices } from "@/components/elegant-services"
import { ElegantApproach } from "@/components/elegant-approach"
import { ElegantCTA } from "@/components/elegant-cta"

export default function ConsultoriaV2Page() {
  return (
    <div className="elegant-theme min-h-screen">
      <ElegantHero />
      <ElegantServices />
      <ElegantApproach />
      <ElegantCTA />
    </div>
  )
}
