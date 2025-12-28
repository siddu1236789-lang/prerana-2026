import Footer from "@/components/landing/Footer";
import Navbar from "@/components/landing/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, ShieldAlert, User } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30 flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto space-y-12"
        >
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-primary">
              Connect with Prerana Team
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto">
              We're here to assist you. Use the contact details below for all event-related inquiries.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {/* Contact Info Column */}
            <div className="bg-card border border-border rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-6 text-primary">Get in Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email Us</h3>
                    <p className="text-muted-foreground">preranablr@gitam.in</p>
                    <p className="text-muted-foreground text-sm mt-1">For general inquiries and sponsorship</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Call Us</h3>
                    <p className="text-muted-foreground">+91 98765 43210</p>
                    <p className="text-muted-foreground text-sm mt-1">Mon-Fri, 9:00 AM - 5:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Visit Us</h3>
                    <p className="text-muted-foreground">
                      GITAM Deemed to be University, Bengaluru Campus<br />
                      NH 207, Nagadenehalli, Doddaballapur Taluk<br />
                      Bengaluru Rural District, Karnataka - 561203
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-border">
                 <img 
                   src="https://harmless-tapir-303.convex.cloud/api/storage/492704e6-6a67-40db-b208-fb95bae91c34" 
                   alt="Contact Support" 
                   className="w-full max-w-[200px] mx-auto object-contain"
                 />
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-3xl mx-auto">
            {/* Contact Info Column */}
            <div className="space-y-6">
              {/* General & Location */}
              <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
                <CardHeader>
                  <CardTitle className="text-2xl">Contact Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary/10 text-primary shrink-0">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">General Contact</h3>
                      <p className="text-muted-foreground">preranablr@gitam.in</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        (All queries—registration, events, media, sponsorship—are routed centrally.)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary/10 text-primary shrink-0">
                      <ShieldAlert className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Campus Security Helpline</h3>
                      <p className="text-muted-foreground font-mono">+91 89711 99915</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        (For safety, emergency issues, or immediate on-campus assistance.)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary/10 text-primary shrink-0">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Campus Location</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Directorate of Student Life<br />
                        GITAM University – Bengaluru Campus<br />
                        Nagadenahalli, Doddaballapur Taluk<br />
                        Bengaluru Rural District, Karnataka – 562163, India
                      </p>
                      <a 
                        href="https://maps.app.goo.gl/iSe3W3YDSogftvYX7" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-block mt-2 text-primary hover:underline text-sm font-medium"
                      >
                        View on Google Maps →
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Specific Contacts */}
              <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
                <CardHeader>
                  <CardTitle className="text-2xl">Key Contacts</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                  <div className="flex items-start gap-3">
                    <User className="h-5 w-5 text-primary mt-1 shrink-0" />
                    <div>
                      <p className="font-semibold">Sriniwas</p>
                      <p className="text-sm text-muted-foreground">Head – Sponsorship</p>
                      <a href="tel:+919883790337" className="text-sm hover:text-primary transition-colors">+91 98837 90337</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <User className="h-5 w-5 text-primary mt-1 shrink-0" />
                    <div>
                      <p className="font-semibold">Thousheer</p>
                      <p className="text-sm text-muted-foreground">President</p>
                      <a href="tel:+919113815655" className="text-sm hover:text-primary transition-colors">+91 91138 15655</a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}