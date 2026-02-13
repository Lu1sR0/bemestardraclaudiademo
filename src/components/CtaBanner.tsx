import AnimatedSection from "./AnimatedSection";
import { ArrowUpRight } from "lucide-react";

const CtaBanner = () => (
  <section className="section-padding bg-sage-light/60">
    <div className="container-narrow mx-auto text-center">
      <AnimatedSection>
        <p className="font-body text-sm font-medium tracking-[0.2em] uppercase text-primary mb-6">Próximo passo</p>
        <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground mb-5 max-w-2xl mx-auto leading-tight">
          Sua transformação começa com uma decisão
        </h2>
        <p className="font-body text-muted-foreground max-w-lg mx-auto mb-10">
          Agende seu diagnóstico gratuito e descubra o que a ciência do bem-estar pode fazer por você — ou pela sua empresa.
        </p>
        <a
          href="#contato"
          className="inline-flex items-center gap-2 rounded-full bg-foreground px-8 py-3.5 text-sm font-medium text-background transition-all duration-300 hover:opacity-85"
        >
          Agendar Diagnóstico Gratuito
          <ArrowUpRight size={15} />
        </a>
      </AnimatedSection>
    </div>
  </section>
);

export default CtaBanner;
