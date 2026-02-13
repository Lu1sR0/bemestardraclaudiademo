import AnimatedSection from "./AnimatedSection";

const testimonials = [
  {
    text: "A Dra. Claudia transformou a forma como lidero minha equipe. A clareza mental e emocional que ganhei impactou diretamente nos resultados da empresa.",
    name: "Marcela R.",
    role: "CEO, Grupo Innova",
  },
  {
    text: "O programa corporativo reduziu em 40% os afastamentos por saúde mental na nossa empresa. Os números falam por si.",
    name: "Roberto T.",
    role: "Diretor de RH, TechBrasil",
  },
  {
    text: "Encontrei equilíbrio e propósito em um momento em que tudo parecia caótico. A abordagem científica trouxe segurança e os resultados vieram rapidamente.",
    name: "Ana Paula S.",
    role: "Empreendedora",
  },
];

const Testimonials = () => (
  <section className="section-padding bg-background">
    <div className="container-narrow mx-auto">
      <AnimatedSection className="mb-16">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-px bg-primary" />
          <p className="font-body text-sm font-medium tracking-[0.2em] uppercase text-primary">Depoimentos</p>
        </div>
        <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground max-w-lg leading-tight">
          Quem vive, recomenda
        </h2>
      </AnimatedSection>

      <div className="grid md:grid-cols-3 gap-5">
        {testimonials.map((t, i) => (
          <AnimatedSection key={t.name} delay={i * 0.12}>
            <div className="relative rounded-3xl border border-border/60 bg-card p-8 h-full flex flex-col overflow-hidden group transition-all duration-500 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/[0.04]">
              {/* Large decorative quote */}
              <span className="absolute -top-2 -left-1 font-display text-[100px] leading-none text-muted/30 select-none pointer-events-none">
                "
              </span>
              <p className="relative z-10 font-body text-sm text-muted-foreground leading-[1.8] mb-8 flex-1 pt-6">
                {t.text}
              </p>
              <div className="relative z-10 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-sage-light flex items-center justify-center">
                  <span className="font-display text-sm font-semibold text-primary">{t.name[0]}</span>
                </div>
                <div>
                  <p className="font-display text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="font-body text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
