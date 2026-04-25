import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Process from "@/components/Process";
import Plans from "@/components/Plans";
import Cases from "@/components/Cases";
import Team from "@/components/Team";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="relative">
        <Hero />
        <Marquee />
        <About />
        <Services />
        <WhyUs />
        <Process />
        <Plans />
        <Cases />
        <Team />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
