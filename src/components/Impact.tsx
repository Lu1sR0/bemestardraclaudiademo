import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  { value: 10000, suffix: "+", label: "Pessoas impactadas", sublabel: "em programas pessoais e corporativos" },
  { value: 150, suffix: "+", label: "Empresas atendidas", sublabel: "de diferentes portes e segmentos" },
  { value: 98, suffix: "%", label: "Satisfação", sublabel: "índice de aprovação dos clientes" },
  { value: 12, suffix: "+", label: "Anos de experiência", sublabel: "dedicados à ciência do bem-estar" },
];

const Counter = ({ value, suffix }: { value: number; suffix: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {count.toLocaleString("pt-BR")}{suffix}
    </span>
  );
};

const Impact = () => (
  <section className="section-padding bg-background">
    <div className="container-narrow mx-auto">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-0">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.12 }}
            className={`text-center py-12 px-6 ${
              i < stats.length - 1 ? "lg:border-r border-border" : ""
            } ${i < 2 ? "border-b lg:border-b-0 border-border" : ""}`}
          >
            <p className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-2 tracking-tight">
              <Counter value={s.value} suffix={s.suffix} />
            </p>
            <p className="font-display text-sm font-semibold text-foreground mb-1">{s.label}</p>
            <p className="font-body text-xs text-muted-foreground">{s.sublabel}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Impact;
