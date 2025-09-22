import { TrendingUp, BarChart3, Target, Globe } from "lucide-react"

export function MarketServicesLight() {
  const services = [
    {
      icon: TrendingUp,
      title: "Análise de Tendências",
      description: "Identificação de oportunidades e tendências emergentes no seu setor",
    },
    {
      icon: BarChart3,
      title: "Relatórios Estratégicos",
      description: "Relatórios detalhados com insights acionáveis para seu negócio",
    },
    {
      icon: Target,
      title: "Segmentação de Mercado",
      description: "Mapeamento preciso do seu público-alvo e concorrência",
    },
    {
      icon: Globe,
      title: "Inteligência Competitiva",
      description: "Monitoramento contínuo da concorrência e posicionamento",
    },
  ]

  return (
    <section className="py-20 bg-[oklch(0.12_0.05_240)]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Nossos <span className="text-[oklch(0.65_0.25_35)]">Serviços</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Soluções completas de inteligência de mercado para impulsionar seu crescimento
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[oklch(0.15_0.08_240)] p-6 rounded-lg border border-[oklch(0.25_0.1_240)] hover:border-[oklch(0.65_0.25_35)] transition-colors"
            >
              <service.icon className="w-12 h-12 text-[oklch(0.7_0.3_200)] mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
