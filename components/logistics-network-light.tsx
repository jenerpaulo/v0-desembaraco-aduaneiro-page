import { Globe, Users, Award, TrendingUp } from "lucide-react"

export function LogisticsNetworkLight() {
  const stats = [
    {
      icon: Globe,
      number: "50+",
      label: "Países Atendidos",
      description: "Rede global de parceiros estratégicos",
    },
    {
      icon: Users,
      number: "10K+",
      label: "Clientes Ativos",
      description: "Empresas que confiam em nossos serviços",
    },
    {
      icon: Award,
      number: "99.8%",
      label: "Taxa de Entrega",
      description: "Pontualidade e confiabilidade comprovadas",
    },
    {
      icon: TrendingUp,
      number: "24/7",
      label: "Monitoramento",
      description: "Acompanhamento contínuo das operações",
    },
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Nossa Rede Global</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Uma infraestrutura logística robusta que conecta mercados globais com eficiência e confiabilidade
            incomparáveis.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center mx-auto mb-4">
                <stat.icon className="h-8 w-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-slate-900 mb-2">{stat.number}</div>
              <div className="text-lg font-semibold text-slate-900 mb-2">{stat.label}</div>
              <div className="text-sm text-slate-600">{stat.description}</div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Tecnologia de Ponta</h3>
              <p className="text-slate-600 mb-6">
                Utilizamos as mais avançadas tecnologias de rastreamento, roteirização e gestão de frotas para garantir
                máxima eficiência em todas as operações.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-slate-700">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Sistema de rastreamento em tempo real
                </li>
                <li className="flex items-center text-slate-700">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Inteligência artificial para otimização de rotas
                </li>
                <li className="flex items-center text-slate-700">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Integração com sistemas ERP e WMS
                </li>
                <li className="flex items-center text-slate-700">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Relatórios analíticos avançados
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-slate-200 rounded-xl p-8 text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">IoT</div>
              <div className="text-lg font-semibold text-slate-900 mb-2">Internet das Coisas</div>
              <div className="text-sm text-slate-600">
                Sensores inteligentes monitoram temperatura, umidade e localização em tempo real para máxima segurança
                da carga.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
