import Footer from "@/components/landing/Footer";
import Navbar from "@/components/landing/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, AlertTriangle, CheckCircle, Ban, IdCard, Backpack, Users, Megaphone } from "lucide-react";
import { motion } from "framer-motion";

export default function SecurityGuidelines() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30 flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto space-y-10"
        >
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-primary">
              Security Guidelines
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto">
              To ensure a safe and enjoyable experience for everyone at Prerana 2026, please strictly adhere to the following security policies.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Entry Rules */}
            <Card className="border-primary/20 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl md:text-2xl">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  Entry Rules
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-muted-foreground">
                <ul className="list-disc list-inside space-y-2">
                  <li>Entry is permitted <strong>ONLY</strong> through the Main Gate.</li>
                  <li>Mandatory security screening, metal detection, and bag checks for all entrants.</li>
                  <li>Re-entry not allowed.</li>
                  <li>Security personnel reserve full authority to deny or restrict entry as required.</li>
                  <li>Attendees must obey all instructions issued by security staff and volunteers.</li>
                </ul>
              </CardContent>
            </Card>

            {/* ID Card Rules */}
            <Card className="border-primary/20 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl md:text-2xl">
                  <IdCard className="h-6 w-6 text-blue-500" />
                  ID Card Rules
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-muted-foreground">
                <p className="font-medium text-foreground">A valid University ID is mandatory for:</p>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>GITAM students</li>
                  <li>External participants</li>
                </ul>
                <div className="mt-4 space-y-2">
                  <p className="text-destructive flex items-start gap-2">
                    <Ban className="h-4 w-4 mt-1 shrink-0" />
                    No alternative IDs (photocopies, screenshots, temporary slips) will be accepted.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Bag Rules */}
          <Card className="border-primary/20 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl md:text-2xl">
                <Backpack className="h-6 w-6 text-purple-500" />
                Bag Rules
              </CardTitle>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-lg mb-3 text-foreground">Morning Events</h3>
                <div className="space-y-4">
                  <div className="bg-muted/30 p-3 rounded-lg">
                    <span className="font-semibold text-primary block mb-1">Girls</span>
                    <p className="text-sm text-muted-foreground">Bags allowed after strict security check. Only ID card permitted inside; prohibited items will be held at the Helpdesk.</p>
                  </div>
                  <div className="bg-muted/30 p-3 rounded-lg">
                    <span className="font-semibold text-primary block mb-1">Boys</span>
                    <p className="text-sm text-muted-foreground">Bags allowed after screening; prohibited items must be deposited at the Helpdesk.</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-3 text-foreground">Night Events</h3>
                <div className="space-y-4">
                  <div className="bg-muted/30 p-3 rounded-lg">
                    <span className="font-semibold text-primary block mb-1">Girls</span>
                    <p className="text-sm text-muted-foreground">Bags allowed with mandatory full bag inspection. Only ID card allowed inside.</p>
                  </div>
                  <div className="bg-muted/30 p-3 rounded-lg">
                    <span className="font-semibold text-primary block mb-1">Bag Dimension</span>
                    <p className="text-sm text-muted-foreground">Only small bags/pouches upto 6-8 inches.</p>
                    <p className="text-sm text-muted-foreground">No large bag packs/hand bags are allowed.</p>
                  </div>
                  <div className="bg-destructive/10 p-3 rounded-lg border border-destructive/20">
                    <span className="font-semibold text-destructive block mb-1">Boys</span>
                    <p className="text-sm text-destructive">No bags allowed during night events.</p>

                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Prohibited Items */}
          <Card className="border-destructive/30 bg-destructive/5 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl md:text-2xl text-destructive">
                <Ban className="h-6 w-6" />
                Prohibited Items
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-6 text-muted-foreground">The following items are strictly banned anywhere inside the event venue:</p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-bold mb-2 flex items-center gap-2"><Shield className="h-4 w-4" /> Safety & Security</h4>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                    <li>Weapons, knives, blades, sharp objects</li>
                    <li>Lighters, matches, flammable items</li>
                    <li>Firecrackers or explosives</li>
                    <li>Laser pointers</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-2 flex items-center gap-2"><AlertTriangle className="h-4 w-4" /> Substances</h4>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                    <li>Alcohol</li>
                    <li>Cigarettes, vapes, tobacco products</li>
                    <li>Drugs or any banned substances</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-2 flex items-center gap-2"><Megaphone className="h-4 w-4" /> Political & Sensitive</h4>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                    <li>Political party flags, banners</li>
                    <li>Scarves, badges, or promotional materials</li>
                    <li>Any celebrity influence is not allowed </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-2 flex items-center gap-2"><Users className="h-4 w-4" /> Personal Items</h4>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                    <li>Perfumes, deodorant sprays, aerosol cans</li>
                    <li>Water bottles (plastic, metal, thermos)</li>
                    <li>Metal or steel containers</li>
                    <li>Large food boxes or group items</li>
                    <li>Any kind of cosmetics product is not allowed </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-2 flex items-center gap-2"><Backpack className="h-4 w-4" /> Electronics & Misc</h4>
                  <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                    <li>Large speakers</li>
                    <li>Projectiles (balls, frisbees, etc.)</li>
                    <li>Unauthorized drones</li>
                    <li>Any item deemed unsafe by Security/QRT</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Additional Rules Accordion */}
          <div className="grid gap-6 md:grid-cols-2">
             <Card className="border-primary/20 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <Users className="h-5 w-5 text-orange-500" />
                  Participant Rules
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-muted-foreground">
                <p>• All participants (internal and external) must present a valid University ID.</p>
                <p>• Participants must report to competitions on time. Late reporting may result in disqualification.</p>
                <p>• Only registered participants may enter competition zones.</p>
                <p>• ID verification is required for collecting certificates, awards, and prizes.</p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <Shield className="h-5 w-5 text-teal-500" />
                  General Safety & Crowd Control
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-muted-foreground">
                <p>• Follow the ONE-WAY entry/exit system wherever implemented.</p>
                <p>• Do not crowd near narrow walkways, backstage areas, or technical zones.</p>
                <p>• Barricades must not be crossed under any circumstance.</p>
                <p>• Follow instructions of Security, QRT, Fire & Safety, and volunteers.</p>
                <p>• Report suspicious activity immediately.</p>
                <p>• Emergency exits must remain clear at all times.</p>
              </CardContent>
            </Card>
          </div>

        </motion.div>
      </main>
      <Footer />
    </div>
  );
}