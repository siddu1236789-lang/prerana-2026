import About from "@/components/landing/About";
import CtaBar from "@/components/landing/CtaBar";
import Footer from "@/components/landing/Footer";
import Gallery from "@/components/landing/Gallery";
import Hero from "@/components/landing/Hero";
import Navbar from "@/components/landing/Navbar";

export default function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Gallery />
        
        <CtaBar />
      </main>
      <Footer />
    </div>
  );
}