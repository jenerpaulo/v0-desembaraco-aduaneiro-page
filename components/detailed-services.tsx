import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function DetailedServices() {
  const services = [
    {
      title: "Importação",
      description:
        "Gestão completa do processo de importação, desde a análise da documentação até a liberação da mercadoria.",
      features: ["Licenciamento de importação", "Registro DI", "Acompanhamento alfandegário", "Liberação da carga"],
    },
    {
      title: "Exportação",
      description: "Suporte integral para exportações, garantindo conformidade e agilidade nos processos.",
      features: ["Registro RE", "Documentação consular", "Certificados de origem", "Embarque da mercadoria"],
    },
    {
      title: "Regimes Especiais",
      description: "Expertise em regimes aduaneiros especiais para otimização fiscal e operacional.",
      features: ["Drawback", "Entreposto aduaneiro", "Admissão temporária", "Trânsito aduaneiro"],
    },
  ]

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Uma Abordagem Global para um Modelo de Futuro</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            Oferecemos soluções completas em desembaraço aduaneiro, adaptadas às necessidades específicas de cada
            operação de comércio exterior.
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
