import { Card, CardContent } from "@/components/ui/card"
import { Truck, Ship, Plane, Package, MapPin, Clock, Shield, BarChart3 } from "lucide-react"

export function LogisticsServicesLight() {
  const services = [
    {
      icon: Truck,
      title: "Transporte Rodoviário",
      description: "Frota moderna e rastreamento em tempo real para entregas terrestres eficientes.",
      features: ["Rastreamento GPS", "Frota própria", "Entregas expressas"],
    },
    {
      icon: Ship,
      title: "Transporte Marítimo",
      description: "Conexões globais através dos principais portos mundiais com segurança total.",
      features: ["FCL e LCL", "Portos globais", "Seguro incluso"],
    },
    {
      icon: Plane,
      title: "Transporte Aéreo",
      description: "Soluções rápidas para cargas urgentes com rede internacional de aeroportos.",
      features: ["Entregas 24h", "Carga especial", "Rede global"],
    },
    {
      icon: Package,
      title: "Armazenagem",
      description: "Centros de distribuição estratégicos com tecnologia de gestão avançada.",
      features: ["WMS integrado", "Controle climático", "Segurança 24h"],
    },
    {
      icon: MapPin,
      title: "Last Mile",
      description: "Entrega final otimizada com tecnologia de roteirização inteligente.",
      features: ["Roteirização IA", "Entrega agendada", "Proof of delivery"],
    },
    {
      icon: Clock,
      title: "Logística Expressa",
      description: "Serviços urgentes com prazos garantidos e monitoramento contínuo.",
      features: ["Same day", "Prazos garantidos", "Monitoramento 24h"],
    },
    {
      icon: Shield,
      title: "Seguro de Cargas",
      description: "Proteção completa para suas mercadorias durante todo o processo logístico.",
      features: ["Cobertura total", "Sinistros ágeis", "Consultoria"],
    },
    {
      icon: BarChart3,
      title: "Analytics Logístico",
      description: "Relatórios detalhados e KPIs para otimização contínua da sua operação.",
      features: ["Dashboards", "KPIs customizados", "Relatórios automáticos"],
    },
  ]

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Soluções Logísticas Completas</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Oferecemos uma gama completa de serviços logísticos para atender todas as necessidades do seu negócio, desde
            o transporte até a entrega final.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border-slate-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg"
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-slate-600 text-sm mb-4 leading-relaxed">{service.description}</p>
                <ul className="space-y-1">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-xs text-blue-600 flex items-center">
                      <div className="w-1 h-1 bg-blue-600 rounded-full mr-2"></div>
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
