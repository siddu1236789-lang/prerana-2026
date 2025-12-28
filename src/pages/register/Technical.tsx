import Footer from "@/components/landing/Footer";
import Navbar from "@/components/landing/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function TechnicalRegistration() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Technical Events Registration</h1>
            <p className="text-xl text-muted-foreground">Register for Hackathons, Coding Contests, and Technical Workshops</p>
          </div>

          <Card className="w-full max-w-4xl mx-auto overflow-hidden border-primary/20 shadow-lg shadow-primary/5">
            <CardHeader>
              <CardTitle className="text-center">Registration Form</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <iframe 
                src="https://docs.google.com/forms/d/e/1FAIpQLSeBmO1jFceWvOS7FyL5Lw8i6L6GUTY5MMWkU7tlZ6xtuN0dJg/viewform?embedded=true" 
                width="100%" 
                frameBorder="0" 
                marginHeight={0} 
                marginWidth={0}
                className="w-full min-h-[1500px]"
                title="Technical Registration"
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-presentation"
              >
                Loading…
              </iframe>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}