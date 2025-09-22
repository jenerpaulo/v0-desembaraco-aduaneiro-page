import { Card, CardContent } from "@/components/ui/card"
import { Target, Users, BarChart3, Globe } from "lucide-react"

export function ConsultoriaBenefitsSection() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Transforme Sua Visão em Resultados</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            Nossa consultoria especializada oferece insights estratégicos e soluções práticas para acelerar seu
            crescimento no mercado internacional.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <Target className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Foco Estratégico</h3>
              <p className="text-sm text-muted-foreground">Direcionamento preciso para oportunidades reais</p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <Users className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Expertise</h3>
              <p className="text-sm text-muted-foreground">Consultores especializados em comércio exterior</p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <BarChart3 className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Resultados</h3>
              <p className="text-sm text-muted-foreground">Crescimento mensurável e sustentável</p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <Globe className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Visão Global</h3>
              <p className="text-sm text-muted-foreground">Perspectiva internacional abrangente</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
