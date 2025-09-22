import { Button } from "@/components/ui/button"

export function ConsultoriaHeroSection() {
  return (
    <section className="relative bg-primary text-primary-foreground py-24 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: "url('/modern-business-meeting-with-international-trade-d.jpg')",
        }}
      />
      <div className="relative container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
            Consultoria de
            <span className="block text-accent-foreground">Comércio Exterior</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 leading-relaxed">
            Estratégias personalizadas para expandir seus negócios globalmente. Consultoria especializada em comércio
            internacional, análise de mercados e otimização de processos.
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
            Agendar Consultoria
          </Button>
        </div>
      </div>
    </section>
  )
}
