import { Ticket } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

export default function GetPassFloating() {
  const navigate = useNavigate();
  const location = useLocation();

  // Hide on events pages and registration pages
  if (location.pathname.startsWith("/events") || location.pathname.startsWith("/register")) {
    return null;
  }

  return (
    <div className="fixed right-0 top-1/2 z-50 -translate-y-1/2 hidden md:flex">
      <button
        aria-label="Get your passes"
        onClick={() => navigate('/register')}
        className="group relative flex items-center gap-3 bg-yellow-400 border border-yellow-500 text-black font-bold py-3 px-3 rounded-l-full shadow-lg w-14 hover:w-56 focus:w-56 transform translate-x-6 hover:translate-x-0 focus:translate-x-0 transition-all duration-300 overflow-hidden"
      >
        <Ticket className="w-6 h-6 text-black stroke-2" />
        <span className="ml-2 whitespace-nowrap opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-black font-bold">
          GET YOUR PASSES
        </span>
      </button>
    </div>
  );
}
