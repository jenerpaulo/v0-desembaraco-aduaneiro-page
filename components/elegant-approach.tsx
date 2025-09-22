import { Card } from "@/components/ui/card"

export function ElegantApproach() {
  return (
    <section className="py-32 px-6 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-light tracking-tight text-balance">
                Uma abordagem global para um modelo de crescimento
              </h2>
              <div className="w-16 h-px bg-foreground" />
            </div>

            <p className="text-xl text-muted-foreground leading-relaxed">
              Nossa metodologia combina análise quantitativa rigorosa com insights qualitativos profundos, criando
              estratégias que transcendem fronteiras e culturas empresariais.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8">
              <div className="text-center space-y-2">
                <div className="text-3xl font-light">150+</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">Projetos</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-3xl font-light">25+</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">Países</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-3xl font-light">98%</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">Sucesso</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <Card className="p-8 border-0 shadow-none bg-background/80 backdrop-blur-sm">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-foreground/10 rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 bg-foreground rounded-full" />
                </div>
                <h3 className="text-xl font-light">Diagnóstico Estratégico</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Análise completa da posição atual da empresa no mercado internacional
                </p>
              </div>
            </Card>

            <Card className="p-8 border-0 shadow-none bg-background/80 backdrop-blur-sm ml-8">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-foreground/10 rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 bg-foreground rounded-full" />
                </div>
                <h3 className="text-xl font-light">Implementação Guiada</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Acompanhamento próximo durante toda a execução da estratégia definida
                </p>
              </div>
            </Card>

            <Card className="p-8 border-0 shadow-none bg-background/80 backdrop-blur-sm">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-foreground/10 rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 bg-foreground rounded-full" />
                </div>
                <h3 className="text-xl font-light">Monitoramento Contínuo</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Avaliação constante de resultados e ajustes estratégicos quando necessário
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
