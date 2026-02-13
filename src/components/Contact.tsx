import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import { ArrowUpRight } from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "", type: "pessoal" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Olá, Dra. Claudia! Meu nome é ${form.name}. ${form.message}`
    );
    window.open(`https://wa.me/5500000000000?text=${text}`, "_blank");
  };

  return (
    <section id="contato" className="section-padding bg-background">
      <div className="container-narrow mx-auto">
        <div className="grid lg:grid-cols-2 gap-20">
          <AnimatedSection>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-px bg-primary" />
              <p className="font-body text-sm font-medium tracking-[0.2em] uppercase text-primary">Contato</p>
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground mb-6 leading-tight">
              O primeiro passo é sempre uma conversa
            </h2>
            <p className="font-body text-muted-foreground leading-[1.8] mb-10">
              Agende seu diagnóstico gratuito e descubra como podemos construir juntos 
              o caminho para o seu bem-estar — pessoal ou organizacional.
            </p>

            <a
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl border border-border/60 bg-card hover:border-primary/20 hover:shadow-lg hover:shadow-primary/[0.04] transition-all duration-500 group"
            >
              <div className="flex-1">
                <p className="font-body text-sm font-semibold text-foreground">Fale pelo WhatsApp</p>
                <p className="font-body text-xs text-muted-foreground">Resposta em até 24h</p>
              </div>
              <ArrowUpRight size={16} className="text-muted-foreground group-hover:text-foreground transition-colors" />
            </a>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <form onSubmit={handleSubmit} className="space-y-5 rounded-3xl border border-border/60 bg-card p-8">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="font-body text-xs font-medium text-muted-foreground mb-1.5 block">Nome</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label className="font-body text-xs font-medium text-muted-foreground mb-1.5 block">E-mail</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="font-body text-xs font-medium text-muted-foreground mb-1.5 block">Telefone</label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  placeholder="(00) 00000-0000"
                />
              </div>

              <div>
                <label className="font-body text-xs font-medium text-muted-foreground mb-1.5 block">Interesse</label>
                <select
                  value={form.type}
                  onChange={(e) => setForm({ ...form, type: e.target.value })}
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                >
                  <option value="pessoal">Bem-estar Pessoal</option>
                  <option value="corporativo">Programa Corporativo</option>
                  <option value="palestra">Palestra / Workshop</option>
                  <option value="mentoria">Mentoria</option>
                </select>
              </div>

              <div>
                <label className="font-body text-xs font-medium text-muted-foreground mb-1.5 block">Mensagem</label>
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                  placeholder="Conte um pouco sobre o que busca..."
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-foreground px-6 py-3.5 font-body text-sm font-medium text-background transition-all duration-300 hover:opacity-85"
              >
                Enviar Mensagem
                <ArrowUpRight size={15} />
              </button>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Contact;
