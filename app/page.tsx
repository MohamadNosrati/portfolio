import About from "@/components/home/About";
import Contact from "@/components/home/Contact";
import Experiences from "@/components/home/Expereinces";
import Hero from "@/components/home/Hero";
import Skills from "@/components/home/Skills";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Experiences />
      <Contact />
      <Footer />
    </main>
  );
}
