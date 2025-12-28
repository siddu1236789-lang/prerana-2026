import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Set date to Jan 23, 2026 09:00:00 IST
    // IST is UTC+5:30
    const targetDate = new Date("2026-01-23T09:00:00+05:30").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex flex-col bg-background">
      {/* Video Container - Aspect Ratio 16:9 to match YouTube and avoid clipping */}
      <div className="relative w-full aspect-video bg-black overflow-hidden">
        <iframe
          src="https://www.youtube.com/embed/oouLiRSEI1U?autoplay=1&mute=1&controls=0&loop=1&playlist=oouLiRSEI1U&playsinline=1&rel=0"
          className="absolute inset-0 w-full h-full pointer-events-none"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          title="Hero Background"
        />
        {/* Subtle Overlay for text readability */}
        <div className="absolute inset-0 bg-black/20 z-10" />

        {/* Logo Content - Positioned at the bottom of the video area */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-end p-4 pb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center w-full"
          >
            {/* 'Coming Jan 2026' badge removed per request */}

          </motion.div>
        </div>
      </div>

      {/* Bottom Section with Details */}
      <div className="relative z-30 bg-background py-12 border-t border-white/5">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-2xl md:text-3xl font-light text-white/90 mb-4 tracking-wide drop-shadow-lg">
              The Spectrum Within
            </p>
            <p className="text-lg md:text-xl text-white/70 mb-8 font-light italic drop-shadow-md">
              Theme: Innovation, Collaboration, and Hope
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 mb-12 text-white/80">
              <div className="flex items-center gap-2 bg-muted/30 px-4 py-2 rounded-full backdrop-blur-md border border-white/10">
                <Calendar className="w-5 h-5 text-primary" />
                <span>Jan 22 - Jan 23, 2026</span>
              </div>
              <div className="flex items-center gap-2 bg-muted/30 px-4 py-2 rounded-full backdrop-blur-md border border-white/10">
                <MapPin className="w-5 h-5 text-primary" />
                <span>GITAM University, Bengaluru</span>
              </div>
            </div>

            {/* Countdown */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-xl mx-auto mb-12">
              {[
                { label: "Days", value: timeLeft.days },
                { label: "Hours", value: timeLeft.hours },
                { label: "Minutes", value: timeLeft.minutes },
                { label: "Seconds", value: timeLeft.seconds },
              ].map((item) => (
                <div key={item.label} className="bg-card/50 backdrop-blur-md border border-white/10 p-3 rounded-xl">
                  <div className="text-xl font-bold text-white mb-1 font-mono">{item.value.toString().padStart(2, '0')}</div>
                  <div className="text-[10px] text-white/60 uppercase tracking-wider">{item.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 rounded-xl shadow-[0_0_20px_-5px_var(--primary)] hover:shadow-[0_0_30px_-5px_var(--primary)] transition-shadow w-full sm:w-auto"
                onClick={() => navigate("/register")}
              >
                GET YOUR PASSES
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-6 rounded-xl bg-black/20 backdrop-blur-sm border-white/20 hover:bg-white/10 w-full sm:w-auto"
                onClick={() => navigate("/events")}
              >
                Explore Events
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}