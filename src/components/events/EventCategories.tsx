import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Code2, Heart, Music } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { events } from "@/data/events";

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
    description: "Wellness Experiences thoughtfully curated to support emotional well-being.",
    icon: Heart,
    color: "text-green-400",
    bg: "bg-green-400/10",
    slug: "wellness"
  }
];

export default function EventCategories() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6">Event Categories</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Explore the diverse range of events happening at Prerana 2026.
        </p>
        <div className="mt-6">
          <a href="/Event Brochure.pdf" download="Event Brochure.pdf" className="inline-block">
            <button className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-black rounded-md shadow-sm hover:bg-primary/90 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v12m0 0l-4-4m4 4l4-4M21 12v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6" />
              </svg>
              Download Event Brochure
            </button>
          </a>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {categories.map((cat, index) => {
          const catEvents = events.filter(e => e.category.toLowerCase() === cat.title.toLowerCase() && e.active);
          return (
            <div key={index} className="">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="cursor-pointer"
                onClick={() => {
                  if (location.pathname === "/events") {
                    navigate(`/events/${cat.slug}`);
                  } else {
                    window.open(`/events/${cat.slug}`, '_blank', 'noopener');
                  }
                }}
              >
                <Card className="h-full border-border/50 hover:border-primary/50 transition-colors">
                  <CardHeader className="flex flex-row items-center gap-4">
                    <div className={`${cat.slug === 'wellness' ? 'w-18 h-16' : 'w-16 h-16'} rounded-2xl ${cat.bg} flex items-center justify-center`}>
                      <cat.icon className={`${cat.slug === 'wellness' ? 'w-10 h-10' : 'w-8 h-8'} ${cat.color}`} />
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

              {/* Clicking a category opens the category page in a new tab which shows the events list there. */}
            </div>
          );
        })}
      </div>
    </>
  );
}
