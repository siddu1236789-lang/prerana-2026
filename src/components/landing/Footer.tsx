import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer id="footer" className="bg-card border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img src="https://harmless-tapir-303.convex.cloud/api/storage/4a061a6e-11ab-491e-b5a2-78a2aa928f5d" alt="PRERANA 2026" className="h-12 w-auto" />
            </div>
            <p className="text-muted-foreground text-sm">
              The Annual Techno-Cultural and Wellness Fest of GITAM University, Bengaluru.
            </p>
            <img 
              src="https://harmless-tapir-303.convex.cloud/api/storage/920deb77-5b83-473c-846b-cfaa277979fe" 
              alt="Prerana Mascot" 
              className="h-32 w-auto object-contain mt-4" 
            />
          </div>

          <div>
            <h3 className="text-lg font-semibold text-primary mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/#about" className="hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/events" className="hover:text-primary transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link to="/sponsors" className="hover:text-primary transition-colors">
                  Sponsors
                </Link>
              </li>
              <li>
                <Link to="/team" className="hover:text-primary transition-colors">
                  Team
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/security-guidelines" className="hover:text-primary transition-colors">
                  Security Guidelines
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>preranablr@gitam.in</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+91 87982 98162</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1" />
                <span>GITAM University, Bengaluru</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/prerana.bengaluru" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <button
                onClick={() => window.location.href = "mailto:preranablr@gitam.in"}
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
              >
                <Mail className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>&copy; 2026 Prerana Fest. All rights reserved.</p>
          <p className="text-center">Developed by Team Technology</p>
          <div className="flex items-center gap-2">
             <span>Powered by</span>
             <a
               href="https://www.gitam.edu/"
               target="_blank"
               rel="noopener noreferrer"
               className="font-bold text-primary hover:underline"
             >
               GITAM University, Bengaluru
             </a>
          </div>
        </div>
      </div>
    </footer>
  );
}