import { Card, CardContent } from "@/components/ui/card"

export function ConsultoriaServicesOverview() {
  const services = [
    {
      number: "1",
      title: "Análise de Mercado",
      description: "Estudo detalhado de oportunidades internacionais e viabilidade de expansão para novos mercados.",
    },
    {
      number: "2",
      title: "Estratégia Comercial",
      description:
        "Desenvolvimento de planos estratégicos personalizados para otimizar operações de comércio exterior.",
    },
    {
      number: "3",
      title: "Implementação",
      description:
        "Acompanhamento na execução das estratégias definidas com suporte contínuo e monitoramento de resultados.",
    },
  ]

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Nossa Metodologia de Consultoria</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Seguimos uma abordagem estruturada e personalizada para maximizar o potencial do seu negócio no mercado
            internacional.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.number} className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="text-6xl font-bold text-primary mb-4">{service.number}</div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
