import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, Mail, MapPin } from "lucide-react"

export function LogisticsCTALight() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-12 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Pronto para Otimizar sua Logística?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Entre em contato conosco e descubra como podemos transformar sua operação logística com soluções
            personalizadas e tecnologia de ponta.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50">
              Solicitar Cotação
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
            >
              Agendar Reunião
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-3">
                <Phone className="h-6 w-6" />
              </div>
              <div className="font-semibold mb-1">Telefone</div>
              <div className="opacity-90">+55 (11) 3000-0000</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-3">
                <Mail className="h-6 w-6" />
              </div>
              <div className="font-semibold mb-1">E-mail</div>
              <div className="opacity-90">logistica@demnpex.com.br</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-3">
                <MapPin className="h-6 w-6" />
              </div>
              <div className="font-semibold mb-1">Endereço</div>
              <div className="opacity-90">São Paulo, SP</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
