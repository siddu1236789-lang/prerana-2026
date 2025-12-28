import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface SplashScreenProps {
  onComplete: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 500); // Wait for exit animation
    }, 2500); // Show for 2.5 seconds

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
      initial={{ opacity: 1 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative p-8 flex flex-col items-center text-center"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-secondary/20 to-accent/20 blur-3xl rounded-full animate-pulse" />
        
        <p className="text-xs md:text-sm text-muted-foreground mb-6 relative z-10 font-medium tracking-widest uppercase max-w-lg">
        <span className="block">The Directorate of Student Life</span>
        <span className="block">GITAM Deemed to be University</span>
        <span className="block mt-1 text-[10px] md:text-xs opacity-80">Presents</span>
        </p>

        <img
          src="https://harmless-tapir-303.convex.cloud/api/storage/4a061a6e-11ab-491e-b5a2-78a2aa928f5d"
          alt="Prerana 2026"
          className="w-64 md:w-96 object-contain relative z-10 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
        />
      </motion.div>
    </motion.div>
  );
}