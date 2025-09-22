import { Card, CardContent } from "@/components/ui/card"

export function ServicesOverview() {
  const services = [
    {
      number: "1",
      title: "Análise Documental",
      description: "Revisão completa de toda documentação necessária para o processo de importação e exportação.",
    },
    {
      number: "2",
      title: "Classificação Fiscal",
      description: "Determinação precisa do código NCM e cálculo correto de impostos e taxas aduaneiras.",
    },
    {
      number: "3",
      title: "Liberação Alfandegária",
      description: "Acompanhamento integral do processo junto aos órgãos fiscalizadores até a liberação da carga.",
    },
  ]

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Nossos Processos Principais</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Seguimos um processo estruturado e eficiente para garantir o desembaraço aduaneiro sem complicações.
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
