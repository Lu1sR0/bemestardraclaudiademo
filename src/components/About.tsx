import AnimatedSection from "./AnimatedSection";

const About = () => (
  <section id="sobre" className="section-padding bg-background">
    <div className="container-narrow mx-auto">
      <div className="grid lg:grid-cols-2 gap-20 items-start">
        <AnimatedSection>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-px bg-primary" />
            <p className="font-body text-sm font-medium tracking-[0.2em] uppercase text-primary">Sobre</p>
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground mb-8 leading-tight">
            Onde ciência encontra sensibilidade
          </h2>
          <div className="space-y-5 font-body text-muted-foreground leading-[1.8]">
            <p>
              A Dra. Claudia é especialista em bem-estar humano, com mais de uma década dedicada 
              a compreender o que faz pessoas e organizações prosperarem de verdade.
            </p>
            <p>
              Sua abordagem única integra neurociência, psicologia positiva e ciência da felicidade 
              com uma escuta profundamente humana — criando programas que não apenas transformam 
              indicadores, mas transformam vidas.
            </p>
            <p>
              Com formação internacional e experiência junto a grandes empresas, ela desenvolve 
              metodologias proprietárias que geram resultados mensuráveis e sustentáveis.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="space-y-0 border-l border-border pl-8">
            {[
              { label: "Formação", title: "Formação Internacional", desc: "Certificações em universidades de referência global em psicologia positiva e neurociência aplicada." },
              { label: "Método", title: "Base Científica", desc: "Cada programa é construído sobre evidências, pesquisas atualizadas e protocolos validados." },
              { label: "Essência", title: "Abordagem Humana", desc: "Ciência sem conexão não transforma. Cada jornada é única, individual e profundamente acolhedora." },
            ].map((item, i) => (
              <div key={item.title} className={`relative py-8 ${i > 0 ? "border-t border-border" : ""}`}>
                {/* Active dot on the line */}
                <div className="absolute -left-8 top-8 w-[1px] h-full">
                  <div className="absolute -left-[3px] top-2 w-[7px] h-[7px] rounded-full bg-gold" />
                </div>
                <p className="font-body text-[11px] font-semibold tracking-[0.2em] uppercase text-gold mb-3">{item.label}</p>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default About;
