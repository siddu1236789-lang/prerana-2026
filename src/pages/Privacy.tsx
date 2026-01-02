import Footer from "@/components/landing/Footer";
import Navbar from "@/components/landing/Navbar";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          <div className="prose prose-invert max-w-none">
            <p className="text-muted-foreground">Last updated: January 2026</p>
            <h2 className="text-2xl font-semibold mt-8 mb-4">1. Information Collection</h2>
            <p className="text-muted-foreground mb-4">
              We collect information you provide directly to us when you register for the fest, participate in events, or communicate with us.
            </p>
            <h2 className="text-2xl font-semibold mt-8 mb-4">2. Use of Information</h2>
            <p className="text-muted-foreground mb-4">
              We use the information we collect to operate and improve our services, communicate with you, and ensure the safety of our events.
            </p>
            {/* Add more sections as needed */}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
