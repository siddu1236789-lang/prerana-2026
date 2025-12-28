import EventCategories from "@/components/events/EventCategories";
import EventDetails from "@/components/events/EventDetails";
import EventList from "@/components/events/EventList";
import Footer from "@/components/landing/Footer";
import Navbar from "@/components/landing/Navbar";
import { Button } from "@/components/ui/button";
import { events } from "@/data/events";
import { useNavigate, useParams } from "react-router-dom";

export default function Events() {
  const navigate = useNavigate();
  const { category, slug } = useParams();

  // Filter events based on category
  const categoryEvents = category 
    ? events.filter(e => e.category.toLowerCase() === category.toLowerCase() && e.active)
    : [];

  // Find specific event if slug is present
  const selectedEvent = slug 
    ? events.find(e => e.slug === slug)
    : null;

  return (
    <div className="min-h-screen bg-background text-foreground font-sans relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <Navbar />
      <main className="pt-24 pb-20 relative z-10">
        <div className="container mx-auto px-4">
          
          {/* VIEW 1: CATEGORIES LIST (Default) */}
          {!category && !slug && (
            <EventCategories />
          )}

          {/* VIEW 2: EVENTS LIST (Filtered by Category) */}
          {category && !slug && (
            <EventList category={category} events={categoryEvents} />
          )}

          {/* VIEW 3: EVENT DETAILS */}
          {slug && selectedEvent && (
            <EventDetails event={selectedEvent} category={category!} />
          )}

          {/* 404 STATE FOR EVENT */}
          {slug && !selectedEvent && (
            <div className="text-center py-20">
              <h2 className="text-3xl font-bold mb-4">Event Not Found</h2>
              <Button onClick={() => navigate("/events")}>Back to Events</Button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}