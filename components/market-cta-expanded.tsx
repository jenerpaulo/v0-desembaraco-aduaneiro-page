import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Phone, Mail, Calendar } from "lucide-react"

export function MarketCTAExpanded() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <Card className="bg-gradient-to-r from-accent/10 to-primary/10 border-accent/20">
          <CardContent className="p-12 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Pronto para Transformar Seus Dados?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Entre em contato conosco e descubra como nossa inteligência de mercado pode impulsionar o crescimento da
              sua empresa.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="text-lg px-8">
                <Calendar className="mr-2 w-5 h-5" />
                Agendar Consulta
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                <Mail className="mr-2 w-5 h-5" />
                Solicitar Proposta
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-accent" />
                <span>(11) 99999-9999</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-accent" />
                <span>contato@demnpex.com.br</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
