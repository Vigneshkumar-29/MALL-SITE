import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { cn } from "../../utils/cn";

export default function DeckNav() {
  const location = useLocation();
  
  const links = [
    { name: "Overview", path: "/" },
    { name: "Events", path: "/events" },
    { name: "Sponsorship", path: "/sponsorship" },
    { name: "Leasing", path: "/leasing" },
  ];

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="fixed top-0 left-0 w-full z-50 mix-blend-difference px-6 py-6"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-xl font-bold tracking-widest uppercase">
          TDM
        </Link>
        <div className="flex gap-8">
          {links.map((link) => (
            <Link 
              key={link.path} 
              to={link.path}
              className={cn(
                "text-sm tracking-[0.1em] uppercase transition-colors relative",
                location.pathname === link.path ? "text-white" : "text-gray-500 hover:text-white"
              )}
            >
              {link.name}
              {location.pathname === link.path && (
                <motion.div 
                  layoutId="underline"
                  className="absolute -bottom-2 left-0 w-full h-[1px] bg-white"
                />
              )}
            </Link>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
