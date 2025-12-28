import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";

const featuredEvents: any[] = [];

export default function FeaturedEvents() {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Featured Attractions</h2>
          <p className="text-muted-foreground">Don't miss the biggest events of Prerana 2026.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {featuredEvents.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full overflow-hidden group hover:border-primary/50 transition-colors">
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <Badge className="absolute top-4 right-4 z-20" variant="secondary">
                    {event.category}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{event.title}</CardTitle>
                  <CardDescription className="flex items-center gap-4 mt-2">
                    <span className="flex items-center gap-1 text-xs">
                      <Calendar className="w-3 h-3" /> {event.date}
                    </span>
                    <span className="flex items-center gap-1 text-xs">
                      <MapPin className="w-3 h-3" /> {event.location}
                    </span>
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button 
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors" 
                    variant="outline"
                    onClick={() => navigate(`/events/${event.category.toLowerCase()}/${event.slug}`)}
                  >
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}