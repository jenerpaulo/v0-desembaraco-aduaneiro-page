import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="text-xl font-bold">DEMNPEX</div>
            <div className="hidden md:flex space-x-6">
              <a href="#" className="hover:text-accent-foreground transition-colors">
                Serviços
              </a>
              <a href="#" className="hover:text-accent-foreground transition-colors">
                Sobre
              </a>
              <a href="#" className="hover:text-accent-foreground transition-colors">
                Vantagens
              </a>
              <a href="#" className="hover:text-accent-foreground transition-colors">
                Contato
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm">(13) 99704-8300</span>
            <Button variant="secondary" size="sm">
              Solicitar Orçamento
            </Button>
          </div>
        </nav>
      </div>
    </header>
  )
}
