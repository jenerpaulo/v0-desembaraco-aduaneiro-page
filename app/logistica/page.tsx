import { LogisticsHero } from "@/components/logistics-hero"
import { LogisticsServices } from "@/components/logistics-services"
import { LogisticsNetwork } from "@/components/logistics-network"
import { LogisticsCTA } from "@/components/logistics-cta"

export default function LogisticaPage() {
  return (
    <div className="logistics-theme">
      <LogisticsHero />
      <LogisticsServices />
      <LogisticsNetwork />
      <LogisticsCTA />
    </div>
  )
}
