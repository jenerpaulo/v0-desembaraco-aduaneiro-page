import { MarketHeroExpanded } from "@/components/market-hero-expanded"
import { MarketServicesExpanded } from "@/components/market-services-expanded"
import { MarketProcess } from "@/components/market-process"
import { MarketStats } from "@/components/market-stats"
import { MarketCTAExpanded } from "@/components/market-cta-expanded"

export default function InteligenciaMercadoPage() {
  return (
    <div className="light-theme">
      <MarketHeroExpanded />
      <MarketServicesExpanded />
      <MarketProcess />
      <MarketStats />
      <MarketCTAExpanded />
    </div>
  )
}
