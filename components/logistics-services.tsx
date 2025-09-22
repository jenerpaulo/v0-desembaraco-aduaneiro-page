import { Card, CardContent } from "@/components/ui/card"
import { Truck, Ship, Plane, Package, MapPin, Clock } from "lucide-react"

export function LogisticsServices() {
  const services = [
    {
      icon: Truck,
      title: "Transporte Rodoviário",
      description: "Frota moderna para entregas nacionais com rastreamento em tempo real",
      color: "text-[oklch(0.65_0.25_35)]",
    },
    {
      icon: Ship,
      title: "Transporte Marítimo",
      description: "Conexões globais via portos estratégicos para cargas internacionais",
      color: "text-[oklch(0.7_0.3_200)]",
    },
    {
      icon: Plane,
      title: "Transporte Aéreo",
      description: "Entregas expressas para cargas urgentes e de alto valor",
      color: "text-[oklch(0.65_0.25_35)]",
    },
    {
      icon: Package,
      title: "Armazenagem",
      description: "Centros de distribuição estratégicos com controle de estoque",
      color: "text-[oklch(0.7_0.3_200)]",
    },
    {
      icon: MapPin,
      title: "Last Mile",
      description: "Entrega final otimizada para máxima satisfação do cliente",
      color: "text-[oklch(0.65_0.25_35)]",
    },
    {
      icon: Clock,
      title: "Logística Expressa",
      description: "Soluções urgentes com prazos garantidos e monitoramento 24/7",
      color: "text-[oklch(0.7_0.3_200)]",
    },
  ]

  return (
    <section className="py-20 bg-[oklch(0.08_0.05_240)]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Nossos <span className="text-[oklch(0.65_0.25_35)]">Serviços</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Cobertura completa para todas as suas necessidades logísticas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-[oklch(0.15_0.05_240)] border-[oklch(0.3_0.1_240)] hover:border-[oklch(0.65_0.25_35)] transition-all duration-300 group"
            >
              <CardContent className="p-8">
                <service.icon
                  className={`w-12 h-12 ${service.color} mb-6 group-hover:scale-110 transition-transform duration-300`}
                />
                <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
