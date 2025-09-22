import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

export function MarketProcess() {
  const steps = [
    {
      number: "01",
      title: "Diagnóstico Inicial",
      description: "Avaliamos suas necessidades específicas e objetivos estratégicos para definir o escopo da análise.",
    },
    {
      number: "02",
      title: "Coleta de Dados",
      description:
        "Utilizamos fontes primárias e secundárias confiáveis para obter informações precisas e atualizadas.",
    },
    {
      number: "03",
      title: "Análise Estratégica",
      description: "Aplicamos metodologias avançadas para transformar dados brutos em insights acionáveis.",
    },
    {
      number: "04",
      title: "Relatório Executivo",
      description: "Entregamos relatórios claros com recomendações específicas e planos de ação detalhados.",
    },
    {
      number: "05",
      title: "Acompanhamento",
      description: "Oferecemos suporte contínuo para implementação das estratégias e monitoramento de resultados.",
    },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Nossa Metodologia</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Seguimos um processo estruturado e comprovado para garantir resultados precisos e acionáveis.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start gap-6 mb-8 last:mb-0">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-bold text-lg">
                  {step.number}
                </div>
              </div>

              <Card className="flex-1 border-border/50">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>

              {index < steps.length - 1 && (
                <div className="flex-shrink-0 ml-8 mt-8">
                  <ArrowRight className="w-6 h-6 text-accent" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
