import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ArrowRight, Check, ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";

const plans = [
  {
    name: "Early Bird",
    price: "₹499",
    features: ["Access to all events", "Event Kit", "Lunch included", "Certificate"],
    popular: false,
  },
  {
    name: "Standard",
    price: "₹799",
    features: ["Access to all events", "Premium Event Kit", "Lunch & Snacks", "Certificate", "Workshop Access"],
    popular: true,
  },
  {
    name: "Group (5+)",
    price: "₹399",
    features: ["Per person price", "Access to all events", "Event Kit", "Lunch included", "Team Certificate"],
    popular: false,
  },
];

export default function Registration() {
  const navigate = useNavigate();

  return (
    <section id="registration" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Register Now</h2>
          <p className="text-muted-foreground">Secure your spot at Prerana 2026.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className={`h-full flex flex-col relative ${plan.popular ? 'border-primary shadow-lg shadow-primary/20' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="text-4xl font-bold mt-2">{plan.price}</div>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-primary" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" variant={plan.popular ? "default" : "outline"} onClick={() => document.getElementById("fest-registration-frame")?.scrollIntoView({ behavior: "smooth" })}>
                    Select Plan
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Fest Registration Iframe */}
          <Card className="w-full overflow-hidden border-primary/20">
            <CardHeader>
              <CardTitle>Fest Registration</CardTitle>
              <CardDescription>Register for the main event here.</CardDescription>
            </CardHeader>
            <CardContent className="p-0 h-[800px] md:h-[1000px]" id="fest-registration-frame">
              <iframe 
                src="https://lu.ma/embed/event/evt_placeholder" 
                className="w-full h-full border-0"
                title="Fest Registration"
                allowFullScreen
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-presentation"
              ></iframe>
            </CardContent>
          </Card>

          {/* Individual Events Registration */}
          <div className="space-y-8">
            <Card className="h-full flex flex-col justify-center border-secondary/20 bg-secondary/5">
              <CardHeader>
                <CardTitle className="text-3xl">Individual Events</CardTitle>
                <CardDescription className="text-lg">
                  Participating in specific competitions or workshops?
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  If you wish to register for individual hackathons, dance battles, or workshops separately, please use our dedicated Google Form.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-secondary" />
                    <span>Hackathons & Coding Contests</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-secondary" />
                    <span>Cultural Competitions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-secondary" />
                    <span>Wellness Workshops</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  size="lg" 
                  className="w-full gap-2" 
                  onClick={() => navigate("/register")}
                >
                  Register for Individual Events <ArrowRight className="w-4 h-4" />
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}