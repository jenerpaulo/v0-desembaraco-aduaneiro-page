import { Button } from "@/components/ui/button"
import { ArrowRight, Mail, Phone } from "lucide-react"

export function MarketCTALight() {
  return (
    <section className="py-20 bg-gradient-to-r from-[oklch(0.08_0.05_240)] to-[oklch(0.15_0.08_240)]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          Pronto para <span className="text-[oklch(0.65_0.25_35)]">Crescer</span>?
        </h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Entre em contato conosco e descubra como nossa inteligência de mercado pode transformar seu negócio.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-[oklch(0.65_0.25_35)] hover:bg-[oklch(0.7_0.3_35)] text-[oklch(0.12_0.05_240)] font-semibold px-8 py-4 text-lg"
          >
            <Mail className="mr-2 w-5 h-5" />
            Fale Conosco
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>

          <div className="flex items-center gap-2 text-[oklch(0.7_0.3_200)]">
            <Phone className="w-5 h-5" />
            <span className="font-mono">(11) 9999-9999</span>
          </div>
        </div>
      </div>
    </section>
  )
}
