import AnimatedSection from "./AnimatedSection";

const services = [
  { title: "Bem-estar Pessoal", desc: "Programas individuais para quem busca equilíbrio, propósito e uma vida com mais significado.", tag: "Individual" },
  { title: "Programas Corporativos", desc: "Soluções estratégicas para empresas que entendem que pessoas saudáveis constroem negócios extraordinários.", tag: "Empresas" },
  { title: "Palestras", desc: "Apresentações impactantes sobre felicidade, saúde emocional e alta performance sustentável.", tag: "Eventos" },
  { title: "Workshops", desc: "Experiências imersivas que combinam teoria, prática e autoconhecimento em grupo.", tag: "Imersão" },
  { title: "Mentorias", desc: "Acompanhamento individual para líderes e profissionais que buscam evolução integral.", tag: "1:1" },
  { title: "Diagnóstico Organizacional", desc: "Mapeamento completo da saúde emocional e clima da sua organização com plano de ação personalizado.", tag: "Análise" },
];

const Services = () => (
  <section id="servicos" className="section-padding bg-muted/30">
    <div className="container-narrow mx-auto">
      <AnimatedSection className="mb-16">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-px bg-primary" />
          <p className="font-body text-sm font-medium tracking-[0.2em] uppercase text-primary">Serviços</p>
        </div>
        <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground mb-4 max-w-2xl leading-tight">
          Soluções para cada momento da jornada
        </h2>
        <p className="font-body text-muted-foreground max-w-xl">
          Do individual ao organizacional, cada serviço é desenhado com rigor científico e cuidado humano.
        </p>
      </AnimatedSection>

      <div className="grid md:grid-cols-2 gap-4">
        {services.map((s, i) => (
          <AnimatedSection key={s.title} delay={i * 0.08}>
            <div className="group relative rounded-3xl border border-border/60 bg-card p-8 h-full transition-all duration-500 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/[0.04] overflow-hidden">
              <div className="flex items-start justify-between mb-5">
                <span className="inline-block font-body text-[11px] font-semibold tracking-[0.15em] uppercase text-gold bg-gold-light px-3 py-1 rounded-full">
                  {s.tag}
                </span>
                <span className="font-body text-xs text-muted-foreground/40 font-medium">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">{s.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              {/* Hover accent */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
