import { Card, CardContent } from "@/components/ui/card"

export function MarketStats() {
  const stats = [
    {
      number: "500+",
      label: "Relatórios Entregues",
      description: "Análises estratégicas realizadas",
    },
    {
      number: "95%",
      label: "Taxa de Precisão",
      description: "Em nossas previsões de mercado",
    },
    {
      number: "150+",
      label: "Empresas Atendidas",
      description: "Clientes satisfeitos globalmente",
    },
    {
      number: "24h",
      label: "Tempo de Resposta",
      description: "Para análises urgentes",
    },
  ]

  return (
    <section className="py-20 bg-accent/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Resultados Comprovados</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nossa experiência e metodologia garantem insights precisos que geram resultados reais para nossos clientes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center border-border/50 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="text-4xl lg:text-5xl font-bold text-accent mb-2">{stat.number}</div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{stat.label}</h3>
                <p className="text-sm text-muted-foreground">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
