import AnimatedSection from "./AnimatedSection";

const personalBenefits = [
  { num: "01", title: "Equilíbrio Emocional", desc: "Desenvolva inteligência emocional e resiliência para navegar os desafios da vida com mais leveza." },
  { num: "02", title: "Clareza Mental", desc: "Reduza o ruído mental e tome decisões com mais confiança e consciência." },
  { num: "03", title: "Qualidade de Vida", desc: "Construa hábitos sustentáveis que promovam saúde integral e satisfação genuína." },
];

const corpBenefits = [
  { num: "01", title: "Engajamento de Equipes", desc: "Colaboradores engajados e emocionalmente saudáveis entregam mais e melhor." },
  { num: "02", title: "Produtividade Sustentável", desc: "Performance que nasce do bem-estar, não do esgotamento." },
  { num: "03", title: "Clima Organizacional", desc: "Ambientes de trabalho que atraem, retêm e desenvolvem os melhores talentos." },
];

const BenefitCard = ({ num, title, desc, delay }: { num: string; title: string; desc: string; delay: number }) => (
  <AnimatedSection delay={delay} className="group">
    <div className="relative h-full p-8 rounded-3xl border border-border/60 bg-card transition-all duration-500 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/[0.04] overflow-hidden">
      {/* Decorative number */}
      <span className="absolute -top-4 -right-2 font-display text-[120px] font-bold leading-none text-muted/50 select-none pointer-events-none">
        {num}
      </span>
      <div className="relative z-10">
        <div className="w-8 h-px bg-gold mb-6" />
        <h3 className="font-display text-xl font-semibold text-foreground mb-3">{title}</h3>
        <p className="font-body text-sm text-muted-foreground leading-relaxed">{desc}</p>
      </div>
    </div>
  </AnimatedSection>
);

const Benefits = () => (
  <section className="section-padding bg-background">
    <div className="container-narrow mx-auto">
      {/* Personal */}
      <AnimatedSection className="mb-16">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-px bg-primary" />
          <p className="font-body text-sm font-medium tracking-[0.2em] uppercase text-primary">Bem-estar Pessoal</p>
        </div>
        <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground mb-4 max-w-2xl leading-tight">
          O cuidado que transforma de dentro para fora
        </h2>
        <p className="font-body text-muted-foreground max-w-xl">
          Abordagem integrada para quem deseja viver com mais presença, propósito e plenitude.
        </p>
      </AnimatedSection>

      <div className="grid md:grid-cols-3 gap-5 mb-32">
        {personalBenefits.map((b, i) => (
          <BenefitCard key={b.title} {...b} delay={i * 0.1} />
        ))}
      </div>

      {/* Corporate */}
      <AnimatedSection className="mb-16">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-px bg-primary" />
          <p className="font-body text-sm font-medium tracking-[0.2em] uppercase text-primary">Bem-estar Corporativo</p>
        </div>
        <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground mb-4 max-w-2xl leading-tight">
          Empresas saudáveis constroem resultados extraordinários
        </h2>
        <p className="font-body text-muted-foreground max-w-xl">
          Programas estratégicos que conectam saúde emocional a performance organizacional.
        </p>
      </AnimatedSection>

      <div className="grid md:grid-cols-3 gap-5">
        {corpBenefits.map((b, i) => (
          <BenefitCard key={b.title} {...b} delay={i * 0.1} />
        ))}
      </div>
    </div>
  </section>
);

export default Benefits;
