import Footer from "@/components/landing/Footer";
import Navbar from "@/components/landing/Navbar";

export default function Terms() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-4xl font-bold mb-8">Terms & Conditions</h1>
          <div className="prose prose-invert max-w-none">
            <p className="text-muted-foreground">Last updated: January 2026</p>
            <h2 className="text-2xl font-semibold mt-8 mb-4">1. Participation</h2>
            <p className="text-muted-foreground mb-4">
              By registering for Prerana 2026, you agree to abide by the rules and regulations of GITAM University and the event organizers.
            </p>
            <h2 className="text-2xl font-semibold mt-8 mb-4">2. Code of Conduct</h2>
            <p className="text-muted-foreground mb-4">
              All participants are expected to behave in a respectful and professional manner. Harassment of any kind will not be tolerated.
            </p>
            {/* Add more sections as needed */}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
