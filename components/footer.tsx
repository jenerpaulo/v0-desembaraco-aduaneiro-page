export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">DEMNPEX</h3>
            <p className="text-sm text-secondary-foreground/80 leading-relaxed">
              Sua ponte para o mercado global. Especialistas em comércio exterior e logística internacional.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-accent-foreground transition-colors">
                  Desembaraço Aduaneiro
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent-foreground transition-colors">
                  Logística Internacional
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent-foreground transition-colors">
                  Consultoria
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-accent-foreground transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent-foreground transition-colors">
                  Equipe
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent-foreground transition-colors">
                  Carreiras
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <div className="space-y-2 text-sm">
              <p>(13) 99704-8300</p>
              <p>contato@demnpex.com.br</p>
              <p>Santos, SP</p>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center text-sm text-secondary-foreground/60">
          <p>&copy; 2024 DEMNPEX. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
