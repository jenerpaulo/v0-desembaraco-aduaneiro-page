import { Badge } from "@/components/ui/badge"
import { Globe, Users, TrendingUp, Shield } from "lucide-react"

export function LogisticsNetwork() {
  const stats = [
    { icon: Globe, value: "50+", label: "Países Atendidos", color: "text-[oklch(0.65_0.25_35)]" },
    { icon: Users, value: "1000+", label: "Clientes Ativos", color: "text-[oklch(0.7_0.3_200)]" },
    { icon: TrendingUp, value: "99.8%", label: "Taxa de Entrega", color: "text-[oklch(0.65_0.25_35)]" },
    { icon: Shield, value: "24/7", label: "Monitoramento", color: "text-[oklch(0.7_0.3_200)]" },
  ]

  return (
    <section className="py-20 bg-gradient-to-r from-[oklch(0.12_0.05_240)] to-[oklch(0.15_0.08_240)]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <Badge className="bg-[oklch(0.65_0.25_35)] text-[oklch(0.12_0.05_240)] mb-6">REDE GLOBAL</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Conectando o Mundo
              <br />
              <span className="text-[oklch(0.7_0.3_200)]">com Eficiência</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Nossa rede logística integrada oferece soluções end-to-end para empresas que buscam excelência operacional
              e crescimento sustentável no mercado global.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[oklch(0.65_0.25_35)] rounded-full"></div>
                <span className="text-gray-300">Tecnologia de rastreamento avançada</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[oklch(0.7_0.3_200)] rounded-full"></div>
                <span className="text-gray-300">Parcerias estratégicas globais</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[oklch(0.65_0.25_35)] rounded-full"></div>
                <span className="text-gray-300">Otimização de rotas inteligente</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-[oklch(0.08_0.05_240)] p-8 rounded-lg border border-[oklch(0.3_0.1_240)] hover:border-[oklch(0.65_0.25_35)] transition-all duration-300"
              >
                <stat.icon className={`w-8 h-8 ${stat.color} mb-4`} />
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
