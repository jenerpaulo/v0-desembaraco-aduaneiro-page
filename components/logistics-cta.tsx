import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, Mail } from "lucide-react"

export function LogisticsCTA() {
  return (
    <section className="py-20 bg-[oklch(0.05_0.05_240)] relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-[oklch(0.65_0.25_35)] to-transparent"></div>
        <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-[oklch(0.7_0.3_200)] to-transparent"></div>
        <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-[oklch(0.65_0.25_35)] to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Pronto para
            <br />
            <span className="text-[oklch(0.65_0.25_35)]">Acelerar</span> seu Negócio?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Entre em contato conosco e descubra como nossa expertise em logística pode transformar sua cadeia de
            suprimentos.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-[oklch(0.65_0.25_35)] hover:bg-[oklch(0.7_0.3_35)] text-[oklch(0.12_0.05_240)] font-semibold px-8 py-4 text-lg"
            >
              <Phone className="mr-2 w-5 h-5" />
              Falar com Especialista
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-[oklch(0.7_0.3_200)] text-[oklch(0.7_0.3_200)] hover:bg-[oklch(0.7_0.3_200)] hover:text-[oklch(0.12_0.05_240)] px-8 py-4 text-lg bg-transparent"
            >
              <Mail className="mr-2 w-5 h-5" />
              Solicitar Proposta
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-2xl font-bold text-[oklch(0.65_0.25_35)] mb-2">+55 11 9999-9999</div>
              <div className="text-gray-300">Atendimento 24/7</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-[oklch(0.7_0.3_200)] mb-2">logistica@demnpex.com.br</div>
              <div className="text-gray-300">Resposta em até 2h</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-[oklch(0.65_0.25_35)] mb-2">São Paulo, SP</div>
              <div className="text-gray-300">Hub Principal</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
