import Footer from "@/components/landing/Footer";
import Navbar from "@/components/landing/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Download } from "lucide-react";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

export default function Sponsors() {
  const navigate = useNavigate();
  const uploadedBrochureUrl = useQuery(api.documents.getBrochure);
  const brochureUrl = uploadedBrochureUrl || "/Sponsorship_Brochure.pdf";

  return (
    <div className="min-h-screen bg-background text-foreground font-sans relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <Navbar />
      <main className="pt-24 pb-20 relative z-10">
        <div className="container mx-auto px-4">
          <div 
            className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-500"
          >
            <h1 className="text-5xl font-bold mb-6">Our Sponsors</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Prerana 2026 is made possible by the generous support of our partners.
            </p>
            <Button onClick={() => navigate("/contact")}>
              Partner With Us
            </Button>
          </div>

          {/* Sponsorship Brochure Placeholder */}
          <div 
            className="max-w-xl mx-auto mb-20 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-200"
          >
            <Card className="border-primary/20 bg-card/50 backdrop-blur-sm">
              <CardContent className="flex flex-col items-center p-8 text-center">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Download className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold mb-2">Sponsorship Brochure</h2>
                <p className="text-muted-foreground mb-6">
                  Download our detailed sponsorship brochure to explore partnership tiers, benefits, and opportunities for Prerana 2026.
                </p>
                <Button size="lg" className="w-full sm:w-auto" asChild>
                  <a href={"https://drive.google.com/file/d/1h3otPN3dF2iYaPQRprG920MFgeIx9trJ/view?usp=drive_link"} target="_blank" rel="noopener noreferrer">
                    Download Brochure (PDF)
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}