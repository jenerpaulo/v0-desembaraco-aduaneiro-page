import { Button } from "@/components/ui/button"
import { ArrowRight, TrendingUp, BarChart3, Target } from "lucide-react"

export function MarketHeroLight() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[oklch(0.08_0.05_240)] via-[oklch(0.12_0.05_240)] to-[oklch(0.15_0.08_240)] overflow-hidden">
      {/* Simplified background lines */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-[oklch(0.65_0.25_35)] to-transparent opacity-40 animate-pulse"></div>
        <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-[oklch(0.7_0.3_200)] to-transparent opacity-30 animate-pulse delay-1000"></div>
      </div>

      {/* Simple chart illustration */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 opacity-15">
        <svg width="400" height="200" viewBox="0 0 400 200" className="text-[oklch(0.7_0.3_200)]">
          <path
            d="M50 150 L100 120 L150 80 L200 100 L250 60 L300 90 L350 40"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
          />
          <circle cx="100" cy="120" r="4" fill="currentColor" />
          <circle cx="200" cy="100" r="4" fill="currentColor" />
          <circle cx="300" cy="90" r="4" fill="currentColor" />
        </svg>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20 flex items-center min-h-screen">
        <div className="max-w-3xl">
          <div className="flex items-center gap-4 mb-8">
            <div className="flex gap-2">
              <TrendingUp className="w-8 h-8 text-[oklch(0.65_0.25_35)]" />
              <BarChart3 className="w-8 h-8 text-[oklch(0.7_0.3_200)]" />
              <Target className="w-8 h-8 text-[oklch(0.65_0.25_35)]" />
            </div>
            <span className="text-[oklch(0.7_0.3_200)] font-mono text-sm tracking-wider">DEMNPEX</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Inteligência
            <br />
            <span className="text-[oklch(0.65_0.25_35)]">de</span>
            <br />
            <span className="text-[oklch(0.7_0.3_200)]">Mercado</span>
          </h1>

          <p className="text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
            Análises estratégicas e insights de mercado para impulsionar suas decisões de negócio. Transformamos dados
            em oportunidades reais de crescimento.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-[oklch(0.65_0.25_35)] hover:bg-[oklch(0.7_0.3_35)] text-[oklch(0.12_0.05_240)] font-semibold px-8 py-4 text-lg"
            >
              Solicitar Análise
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
