import Footer from "@/components/landing/Footer";
import Navbar from "@/components/landing/Navbar";
import AboutComponent from "@/components/landing/About";

export default function About() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30 flex flex-col">
      <Navbar />
      <main className="flex-1 pt-20">
        <AboutComponent />
      </main>
      <Footer />
    </div>
  );
}
