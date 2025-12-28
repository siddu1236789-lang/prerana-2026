import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Layers, MapPin, Music, Trophy, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface EventListProps {
  category: string;
  events: any[]; // Ideally type this properly
}

export default function EventList({ category, events }: EventListProps) {
  const navigate = useNavigate();
  
  const regularEvents = events.filter(e => !e.isCombo);
  const comboEvents = events.filter(e => e.isCombo);

  return (
    <>
      <div className="mb-8">
        <Button variant="ghost" onClick={() => navigate("/events")} className="gap-2 pl-0 hover:pl-2 transition-all">
          <ArrowLeft className="w-4 h-4" /> Back to Categories
        </Button>
      </div>
      
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 capitalize">{category} Events</h1>
        <p className="text-muted-foreground">Select an event to view details and register.</p>
      </div>

      {/* Combo Events Section */}
      {comboEvents.length > 0 && (
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Layers className="w-6 h-6 text-secondary" />
            <h2 className="text-2xl font-bold text-secondary">Combo Events</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {comboEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => navigate(`/events/${category}/${event.slug}`)}
                className="cursor-pointer"
              >
                <Card className="h-full border-secondary/30 hover:border-secondary transition-all hover:shadow-lg hover:shadow-secondary/10 group bg-secondary/5">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-xs font-mono text-secondary bg-secondary/10 px-2 py-1 rounded">{event.code}</span>
                      <span className="text-xs font-bold text-secondary">{event.registrationFee}</span>
                    </div>
                    <CardTitle className="text-xl group-hover:text-secondary transition-colors">{event.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm mb-4">{event.shortDescription}</p>
                    <div className="space-y-2">
                      <p className="text-xs font-semibold text-secondary uppercase tracking-wider">Included Events:</p>
                      <ul className="text-sm text-muted-foreground list-disc list-inside">
                        {event.includedEvents?.map((included: string, i: number) => (
                          <li key={i}>{included}</li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* Regular Events Section */}
      {regularEvents.length > 0 ? (
        <div>
          {comboEvents.length > 0 && (
            <div className="flex items-center gap-3 mb-6">
              <Music className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold">Individual Events</h2>
            </div>
          )}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => navigate(`/events/${category}/${event.slug}`)}
                className="cursor-pointer"
              >
                <Card className="h-full hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/5 group">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded">{event.code}</span>
                      <span className="text-xs font-bold text-secondary">
                        {event.registrationFee === "0" || event.registrationFee === 0 ? "Free" : event.registrationFee}
                      </span>
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">{event.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm line-clamp-3 mb-4">{event.shortDescription}</p>
                    <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                      <a 
                        href="https://www.google.com/maps/place/Gitam+University+Parking/@13.2876854,77.5971134,132m/data=!3m1!1e3!4m6!3m5!1s0x3bb1e134094dd77f:0x6206764d41f07ca7!8m2!3d13.2875316!4d77.5973482!16s%2Fg%2F11l29myt7v?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 hover:text-primary transition-colors z-10 relative"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <MapPin className="w-3 h-3" /> {event.location}
                      </a>
                      {event.day && <span className="flex items-center gap-2"><Calendar className="w-3 h-3" /> {event.day}</span>}
                    </div>
                  </CardContent>
                  <CardFooter className="text-sm text-muted-foreground flex gap-4 border-t border-border/50 pt-4 mt-auto">
                    <span className="flex items-center gap-1"><Users className="w-3 h-3" /> {event.teamSize}</span>
                    {event.prizes && event.prizes.length > 0 && (
                      <span className="flex items-center gap-1">
                        <Trophy className="w-3 h-3" /> 
                        {event.prizes[0].includes(':') ? event.prizes[0].split(':')[1] : event.prizes[0]}
                      </span>
                    )}
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="text-xl text-muted-foreground">No events found for this category yet. Stay tuned!</p>
        </div>
      )}
    </>
  );
}
