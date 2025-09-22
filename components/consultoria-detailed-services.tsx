import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function ConsultoriaDetailedServices() {
  const services = [
    {
      title: "Análise de Viabilidade",
      description:
        "Avaliação completa de oportunidades de mercado, análise de concorrência e estudos de viabilidade econômica.",
      features: ["Pesquisa de mercado", "Análise competitiva", "Projeções financeiras", "Avaliação de riscos"],
    },
    {
      title: "Planejamento Estratégico",
      description: "Desenvolvimento de estratégias personalizadas para entrada e expansão em mercados internacionais.",
      features: ["Plano de negócios", "Estratégia de entrada", "Definição de canais", "Cronograma de implementação"],
    },
    {
      title: "Otimização Operacional",
      description: "Melhoria de processos existentes e implementação de melhores práticas em comércio exterior.",
      features: ["Revisão de processos", "Redução de custos", "Automação", "Treinamento de equipes"],
    },
  ]

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Soluções Personalizadas para Cada Desafio</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            Oferecemos consultoria especializada em todas as etapas do comércio internacional, desde a concepção até a
            implementação de estratégias de expansão global.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
