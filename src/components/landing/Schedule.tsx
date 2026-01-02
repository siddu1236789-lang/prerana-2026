import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate as useRouterNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";

import { events } from "@/data/events";

const staticSchedule = {
  day1: [
    { time: "09:00 AM – 09:30 AM", event: "March of Hope", category: "Ceremony", location: "Underpass to Shivaji Bhavan" },
    { time: "09:30 AM – 10:00 AM", event: "Chenda mela", category: "Ceremony", location: "SB Auditorium" },
    { time: "10:00 AM – 10:30 AM", event: "Inauguration", category: "Ceremony", location: "In front of SB" },
    { time: "10:30 AM – 04:00 PM", event: "Wellness Zone Activities", category: "Wellness", location: "Gitam Lawn (Opposite to Vinaysadan)" },
    { time: "11:00 AM – 04:00 PM", event: "Project Expo", category: "Technical", location: "VDC (Innovation Street)" },
    { time: "10:30 AM – 01:30 PM", event: "Gamethon — Theme Reveal & Start", category: "Technical", location: "VB 501" },
    { time: "10:30 AM – 11:20 AM", event: "Solo Singing", category: "Cultural", location: "Auditorium" },
    { time: "10:30 AM – 11:30 AM", event: "Short Film Making", category: "Cultural", location: "VB 203" },
    { time: "11:30 AM – 12:40 PM", event: "Battle of Bands", category: "Cultural", location: "Auditorium" },
    { time: "11:35 AM – 12:20 PM", event: "Reel Contest", category: "Cultural", location: "VB 203" },
    { time: "01:00 PM – 01:40 PM", event: "Sketching", category: "Cultural", location: "VB 204" },
    { time: "01:00 PM – 02:20 PM", event: "Fashion Walk", category: "Cultural", location: "Auditorium" },
    { time: "02:00 PM – 03:30 PM", event: "Story Telling", category: "Cultural", location: "VB 204" },
    { time: "02:30 PM – 03:20 PM", event: "Drama Competition", category: "Cultural", location: "Auditorium" },
    { time: "03:20 PM – 04:00 PM", event: "Mono Acting", category: "Cultural", location: "Auditorium" },
    { time: "06:30 PM – 08:30 PM", event: "Band Performance", category: "Cultural", location: "Main Stage" },
  ],
  day2: [
    { time: "09:30 AM – 10:00 AM", event: "Prerana Unity Ascent", category: "Wellness", location: "Track" },
    { time: "09:00 AM – 05:00 PM", event: "Hackathon — 8 Hour Sprint", category: "Technical", location: "VDC (Alpha, Beta & Gamma)" },
    { time: "10:00 AM – 04:00 PM", event: "Wellness Zones", category: "Wellness", location: "Opposite to Vinaysadan Lawn" },
    { time: "10:00 AM – 10:50 AM", event: "Solo Dance (Indian)", category: "Cultural", location: "Auditorium" },
    { time: "10:00 AM – 01:30 PM", event: "Photography Contest", category: "Cultural", location: "VB 203" },
    { time: "10:55 AM – 11:50 AM", event: "Group Dance (Indian)", category: "Cultural", location: "Auditorium" },
    { time: "11:00 AM – 12:30 PM", event: "Genspeak Studio", category: "Cultural", location: "VB 501" },
    { time: "11:00 AM – 12:20 PM", event: "Poster Making Contest", category: "Cultural", location: "VB 204" },
    { time: "12:00 PM – 01:00 PM", event: "Solo Dance (Western)", category: "Cultural", location: "Auditorium" },
    { time: "12:00 PM – 01:00 PM", event: "Maze Finder Mouse", category: "Technical", location: "VDC (Kojo)" },
    { time: "01:00 PM – 01:45 PM", event: "Spot Choreography", category: "Cultural", location: "Basketball Court" },
    { time: "02:00 PM – 03:00 PM", event: "Drone Workshop (Demo)", category: "Technical", location: "VB 204" },
    { time: "02:00 PM – 03:45 PM", event: "Script Writting", category: "Cultural", location: "VB 205" },
    { time: "02:00 PM – 02:55 PM", event: "Duet Dance", category: "Cultural", location: "Auditorium" },
    { time: "03:00 PM – 04:00 PM", event: "Group Dance (Western)", category: "Cultural", location: "Auditorium" },
    { time: "05:30 PM – 06:30 PM", event: "Club Performances", category: "Cultural", location: "Main Stage" },
    { time: "06:30 PM – 08:30 PM", event: "DJ Night", category: "Cultural", location: "Main Stage" },
  ],
};

function buildScheduleFromEvents() {
  const sched: Record<string, any[]> = {
    day1: [...staticSchedule.day1],
    day2: [...staticSchedule.day2],
  };

  events.filter(e => e.active).forEach(e => {
    const dayStr = (e.day || "").toString();
    const days: string[] = [];
    if (dayStr.includes("Day 1")) days.push("day1");
    if (dayStr.includes("Day 2")) days.push("day2");
    if (days.length === 0) days.push("day1"); // default to day1 if not specified

    days.forEach(day => {
      sched[day].push({ time: e.time || e.timeLimit || "", event: e.title, category: e.category, location: e.location || "" });
    });
  });

  // Deduplicate entries per day (by event, time, location)
  Object.keys(sched).forEach(day => {
    const seen = new Set<string>();
    sched[day] = sched[day].filter(item => {
      const key = `${(item.event || "").toString().trim().toLowerCase()}|${(item.time || "").toString().trim()}|${(item.location || "").toString().trim().toLowerCase()}`;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  });

  // Trim events after headline items on each day
  const trimAfter = (arr: any[], matchTitle: string) => {
    // Use partial, case-insensitive match so variants like "Band Performance with Artist" are caught
    const idx = arr.findIndex(item => (item.event || "").toString().trim().toLowerCase().includes(matchTitle.toLowerCase()));
    if (idx !== -1) {
      arr.splice(idx + 1);
    }
  };

  trimAfter(sched.day1, "Band Performance");
  trimAfter(sched.day2, "DJ Night");

  return sched;
}

const schedule = buildScheduleFromEvents();

export default function Schedule() {
  const navigate = useRouterNavigate();
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Main Events", "Cultural", "Technology", "Wellness"];

  const filterEvents = (events: typeof schedule.day1) => {
    return events.filter((item) => {
      if (activeCategory === "All") return true;
      if (activeCategory === "Main Events") return item.category === "Ceremony" || item.location.includes("Main Stage");
      if (activeCategory === "Cultural") return item.category === "Cultural";
      if (activeCategory === "Technology") return item.category === "Technical";
      if (activeCategory === "Wellness") return item.category === "Wellness";
      return true;
    });
  };

  return (
    <section id="schedule" className="py-20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-muted/10 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Event Schedule</h2>
          <p className="text-muted-foreground">Don't miss out on any of the action.</p>
        </div>

        <div className="max-w-4xl mx-auto">

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
                  activeCategory === category
                    ? "bg-primary text-primary-foreground shadow-lg scale-105"
                    : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                {category}
              </button>
            ))}
          </div>

          <Accordion type="single" collapsible defaultValue="day1">
            {Object.entries(schedule).map(([day, events]) => (
              <AccordionItem key={day} value={day}>
                <AccordionTrigger>{day === 'day1' ? 'Day 1 (Jan 22)' : 'Day 2 (Jan 23)'}</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    {filterEvents(events as any).length > 0 ? (
                      filterEvents(events as any).map((item, index) => (
                        <motion.div
                          key={`${day}-${index}-${item.event}`}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                        >
                          <Card className="hover:bg-muted/50 transition-colors border-l-4 border-l-primary">
                            <CardContent className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
                              <div className="flex items-center gap-6">
                                <div className="text-sm font-bold text-primary w-32 shrink-0">{item.time}</div>
                                <div>
                                  <h3 className="text-xl font-semibold">{item.event}</h3>
                                  <p className="text-sm text-muted-foreground">{item.location}</p>
                                </div>
                              </div>
                              <Badge variant={
                                item.category === "Technical" ? "default" :
                                item.category === "Cultural" ? "secondary" :
                                item.category === "Wellness" ? "outline" : "destructive"
                              } className="w-fit shrink-0">
                                {item.category}
                              </Badge>
                            </CardContent>
                          </Card>
                        </motion.div>
                      ))
                    ) : (
                      <div className="text-center py-12 text-muted-foreground">
                        No events found for this category on this day.
                      </div>
                    )}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}