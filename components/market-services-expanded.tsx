import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, FileText, Users, Target, Zap, PieChart, Briefcase } from "lucide-react"

export function MarketServicesExpanded() {
  const services = [
    {
      icon: Search,
      title: "Pesquisa de Mercado",
      description: "Análises aprofundadas de segmentos, concorrentes e oportunidades de negócio.",
      features: ["Análise competitiva", "Segmentação de mercado", "Identificação de nichos"],
      badge: "Essencial",
    },
    {
      icon: FileText,
      title: "Relatórios Estratégicos",
      description: "Documentos executivos com insights acionáveis para tomada de decisão.",
      features: ["Relatórios mensais", "Dashboards interativos", "Alertas de mercado"],
      badge: "Popular",
    },
    {
      icon: Users,
      title: "Análise de Consumidor",
      description: "Compreensão profunda do comportamento e preferências do público-alvo.",
      features: ["Perfil demográfico", "Jornada do cliente", "Análise de satisfação"],
      badge: "Insights",
    },
    {
      icon: Target,
      title: "Posicionamento Estratégico",
      description: "Definição de posicionamento competitivo e estratégias de diferenciação.",
      features: ["Matriz de posicionamento", "Proposta de valor", "Estratégia de marca"],
      badge: "Estratégico",
    },
    {
      icon: PieChart,
      title: "Análise de Tendências",
      description: "Monitoramento contínuo de tendências e mudanças no mercado.",
      features: ["Radar de tendências", "Análise preditiva", "Cenários futuros"],
      badge: "Futuro",
    },
    {
      icon: Briefcase,
      title: "Due Diligence Comercial",
      description: "Avaliação detalhada de oportunidades de investimento e parcerias.",
      features: ["Análise de viabilidade", "Avaliação de riscos", "Projeções financeiras"],
      badge: "Premium",
    },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Nossos Serviços de Inteligência</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Oferecemos uma gama completa de serviços para transformar informações em vantagem competitiva sustentável.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border/50">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <service.icon className="w-6 h-6 text-accent" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {service.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <Zap className="w-4 h-4 text-accent mr-2 flex-shrink-0" />
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
