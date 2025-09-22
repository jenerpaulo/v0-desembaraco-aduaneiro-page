import { Button } from "@/components/ui/button"

export function ConsultoriaCTASection() {
  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Pronto para Expandir Globalmente?</h2>
          <p className="text-xl mb-8 text-primary-foreground/90 leading-relaxed">
            Agende uma consultoria personalizada e descubra como podemos acelerar o crescimento do seu negócio no
            mercado internacional com estratégias comprovadas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
              Agendar Consultoria
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-3 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              Solicitar Proposta
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
