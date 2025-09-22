import { Card } from "@/components/ui/card"

const services = [
  {
    number: "01",
    title: "Análise de Mercado",
    description:
      "Estudos aprofundados sobre mercados-alvo, identificação de oportunidades e análise de viabilidade comercial para expansão internacional.",
  },
  {
    number: "02",
    title: "Planejamento Estratégico",
    description:
      "Desenvolvimento de estratégias customizadas para entrada em novos mercados, considerando aspectos regulatórios e culturais.",
  },
  {
    number: "03",
    title: "Otimização Operacional",
    description:
      "Melhoria de processos logísticos, redução de custos e implementação de melhores práticas em operações internacionais.",
  },
  {
    number: "04",
    title: "Compliance Internacional",
    description:
      "Adequação às normas e regulamentações internacionais, garantindo conformidade em todas as operações comerciais.",
  },
]

export function ElegantServices() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-light tracking-tight mb-6 text-balance">Nossos Pilares</h2>
          <div className="w-16 h-px bg-foreground mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-8 lg:p-12 border-0 shadow-none bg-muted/30 hover:bg-muted/50 transition-all duration-500 group"
            >
              <div className="space-y-6">
                <div className="flex items-center space-x-6">
                  <span className="text-6xl font-light text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                    {service.number}
                  </span>
                  <div className="w-12 h-px bg-muted-foreground group-hover:bg-foreground transition-colors duration-300" />
                </div>

                <h3 className="text-2xl font-light tracking-wide">{service.title}</h3>

                <p className="text-muted-foreground leading-relaxed text-lg">{service.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
