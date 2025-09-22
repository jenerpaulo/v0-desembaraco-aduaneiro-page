import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export function ElegantCTA() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <Card className="p-12 lg:p-16 border-0 shadow-none bg-foreground text-background text-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-light tracking-tight text-balance">
                Pronto para expandir seus horizontes?
              </h2>
              <div className="w-16 h-px bg-background/30 mx-auto" />
            </div>

            <p className="text-xl font-light text-background/80 max-w-2xl mx-auto text-balance leading-relaxed">
              Vamos conversar sobre como podemos transformar seus desafios em oportunidades de crescimento global
            </p>

            <div className="pt-4">
              <Button
                variant="outline"
                size="lg"
                className="px-12 py-6 text-lg font-light tracking-wide bg-transparent border-background/30 text-background hover:bg-background hover:text-foreground transition-all duration-300"
              >
                Agendar Consulta
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
