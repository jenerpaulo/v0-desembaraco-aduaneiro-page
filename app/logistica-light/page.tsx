import { LogisticsHeroLight } from "@/components/logistics-hero-light"
import { LogisticsServicesLight } from "@/components/logistics-services-light"
import { LogisticsNetworkLight } from "@/components/logistics-network-light"
import { LogisticsCTALight } from "@/components/logistics-cta-light"

export default function LogisticaLightPage() {
  return (
    <div className="light-theme">
      <LogisticsHeroLight />
      <LogisticsServicesLight />
      <LogisticsNetworkLight />
      <LogisticsCTALight />
    </div>
  )
}
