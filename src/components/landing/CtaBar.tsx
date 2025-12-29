import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function CtaBar() {
  const navigate = useNavigate();

  return (
    <section className="py-16 bg-primary/10 border-y border-primary/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gridlines" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">Ready to Join the Revolution?</h2>
            <p className="text-muted-foreground text-lg">Secure your spot at Prerana 2026 today.</p>
          </div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              size="lg" 
              className="text-xl px-10 py-8 rounded-full shadow-[0_0_30px_-5px_var(--primary)] animate-pulse hover:animate-none"
              onClick={() => navigate("/register")}
            >
              GET YOUR PASSES
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
