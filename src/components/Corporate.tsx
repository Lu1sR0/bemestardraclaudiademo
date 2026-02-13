import AnimatedSection from "./AnimatedSection";
import { ArrowUpRight } from "lucide-react";

const metrics = [
  { value: "+32%", label: "Produtividade", desc: "Aumento médio na produtividade das equipes" },
  { value: "-45%", label: "Estresse", desc: "Redução nos níveis de estresse organizacional" },
  { value: "+58%", label: "Engajamento", desc: "Crescimento no engajamento dos colaboradores" },
  { value: "-38%", label: "Turnover", desc: "Redução no turnover voluntário" },
];

const Corporate = () => (
  <section id="empresas" className="section-padding bg-muted/30">
    <div className="container-narrow mx-auto">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <AnimatedSection>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-px bg-primary" />
            <p className="font-body text-sm font-medium tracking-[0.2em] uppercase text-primary">Para Empresas</p>
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground mb-6 leading-tight">
            Investir em pessoas é a decisão mais inteligente
          </h2>
          <p className="font-body text-muted-foreground leading-[1.8] mb-10">
            Programas desenhados para transformar a saúde emocional em vantagem competitiva. 
            Da diretoria ao operacional, criamos uma cultura de bem-estar que se reflete em 
            cada indicador do negócio.
          </p>
          <a
            href="#contato"
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3 text-sm font-medium text-background transition-all duration-300 hover:opacity-85"
          >
            Solicitar Proposta
            <ArrowUpRight size={15} />
          </a>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div className="grid grid-cols-2 gap-3">
            {metrics.map((m, i) => (
              <div
                key={m.label}
                className="rounded-3xl border border-border/60 bg-card p-7 transition-all duration-500 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/[0.04]"
              >
                <p className="font-display text-3xl font-semibold text-gradient-gold mb-1 tracking-tight">{m.value}</p>
                <p className="font-display text-sm font-semibold text-foreground mb-1">{m.label}</p>
                <p className="font-body text-xs text-muted-foreground leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default Corporate;
