const Footer = () => (
  <footer className="section-padding bg-foreground py-16">
    <div className="container-narrow mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <p className="font-display text-xl font-semibold text-background mb-2">Dra. Claudia</p>
          <p className="font-body text-sm text-background/50">
            Bem-estar pessoal e corporativo baseado em ciência.
          </p>
        </div>
        <div className="flex gap-8">
          {["Início", "Sobre", "Serviços", "Metodologia", "Empresas", "Contato"].map((l) => (
            <a
              key={l}
              href={`#${l === "Início" ? "home" : l.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`}
              className="font-body text-xs text-background/40 hover:text-background/70 transition-colors"
            >
              {l}
            </a>
          ))}
        </div>
      </div>
      <div className="mt-12 pt-8 border-t border-background/10 text-center">
        <p className="font-body text-xs text-background/30">
          © {new Date().getFullYear()} Dra. Claudia. Todos os direitos reservados.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
