import { Button } from "@/components/ui/button"
import { ArrowRight, TrendingUp, BarChart3, Globe } from "lucide-react"

export function MarketHeroExpanded() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/30" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent font-medium text-sm mb-6">
            <TrendingUp className="w-4 h-4" />
            Inteligência de Mercado Estratégica
          </div>

          <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
            Transforme Dados em <span className="text-accent">Decisões Estratégicas</span>
          </h1>

          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
            Nossa inteligência de mercado oferece análises profundas e insights acionáveis para posicionar sua empresa à
            frente da concorrência no mercado global.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="text-lg px-8">
              Solicitar Análise
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
              Ver Relatórios
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Análise de Mercado</h3>
              <p className="text-sm text-muted-foreground">Insights detalhados sobre tendências e oportunidades</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Inteligência Global</h3>
              <p className="text-sm text-muted-foreground">Monitoramento de mercados internacionais</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Previsões Estratégicas</h3>
              <p className="text-sm text-muted-foreground">Projeções baseadas em dados confiáveis</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
