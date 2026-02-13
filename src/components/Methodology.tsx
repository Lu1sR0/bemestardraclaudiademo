import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const steps = [
  {
    number: "01",
    title: "Diagnóstico",
    desc: "Mapeamento profundo do seu momento atual — emocional, comportamental e relacional — com ferramentas científicas validadas.",
  },
  {
    number: "02",
    title: "Clareza",
    desc: "Identificação de padrões, crenças limitantes e oportunidades de crescimento para construir um plano personalizado.",
  },
  {
    number: "03",
    title: "Transformação",
    desc: "Implementação de estratégias práticas, baseadas em neurociência, para criar mudanças reais e mensuráveis.",
  },
  {
    number: "04",
    title: "Sustentação",
    desc: "Acompanhamento contínuo para consolidar novos hábitos e garantir resultados duradouros.",
  },
];

const Methodology = () => (
  <section id="metodologia" className="section-padding bg-foreground overflow-hidden">
    <div className="container-narrow mx-auto">
      <AnimatedSection className="mb-20">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-px bg-gold" />
          <p className="font-body text-sm font-medium tracking-[0.2em] uppercase text-gold">Metodologia</p>
        </div>
        <h2 className="font-display text-3xl md:text-5xl font-semibold text-background mb-4 max-w-2xl leading-tight">
          Uma jornada desenhada para resultados reais
        </h2>
        <p className="font-body text-background/50 max-w-xl">
          Quatro etapas que unem ciência, escuta e estratégia para transformações que permanecem.
        </p>
      </AnimatedSection>

      <div className="relative">
        {/* Connecting line */}
        <div className="hidden lg:block absolute top-[52px] left-0 right-0 h-px bg-background/10" />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <AnimatedSection key={step.number} delay={i * 0.15}>
              <div className="relative">
                {/* Number circle */}
                <div className="relative z-10 w-[104px] h-[104px] rounded-full border border-background/10 flex items-center justify-center mb-8 bg-foreground">
                  <span className="font-display text-3xl font-semibold text-gradient-gold">{step.number}</span>
                </div>
                <h3 className="font-display text-xl font-semibold text-background mb-3">{step.title}</h3>
                <p className="font-body text-sm text-background/45 leading-relaxed">{step.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Methodology;
