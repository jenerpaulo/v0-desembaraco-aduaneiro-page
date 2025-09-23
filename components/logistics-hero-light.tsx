import { Button } from "@/components/ui/button"
import { ArrowRight, Truck, Ship, Plane } from "lucide-react"

export function LogisticsHeroLight() {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-slate-100"></div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                Logística
                <span className="block text-blue-600">Nacional e Internacional</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                Soluções completas de transporte e distribuição para suas mercadorias com tecnologia avançada e rede
                global de parceiros.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                Solicitar Cotação
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-blue-200 text-blue-700 hover:bg-blue-50 bg-transparent"
              >
                Rastrear Envio
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Truck className="h-6 w-6 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-slate-900">500+</div>
                <div className="text-sm text-slate-600">Rotas Terrestres</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Ship className="h-6 w-6 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-slate-900">50+</div>
                <div className="text-sm text-slate-600">Portos Conectados</div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Plane className="h-6 w-6 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-slate-900">100+</div>
                <div className="text-sm text-slate-600">Aeroportos</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-blue-100 to-slate-200 rounded-2xl p-8 flex items-center justify-center">
              <div className="w-full h-full bg-white rounded-xl shadow-lg flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto">
                    <Truck className="h-10 w-10 text-white" />
                  </div>
                  <div className="text-lg font-semibold text-slate-900">Logística Inteligente</div>
                  <div className="text-sm text-slate-600">Conectando o mundo</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
