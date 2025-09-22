import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Clock, Shield, TrendingUp } from "lucide-react"

export function BenefitsSection() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Aliar Inovação, Durabilidade e Eficácia</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            Nossa expertise em desembaraço aduaneiro garante que sua operação de comércio exterior seja executada com
            máxima eficiência e conformidade legal.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Agilidade</h3>
              <p className="text-sm text-muted-foreground">Processos otimizados para liberação rápida</p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Conformidade</h3>
              <p className="text-sm text-muted-foreground">100% de acordo com legislação vigente</p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Economia</h3>
              <p className="text-sm text-muted-foreground">Redução de custos e otimização fiscal</p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Expertise</h3>
              <p className="text-sm text-muted-foreground">Equipe especializada e experiente</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
