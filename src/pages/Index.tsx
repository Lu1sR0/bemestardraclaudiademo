import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import About from "@/components/About";
import Services from "@/components/Services";
import Methodology from "@/components/Methodology";
import Impact from "@/components/Impact";
import Corporate from "@/components/Corporate";
import Testimonials from "@/components/Testimonials";
import CtaBanner from "@/components/CtaBanner";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <Hero />
    <Benefits />
    <About />
    <Services />
    <Methodology />
    <Impact />
    <Corporate />
    <Testimonials />
    <CtaBanner />
    <Contact />
    <Footer />
  </div>
);

export default Index;
