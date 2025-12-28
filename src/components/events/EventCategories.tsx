import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Code2, Heart, Music } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const categories = [
  {
    title: "Technical",
    description: "Hackathons, coding competitions, robotics, and tech talks.",
    icon: Code2,
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    slug: "technical"
  },
  {
    title: "Cultural",
    description: "Dance face-offs, music battles, fashion shows, and drama contests.",
    icon: Music,
    color: "text-purple-400",
    bg: "bg-purple-400/10",
    slug: "cultural"
  },
  {
    title: "Wellness",
    description: "Wellness Experiences you'll actually enjoy , thoughtfully  curated to support physical, mental and emotional well-being.",
    icon: Heart,
    color: "text-green-400",
    bg: "bg-green-400/10",
    slug: "wellness"
  }
];

export default function EventCategories() {
  const navigate = useNavigate();

  return (
    <>
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6">Event Categories</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Explore the diverse range of events happening at Prerana 2026.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {categories.map((cat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="cursor-pointer"
            onClick={() => navigate(`/events/${cat.slug}`)}
          >
            <Card className="h-full border-border/50 hover:border-primary/50 transition-colors">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className={`w-16 h-16 rounded-2xl ${cat.bg} flex items-center justify-center`}>
                  <cat.icon className={`w-8 h-8 ${cat.color}`} />
                </div>
                <div>
                  <CardTitle className="text-2xl">{cat.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {cat.description}
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </>
  );
}
