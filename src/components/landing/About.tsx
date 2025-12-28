import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Users, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function About() {
  const navigate = useNavigate();
  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
            WHAT IS PRERANA?
          </h2>
          <p className="text-xl md:text-2xl font-medium italic text-primary mb-8">
            "A festival that doesn't just happen—it evolves, inspires, and sets the stage for tomorrow"
          </p>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            PRERANA isn't just a fest, it's the heartbeat of GITAM University, Bengaluru. A dazzling fusion of culture, tech, and raw student energy, it has grown into a powerhouse of inspiration. Since day one, PRERANA has been the launchpad where ideas take flight, talents rise, and collaboration transforms into unforgettable experiences.
          </p>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mt-4">
            Prerana 2025 continued this legacy with two action packed days—February 1 & 2, filled with cultural showcases, technical competitions, wellness sessions, workshops, E-sports battles, and endless opportunities to learn, perform, compete, and connect.
          </p>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mt-4">
            This year's fest came alive through the theme: <span className="text-primary font-semibold">Innovation, Collaboration, and Hope</span>, a creative compass that encouraged participants to think boldly, break patterns, and embrace new perspectives. From the main stage to the Hackathon and from wellness zones to workshops, the theme echoed in every moment of the fest.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { 
              icon: Zap, 
              title: "Wellness Competitions", 
              desc: "Wellness Experiences you'll actually enjoy , thoughtfully  curated to support physical, mental and emotional well-being.",
              color: "text-secondary" 
            },
            { 
              icon: Sparkles, 
              title: "Star Night Concerts", 
              desc: "Experience electrifying performances by top artists and bands under the stars.",
              color: "text-primary" 
            },
            { 
              icon: Users, 
              title: "Technical Workshops", 
              desc: "Learn from industry experts and get hands-on experience with cutting-edge tech.",
              color: "text-secondary" 
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="h-full bg-card/50 border-border/50 hover:border-primary/30 transition-colors">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className={`w-12 h-12 rounded-full bg-background flex items-center justify-center mb-4 shadow-sm`}>
                    <item.icon className={`w-6 h-6 ${item.color}`} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="link" className="text-lg gap-2" onClick={() => {
             const scheduleSection = document.getElementById("schedule");
             if (scheduleSection) {
               scheduleSection.scrollIntoView({ behavior: "smooth" });
             } else {
               navigate("/#schedule");
             }
          }}>
            View Full Schedule <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}