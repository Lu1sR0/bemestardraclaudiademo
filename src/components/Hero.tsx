import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => (
  <section
    id="home"
    className="relative min-h-screen flex items-center justify-center overflow-hidden"
  >
    {/* Background image with overlay */}
    <div className="absolute inset-0">
      <img
        src={heroBg}
        alt=""
        className="w-full h-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/50 to-background/80" />
    </div>

    <div className="relative z-10 container-narrow mx-auto section-padding text-center">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="font-body text-sm font-medium tracking-[0.25em] uppercase text-muted-foreground mb-6"
      >
        Bem-estar · Ciência · Transformação
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="font-display text-4xl md:text-6xl lg:text-7xl font-semibold leading-[1.1] tracking-tight text-foreground mb-8"
      >
        A ciência por trás
        <br />
        <span className="text-gradient-gold">da sua melhor versão</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.6 }}
        className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
      >
        Programas personalizados de bem-estar pessoal e corporativo, fundamentados 
        em neurociência e psicologia positiva, para quem busca viver e liderar com mais propósito.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.8 }}
        className="flex flex-col sm:flex-row gap-4 justify-center"
      >
        <a
          href="#contato"
          className="rounded-full bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5"
        >
          Agendar Diagnóstico
        </a>
        <a
          href="#sobre"
          className="rounded-full border border-border bg-background/50 backdrop-blur-sm px-8 py-3.5 text-sm font-medium text-foreground transition-all duration-300 hover:bg-background hover:-translate-y-0.5"
        >
          Conheça a Dra. Claudia
        </a>
      </motion.div>
    </div>
  </section>
);

export default Hero;
