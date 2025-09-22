import { Button } from "@/components/ui/button"

export function ElegantHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-muted/30 to-background">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-light tracking-tight text-balance">
              Consultoria de
              <span className="block font-normal">Comércio Exterior</span>
            </h1>
            <div className="w-24 h-px bg-foreground mx-auto" />
          </div>

          <p className="text-xl md:text-2xl font-light text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
            Transformamos complexidade em oportunidade através de estratégias personalizadas para o mercado global
          </p>

          <div className="pt-8">
            <Button
              size="lg"
              className="px-12 py-6 text-lg font-light tracking-wide hover:bg-foreground/90 transition-all duration-300"
            >
              Iniciar Conversa
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-px h-16 bg-foreground/20 relative">
          <div className="absolute top-0 w-px h-4 bg-foreground animate-pulse" />
        </div>
      </div>
    </section>
  )
}
