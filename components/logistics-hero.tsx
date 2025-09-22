import { Button } from "@/components/ui/button"
import { ArrowRight, Truck, Ship, Plane } from "lucide-react"

export function LogisticsHero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[oklch(0.08_0.05_240)] via-[oklch(0.12_0.05_240)] to-[oklch(0.15_0.08_240)] overflow-hidden">
      {/* Animated background lines */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[oklch(0.65_0.25_35)] to-transparent opacity-60 animate-pulse"></div>
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-[oklch(0.7_0.3_200)] to-transparent opacity-40 animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[oklch(0.65_0.25_35)] to-transparent opacity-50 animate-pulse delay-2000"></div>
      </div>

      {/* Truck wireframe illustration */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 opacity-20">
        <svg width="600" height="300" viewBox="0 0 600 300" className="text-[oklch(0.7_0.3_200)]">
          <rect x="50" y="100" width="200" height="120" fill="none" stroke="currentColor" strokeWidth="2" />
          <rect x="250" y="80" width="150" height="140" fill="none" stroke="currentColor" strokeWidth="2" />
          <circle cx="100" cy="240" r="25" fill="none" stroke="currentColor" strokeWidth="2" />
          <circle cx="200" cy="240" r="25" fill="none" stroke="currentColor" strokeWidth="2" />
          <circle cx="350" cy="240" r="25" fill="none" stroke="currentColor" strokeWidth="2" />
          <path
            d="M50 100 L250 80 L400 80 L400 220 L50 220 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            opacity="0.5"
          />
        </svg>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20 flex items-center min-h-screen">
        <div className="max-w-3xl">
          <div className="flex items-center gap-4 mb-8">
            <div className="flex gap-2">
              <Truck className="w-8 h-8 text-[oklch(0.65_0.25_35)]" />
              <Ship className="w-8 h-8 text-[oklch(0.7_0.3_200)]" />
              <Plane className="w-8 h-8 text-[oklch(0.65_0.25_35)]" />
            </div>
            <span className="text-[oklch(0.7_0.3_200)] font-mono text-sm tracking-wider">DEMNPEX</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
            Logística
            <br />
            <span className="text-[oklch(0.65_0.25_35)]">Nacional</span>
            <br />
            <span className="text-[oklch(0.7_0.3_200)]">& Internacional</span>
          </h1>

          <p className="text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
            Soluções completas de transporte e distribuição para suas mercadorias. Conectamos seu negócio ao mundo com
            tecnologia avançada e eficiência comprovada.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-[oklch(0.65_0.25_35)] hover:bg-[oklch(0.7_0.3_35)] text-[oklch(0.12_0.05_240)] font-semibold px-8 py-4 text-lg"
            >
              Solicitar Cotação
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-[oklch(0.7_0.3_200)] text-[oklch(0.7_0.3_200)] hover:bg-[oklch(0.7_0.3_200)] hover:text-[oklch(0.12_0.05_240)] px-8 py-4 text-lg bg-transparent"
            >
              Rastrear Envio
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
