import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
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
        <video
          src="/hero%20video.mp4"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-label="Hero Background Video"
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
            
           

            {/* Countdown */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
              {[
                { label: "Days", value: timeLeft.days },
                { label: "Hours", value: timeLeft.hours },
                { label: "Minutes", value: timeLeft.minutes },
                { label: "Seconds", value: timeLeft.seconds },
              ].map((item) => (
                <div key={item.label} className="bg-card/50 backdrop-blur-md border border-yellow-400 p-3 rounded-xl">
                  <div className="text-3xl font-bold text-white mb-1 font-mono">{item.value.toString().padStart(2, '0')}</div>
                  <div className="text-sm text-white/60 uppercase tracking-wider">{item.label}</div>
                </div>
              ))}
            </div>
             <div className="flex flex-wrap justify-center gap-6 mb-12 text-white/80">
              <div className="flex items-center gap-2 bg-muted/30 px-4 py-2 rounded-full backdrop-blur-md border border-white/10">
                <Calendar className="w-5 h-5 text-primary" />
                <a
                  href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Prerana%202026&dates=20260122T000000Z/20260123T235900Z&details=Annual%20Techno-Cultural%20and%20Wellness%20Fest%20of%20GITAM%20University&location=GITAM%20University,%20Bengaluru"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  <span>Jan 22 - Jan 23, 2026</span>
                </a>
              </div>
              <div className="flex items-center gap-2 bg-muted/30 px-4 py-2 rounded-full backdrop-blur-md border border-white/10">
                <MapPin className="w-5 h-5 text-primary" />
                <a
                  href="https://www.google.com/maps/place/GITAM+Deemed+to+be+University+Bengaluru/@13.2866427,77.5930016,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae3df04c9efe91:0x74ef0f7e2f81d564!8m2!3d13.2866427!4d77.5955765!16s%2Fg%2F1hjgjmxwt?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  GITAM University, Bengaluru
                </a>
              </div>
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
                className="text-lg px-8 py-6 rounded-xl bg-[var(--primary)] text-[var(--primary-foreground)] border-transparent shadow-[0_0_20px_-5px_var(--primary)] hover:brightness-105 hover:shadow-[0_0_30px_-5px_var(--primary)] focus-visible:ring-2 focus-visible:ring-[var(--ring)] transition-shadow w-full sm:w-auto"
                onClick={() => navigate("/events")}
              >
                Explore Events
              </Button>
            </div>

            <div className="mt-8 text-center">
              <Button className="text-lg gap-0" onClick={() => navigate("/schedule")}>
            View Full Schedule 
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}