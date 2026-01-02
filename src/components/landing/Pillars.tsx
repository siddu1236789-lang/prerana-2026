import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Code2, Heart, Music } from "lucide-react";

const pillars = [
  {
    title: "Technical Events",
    description: "Hackathons, coding competitions, robotics, and tech talks.",
    icon: Code2,
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    border: "border-blue-400/20",
    image: "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?auto=format&fit=crop&q=80&w=1000"
  },
  {
    title: "Cultural Events",
    description: "Dance battles, music concerts, fashion shows, and art exhibitions.",
    icon: Music,
    color: "text-purple-400",
    bg: "bg-purple-400/10",
    border: "border-purple-400/20",
    image: "https://images.unsplash.com/photo-1459749411177-0473ef71607b?auto=format&fit=crop&q=80&w=1000"
  },
  {
    title: "Wellness",
    description: "Yoga sessions, meditation, mental health workshops, and fitness challenges.",
    icon: Heart,
    color: "text-green-400",
    bg: "bg-green-400/10",
    border: "border-green-400/20",
    image: "https://images.unsplash.com/photo-1544367563-12123d8965cd?auto=format&fit=crop&q=80&w=1000"
  }
];

export default function Pillars() {
  return (
    <section id="pillars" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">The Three Pillars</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Experience a holistic blend of technology, culture, and well-being designed to inspire and rejuvenate.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
            >
              <Card className={`h-full overflow-hidden border ${pillar.border} bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300`}>
                <div className="h-48 overflow-hidden relative">
                  <div className={`absolute inset-0 ${pillar.bg} opacity-20 z-10`} />
                  <img 
                    src={pillar.image} 
                    alt={pillar.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg ${pillar.bg} flex items-center justify-center mb-4`}>
                    <pillar.icon className={`w-6 h-6 ${pillar.color}`} />
                  </div>
                  <CardTitle className="text-2xl">{pillar.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {pillar.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
